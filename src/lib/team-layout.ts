import teamMembers from '@/data/team-members.json';

/** Restyle the imported team without duplicating its names, roles or profile URLs. */
export function formatTeamCards(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll<HTMLAnchorElement>('h4 > a[href]').forEach(profile => {
    let item = profile.parentElement?.parentElement;
    while (item && !item.querySelector('img')) item = item.parentElement;
    if (!item || item.querySelectorAll('h4').length !== 1) return;
    const photo = item.querySelector('img');
    const role = item.querySelector('p');
    if (!photo || !role?.textContent?.trim()) return;

    const card = doc.createElement('a');
    card.className = 'team-card';
    card.href = profile.getAttribute('href')!;
    const portrait = photo.cloneNode(true) as HTMLImageElement;
    const profilePath = new URL(card.href, 'https://www.proerudio.ro').pathname;
    const member = teamMembers.find(member => member.to === profilePath);
    if (member) portrait.src = member.image;
    portrait.alt = '';
    portrait.loading = 'lazy';
    portrait.removeAttribute('srcset');
    portrait.removeAttribute('sizes');
    const name = doc.createElement('h3');
    name.textContent = profile.textContent;
    const subject = doc.createElement('span');
    subject.className = 'team-card-role';
    subject.textContent = role.textContent;
    card.append(portrait, name, subject);
    const extra = item.querySelector('hr')?.nextElementSibling?.textContent?.trim();
    if (extra) {
      const badge = doc.createElement('span');
      badge.className = 'team-card-badge';
      badge.textContent = extra;
      card.append(badge);
    }
    const action = doc.createElement('span');
    action.className = 'team-card-action';
    action.textContent = /profesor|trainer/i.test(role.textContent) ? 'Cunoaște profesorul' : 'Vezi profilul';
    const arrow = doc.createElement('span');
    arrow.textContent = ' ↗';
    arrow.setAttribute('aria-hidden', 'true');
    action.append(arrow);
    card.append(action);
    item.replaceWith(card);
  });
  // WordPress splits the teachers across nested row wrappers. Gather them into
  // one grid so every teacher has the same width and the order stays intact.
  const cards = [...doc.querySelectorAll('.team-card')];
  if (cards.length) {
    const grid = doc.createElement('div');
    grid.className = 'team-grid';
    cards[0].before(grid);
    grid.append(...cards);
  }
  return doc.body.innerHTML;
}

export function formatTeamProfile(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const name = doc.querySelector('h2');
  const role = doc.querySelector('h6');
  const photo = doc.querySelector('figure img');
  if (!name || !photo) return html;
  const header = doc.createElement('section');
  header.className = 'team-profile-header';
  const portrait = photo.cloneNode(true) as HTMLImageElement;
  portrait.alt = name.textContent || '';
  portrait.sizes = '180px';
  const info = doc.createElement('div');
  name.before(header);
  info.append(name);
  if (role) info.append(role);
  const link = doc.createElement('a');
  link.href = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/echipa-pro-erudio/`;
  link.textContent = '← Înapoi la echipă';
  info.append(link);
  header.append(portrait, info);
  photo.closest('figure')?.remove();
  return doc.body.innerHTML;
}
