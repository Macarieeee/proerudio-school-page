/** Adapt this page's imported course grid without changing its source content. */
import { limitImportedCardGrids } from './expand-card-grids';

export function formatRegistrationCourses(html: string): string {
  const document = new DOMParser().parseFromString(html, 'text/html');
  document.querySelectorAll('[data-vc-grid-settings]').forEach(sourceGrid => {
    const grid = document.createElement('div');
    grid.className = 'registration-course-grid';
    sourceGrid.querySelectorAll('[data-vc-animation]').forEach(item => {
      const originalLink = item.querySelector<HTMLAnchorElement>('a[href]');
      const originalImage = item.querySelector<HTMLImageElement>('[data-bg] img');
      if (!originalLink || !originalImage) return;
      const title = originalLink.title || originalImage.alt;
      const card = document.createElement('a');
      card.className = 'registration-course-card';
      card.href = originalLink.getAttribute('href')!;
      const media = document.createElement('div');
      media.className = 'registration-course-media';
      const image = document.createElement('img');
      image.src = originalImage.src;
      image.alt = originalImage.alt;
      image.loading = 'lazy';
      image.decoding = 'async';
      media.append(image);
      const body = document.createElement('div');
      body.className = 'registration-course-body';
      const heading = document.createElement('h3');
      heading.textContent = title;
      const action = document.createElement('span');
      action.className = 'registration-course-action';
      action.append('Descoperă cursul');
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      action.append(arrow);
      body.append(heading, action);
      card.append(media, body);
      grid.append(card);
    });
    if (grid.childElementCount) sourceGrid.replaceWith(grid);
  });
  limitImportedCardGrids(document);
  return document.body.innerHTML;
}
