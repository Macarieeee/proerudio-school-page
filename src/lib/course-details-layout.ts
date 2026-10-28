import classroomImage from '@/assets/about-classroom.jpg';

/** Preserve offer information before the remaining WordPress shortcodes are stripped. */
export function expandCourseOffers(source: string): string {
  return source.replace(/\[pricing_item\s+([^\]]*)\]([\s\S]*?)\[\/pricing_item\]/gi, (_match, attributes: string, body: string) => {
    const values = Object.fromEntries([...attributes.matchAll(/([\w_]+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
    const escape = (value = '') => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    return `<div><div><div><img src="${classroomImage}" alt="" /></div><h2>${escape(values.title)}</h2><div><sup>${escape(values.currency)}</sup><span>${escape(values.price)}</span><sup>${escape(values.period)}</sup></div><hr /><p><big>${escape(values.subtitle)}</big></p></div><div>${body}</div><div><a href="${escape(values.link)}">${escape(values.link_title)}</a></div></div>`;
  });
}

/** Restore a shared layout for pricing panels whose WordPress styles were removed. */
export function formatCourseDetails(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const icons: Record<string, string> = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"/>',
  };
  const icon = (name: string) => {
    const span = doc.createElement('span');
    span.className = 'course-fact-icon';
    span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
    return span;
  };

  doc.querySelectorAll('sup').forEach(currency => {
    if (!/^(lei|ron|eur|€)$/i.test(currency.textContent?.trim() || '')) return;
    const price = currency.parentElement;
    const header = price?.parentElement;
    const panel = header?.parentElement;
    if (!price || !header || !panel || panel.classList.contains('course-details-panel')) return;
    // Match only complete course offers, never arbitrary prices in prose or tables.
    if (!header.querySelector('h2,h3,h4') || !panel.querySelector('li') || !panel.querySelector('a[href*="inscriere"]')) return;
    panel.classList.add('course-details-panel');
    header.classList.add('course-details-header');
    price.classList.add('course-price');
    const photo = header.querySelector('img');
    if (photo?.parentElement && photo.parentElement !== header) {
      photo.parentElement.classList.add('course-details-photo');
      photo.parentElement.style.backgroundImage = `url("${classroomImage}")`;
    }
    panel.querySelectorAll('li').forEach(item => {
      item.classList.add('course-fact');
      const label = normalize(item.textContent || '');
      item.prepend(icon(/varsta|participanti|grupa/.test(label) ? 'users' : /modul|frecventa|saptamana/.test(label) ? 'calendar' : 'clock'));
    });
    [...panel.children].forEach(child => {
      if (child === header) return;
      child.classList.add(child.querySelector('li') ? 'course-details-facts' : 'course-details-footer');
    });
    panel.querySelectorAll('a[href*="inscriere"]').forEach(link => {
      link.classList.add('course-enroll-button');
      const url = new URL(link.getAttribute('href')!, 'https://www.proerudio.ro');
      if (['proerudio.ro', 'www.proerudio.ro'].includes(url.hostname)) {
        link.setAttribute('href', `${import.meta.env.BASE_URL.replace(/\/$/, '')}${url.pathname}${url.search}${url.hash}`);
        link.removeAttribute('target');
      }
    });
  });

  doc.querySelectorAll('aside').forEach(aside => {
    if (!/program|orar/i.test(aside.querySelector('h2,h3,h4,h5')?.textContent || '')) return;
    aside.classList.add('course-schedule');
  });
  doc.querySelectorAll('a[data-site]').forEach(link => {
    const list = link.closest('ul');
    if (!list) return;
    list.classList.add('course-share-links');
    list.parentElement?.classList.add('course-share');
    link.setAttribute('rel', 'noopener noreferrer');
  });
  return doc.body.innerHTML;
}
