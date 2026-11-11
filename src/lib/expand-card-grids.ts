export function expandCardGrid(target: EventTarget | null): boolean {
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
