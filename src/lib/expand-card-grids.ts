/** Enhance imported HTML grids independently; native React grids use ExpandableCardGrid. */
export function limitImportedCardGrids(document: Document) {
  document.querySelectorAll<HTMLElement>('.related-content-grid, .registration-course-grid').forEach((grid, index) => {
    if (grid.children.length <= 6) return;
    grid.id = `imported-card-grid-${index}`;
    [...grid.children].slice(6).forEach(card => card.setAttribute('hidden', ''));
    const wrapper = document.createElement('div');
    wrapper.className = 'card-grid-more';
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Vezi mai mult';
    button.className = 'imported-grid-more-button';
    button.setAttribute('aria-controls', grid.id);
    button.setAttribute('aria-expanded', 'false');
    button.dataset.expandCardGrid = 'true';
    wrapper.append(button);
    grid.after(wrapper);
  });
}

export function expandImportedCardGrid(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const button = target.closest<HTMLButtonElement>('[data-expand-card-grid]');
  if (!button) return false;
  const wrapper = button.parentElement;
  const grid = wrapper?.previousElementSibling;
  if (!grid) return false;
  const first = grid.querySelector<HTMLElement>('[hidden]');
  grid.querySelectorAll('[hidden]').forEach(card => card.removeAttribute('hidden'));
  button.setAttribute('aria-expanded', 'true');
  first?.focus({ preventScroll: true });
  wrapper?.remove();
  return true;
}
