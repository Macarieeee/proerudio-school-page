import pages from '@/data/wordpress-manifest.json';
import { limitImportedCardGrids } from './expand-card-grids';
import classroom from '@/assets/about-classroom.jpg';
import students from '@/assets/curriculum-students.jpg';
import auditorium from '@/assets/facility-auditorium.jpg';
import library from '@/assets/facility-library.jpg';
import program from '@/assets/programs-student.jpg';

export type ContentPage = (typeof pages)[number];
export type RelatedCard = { path: string; title: string; image: string; summary: string; badge: string; action: string };
const courseImages: Record<string, string> = {
  'curs-de-limba-engleza-head-for-ketpet': students,
  'curs-de-limba-engleza-head-for-fce-cae-cpe': auditorium,
  'curs-de-limba-engleza-head-for-ielts': library,
  'curs-de-limba-engleza-pentru-tineri-head-for-toefl': program,
};
export const cleanExcerpt = (text: string) => text.replace(/\[[^\]]*\]/g, '').replace(/<[^>]*>/g, '').replace(/[#*_]/g, '').replace(/\s+/g, ' ').trim();
export function cardForPage(page: ContentPage, image?: string): RelatedCard {
  const course = /curs|english|cambridge|storytime|kingdom|words|crafts|dramatic|songs|deutsch|japonia|reading|summer|head-for|leaders/i.test(page.slug + page.path) && page.type === 'page';
  const badge = page.path.includes('12-19-ani') ? '12–19 ani' : page.path.includes('4-11-ani') ? '4–11 ani' : page.path.includes('cursuri-de-vara') ? 'Cursuri de vară' : page.type === 'post' ? 'Articole' : course ? 'Cursuri Pro Erudio' : 'Pro Erudio';
  return { path: page.path, title: page.title, image: courseImages[page.slug] || image || page.image || classroom, summary: cleanExcerpt(page.description || page.excerpt), badge, action: course ? 'Vezi cursul' : page.type === 'post' ? 'Citește articolul' : 'Vezi detaliile' };
}
export function relatedPages(page: ContentPage): ContentPage[] {
  const parent = page.path.slice(0, page.path.lastIndexOf('/', page.path.length - 2) + 1);
  const tokens = new Set(cleanExcerpt(page.title).toLowerCase().match(/[\p{L}\d-]{4,}/gu) || []);
  const candidates = pages.filter(p => p.type === page.type && p.url !== page.url && (p.type === 'post' || (page.path !== '/' && p.path.startsWith(page.path))));
  const score = (p: ContentPage) => {
    let rank = 0;
    if (p.type === 'post') {
      const categories = 'categories' in page ? page.categories : [];
      const tags = 'tags' in page ? page.tags : [];
      rank += ('categories' in p ? p.categories : [])?.filter(id => categories?.includes(id)).length * 10 || 0;
      rank += ('tags' in p ? p.tags : [])?.filter(id => tags?.includes(id)).length * 15 || 0;
      rank += (p.title.toLowerCase().match(/[\p{L}\d-]{4,}/gu) || []).filter(token => tokens.has(token) && !['pentru', 'copii', 'proerudio', 'erudio', 'copilul'].includes(token)).length * 3;
    } else if (parent !== '/' && p.path.startsWith(parent)) rank = 10;
    else if (p.path.startsWith(page.path)) rank = 5;
    return rank;
  };
  return candidates.map(p => ({ page: p, score: score(p) })).filter(p => p.score > 0).sort((a, b) => b.score - a.score || b.page.date.localeCompare(a.page.date)).slice(0, 6).map(p => p.page);
}

/** Only transform collections of linked content, leaving text, forms and photo galleries intact. */
export function formatRelatedCollections(html: string, currentPath: string): string {
  const document = new DOMParser().parseFromString(html, 'text/html');
  const resolve = (link: HTMLAnchorElement) => {
    const url = new URL(link.getAttribute('href') || '', 'https://www.proerudio.ro');
    if (!['www.proerudio.ro', 'proerudio.ro'].includes(url.hostname)) return undefined;
    const id = url.searchParams.get('page_id') || url.searchParams.get('p');
    return pages.find(p => (id ? String(p.id) === id : p.path === url.pathname) && ['page', 'post'].includes(p.type));
  };
  const build = (container: Element) => {
    const cards = new Map<string, RelatedCard>();
    container.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      const page = resolve(link);
      if (!page || page.path === currentPath || cards.has(page.path)) return;
      let item: Element | null = link.closest('[data-vc-animation]');
      if (!item) {
        item = link.parentElement;
        while (item && item !== container && !item.querySelector('img')) item = item.parentElement;
      }
      const image = item?.querySelector<HTMLImageElement>('[data-bg] img, img:not([src*="proerudio_wh"]):not([src*="logo"])')?.getAttribute('src');
      cards.set(page.path, cardForPage(page, image || undefined));
    });
    return [...cards.values()];
  };
  const render = (cards: RelatedCard[]) => {
    const grid = document.createElement('div');
    grid.className = 'related-content-grid';
    for (const card of cards) {
      const link = document.createElement('a');
      link.href = card.path;
      link.className = 'related-content-card';
      const media = document.createElement('div');
      media.className = 'related-content-media';
      media.style.backgroundImage = `url("${card.image}")`;
      const title = document.createElement('h3');
      title.textContent = card.title;
      media.append(title);
      const body = document.createElement('div');
      body.className = 'related-content-body';
      const badge = document.createElement('span');
      badge.className = 'related-content-badge';
      badge.textContent = card.badge;
      const summary = document.createElement('p');
      summary.textContent = card.summary;
      const action = document.createElement('span');
      action.className = 'related-content-action';
      action.append(card.action);
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      action.append(arrow);
      body.append(badge, summary, action);
      link.append(media, body);
      grid.append(link);
    }
    return grid;
  };
  document.querySelectorAll('[data-vc-grid-settings]').forEach(container => {
    let cards = build(container);
    if (!cards.length) {
      // Some old WordPress grids fetched their items through AJAX instead of HTML.
      const current = pages.find(p => p.path === currentPath);
      let prefix = currentPath;
      let candidates = pages.filter(p => p.type === 'page' && p.path !== currentPath && p.path.startsWith(prefix));
      if (!candidates.length) {
        prefix = current?.slug === 'home-cursuri-de-vara' ? '/cursuri-de-vara/' : currentPath.slice(0, currentPath.lastIndexOf('/', currentPath.length - 2) + 1);
        if (prefix !== '/') candidates = pages.filter(p => p.type === 'page' && p.path !== currentPath && p.path.startsWith(prefix) && p.path.slice(prefix.length).split('/').filter(Boolean).length === 1);
      }
      cards = candidates.map(p => cardForPage(p));
    }
    if (cards.length) container.replaceWith(render(cards));
  });
  // Older imports also use ordinary lists beneath related-content headings.
  document.querySelectorAll('h2,h3,h4').forEach(heading => {
    if (!/^(alte\s+(cursuri|articole|programe)|related\s+posts|cursuri\s+similare)/i.test(heading.textContent?.trim() || '')) return;
    let sibling = heading.nextElementSibling;
    while (sibling && !/^H[1-6]$/.test(sibling.tagName)) {
      const next = sibling.nextElementSibling;
      if (!sibling.querySelector('.related-content-grid') && !sibling.classList.contains('related-content-grid') && !sibling.classList.contains('wordpress-gallery') && !sibling.querySelector('form, .migration-form')) {
        const cards = build(sibling);
        if (cards.length >= 2 && !sibling.querySelector('table')) sibling.replaceWith(render(cards));
      }
      sibling = next;
    }
  });
  limitImportedCardGrids(document);
  return document.body.innerHTML;
}
