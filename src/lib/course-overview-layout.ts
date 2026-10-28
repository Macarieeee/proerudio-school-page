import pages from '@/data/wordpress-manifest.json';

/** Turn the legacy image/text course rows into horizontal, linked cards. */
export function formatCourseOverview(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('figure').forEach(figure => {
    if (figure.closest('[data-vc-grid-settings]')) return;
    const photo = figure.querySelector('img');
    if (!photo) return;
    let row = figure.parentElement;
    while (row && !row.querySelector('p a[href]')) row = row.parentElement;
    if (!row || row.querySelectorAll('img').length !== 1) return;
    const link = row.querySelector<HTMLAnchorElement>('p a[href]');
    if (!link) return;
    const path = new URL(link.getAttribute('href')!, 'https://www.proerudio.ro').pathname;
    if (!pages.some(page => page.path === path && /curs/.test(page.slug))) return;

    const card = doc.createElement('a');
    card.className = 'course-overview-card';
    card.href = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
    const media = doc.createElement('div');
    media.className = 'course-overview-photo';
    const image = photo.cloneNode(true) as HTMLImageElement;
    image.alt = '';
    image.loading = 'lazy';
    image.removeAttribute('fetchpriority');
    image.sizes = '(max-width: 640px) 90vw, 280px';
    media.append(image);
    const body = doc.createElement('div');
    body.className = 'course-overview-body';
    const title = doc.createElement('h3');
    title.textContent = link.textContent?.trim() || '';
    body.append(title);
    row.querySelectorAll('p').forEach(paragraph => {
      if (paragraph.contains(link) || !paragraph.textContent?.trim()) return;
      const text = doc.createElement('p');
      text.textContent = paragraph.textContent.trim();
      body.append(text);
    });
    const action = doc.createElement('span');
    action.className = 'course-overview-action';
    action.textContent = 'Descoperă cursul';
    const arrow = doc.createElement('span');
    arrow.textContent = ' →';
    arrow.setAttribute('aria-hidden', 'true');
    action.append(arrow);
    body.append(action);
    card.append(media, body);
    row.replaceWith(card);
  });
  const preparation = [
    { slug: 'modul-optional-de-pregatire-pentru-examenele-cambridge-english', summary: 'Pregătire suplimentară pentru participanții la examenele Cambridge English, cu accent pe cerințele și formatul examenului.' },
    { slug: 'cambridge-mock-tests', summary: 'Teste digitale și simulări pentru familiarizarea cu structura examenelor Cambridge, tipurile de exerciții și gestionarea timpului.' },
    { slug: 'cursuri-interactive-de-conversatie-cu-profesori-internationali', summary: 'Cursuri de conversație în weekend, cu trainer internațional, pentru copii cu un nivel de engleză cel puțin elementar.' },
  ];
  const section = doc.createElement('section');
  section.className = 'course-overview-preparation';
  const heading = doc.createElement('h2');
  heading.textContent = 'Pregătire examene Cambridge';
  section.append(heading);
  preparation.forEach(({ slug, summary }) => {
    const page = pages.find(page => page.slug === slug);
    if (!page) return;
    const card = doc.createElement('a');
    card.className = 'course-overview-card';
    card.href = `${import.meta.env.BASE_URL.replace(/\/$/, '')}${page.path}`;
    const media = doc.createElement('div');
    media.className = 'course-overview-photo';
    const image = doc.createElement('img');
    image.src = page.image;
    image.alt = '';
    image.loading = 'lazy';
    media.append(image);
    const body = doc.createElement('div');
    body.className = 'course-overview-body';
    const title = doc.createElement('h3');
    title.textContent = page.title;
    const description = doc.createElement('p');
    description.textContent = summary;
    const action = doc.createElement('span');
    action.className = 'course-overview-action';
    action.textContent = 'Vezi detaliile';
    const arrow = doc.createElement('span');
    arrow.textContent = ' →';
    arrow.setAttribute('aria-hidden', 'true');
    action.append(arrow);
    body.append(title, description, action);
    card.append(media, body);
    section.append(card);
  });
  const courseCards = doc.querySelectorAll('.course-overview-card');
  courseCards[courseCards.length - 1]?.after(section);
  return doc.body.innerHTML;
}
