import { formatRegistrationCourses } from './registration-layout';

/** Preserve the summer page's content while replacing its legacy category rows. */
export function formatSummerCourses(html: string): string {
  const document = new DOMParser().parseFromString(html, 'text/html');
  const grid = document.createElement('div');
  grid.className = 'registration-course-grid summer-category-grid';

  document.querySelectorAll<HTMLAnchorElement>('h4 a[href]').forEach(link => {
    const image = link.querySelector('img');
    if (!image) return;
    const row = link.closest('h4')?.parentElement;
    const titleLink = row?.querySelector<HTMLAnchorElement>('h4 + h4 a[href]');
    if (!row || !titleLink) return;
    const card = document.createElement('a');
    card.href = link.getAttribute('href')!;
    card.className = 'registration-course-card';
    const media = document.createElement('div');
    media.className = 'registration-course-media';
    image.loading = 'lazy';
    image.sizes = '(max-width: 640px) 90vw, 300px';
    media.append(image);
    const body = document.createElement('div');
    body.className = 'registration-course-body';
    const heading = document.createElement('h3');
    heading.textContent = titleLink.innerHTML.replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]+>/g, '').trim();
    const action = document.createElement('span');
    action.className = 'registration-course-action';
    action.textContent = 'Descoperă cursurile →';
    body.append(heading, action);
    card.append(media, body);
    if (!grid.parentElement) row.before(grid);
    grid.append(card);
    row.remove();
  });

  const posters = [...document.querySelectorAll('figure')].filter(figure =>
    !figure.closest('[data-vc-grid-settings]') && figure.querySelector('img'),
  );
  if (posters.length) {
    const gallery = document.createElement('div');
    gallery.className = 'summer-course-posters';
    posters[0].before(gallery);
    posters.slice(1).forEach(figure => figure.remove());
    posters.slice(0, 1).forEach(figure => {
      const image = figure.querySelector('img')!;
      image.loading = 'lazy';
      image.removeAttribute('fetchpriority');
      image.sizes = '(max-width: 640px) 90vw, 360px';
      gallery.append(figure);
    });
  }
  return formatRegistrationCourses(document.body.innerHTML);
}
