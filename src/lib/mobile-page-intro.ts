/** Avoid repeating the original image now rendered by the shared page intro. */
export function markOriginalIntroImage(html: string, originalImage?: string): string {
  if (!originalImage) return html;
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const imageKey = (source: string) => source.split('/').pop()?.split('?')[0].replace(/-\d+x\d+(?=\.)/, '');
  const firstImage = doc.querySelector('img');
  if (!firstImage || imageKey(firstImage.getAttribute('src') || '') !== imageKey(originalImage)) return html;
  const figure = firstImage.closest('figure');
  const target = figure && !figure.textContent?.trim() && figure.querySelectorAll('img').length === 1 ? figure : firstImage;
  target.classList.add('original-intro-image');
  return doc.body.innerHTML;
}
