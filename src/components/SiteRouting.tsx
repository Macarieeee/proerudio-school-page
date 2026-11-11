import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pages from '@/data/pages.json';
import aliases from '@/data/route-aliases.json';


export default function SiteRouting() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const page = pages.find(p => p.path.replace(/\/$/, '') === pathname.replace(/\/$/, '') && new URL(p.url).search === search) || pages.find(p => p.path.replace(/\/$/, '') === pathname.replace(/\/$/, '') && !new URL(p.url).search);
    if (page) {
      const title = document.createElement('textarea');
      title.innerHTML = page.seoTitle;
      document.title = title.value;
      queueMicrotask(() => { document.title = title.value; });
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
      canonical.href = page.url;
      let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!description) { description = document.createElement('meta'); description.name = 'description'; document.head.append(description); }
      description.content = page.description;
    } else {
      document.querySelector('link[rel="canonical"]')?.remove();
    }
    // Correct links without changing the content or appearance of existing pages.
    const fixLinks = () => document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(anchor => {
      if (anchor.dataset.originalForm) return;
      const url = new URL(anchor.href);
      const base = import.meta.env.BASE_URL.replace(/\/$/, '');
      const localPath = url.origin === location.origin && base && url.pathname.startsWith(`${base}/`) ? url.pathname.slice(base.length) : url.pathname;
      const internal = url.origin === location.origin || ['www.proerudio.ro', 'proerudio.ro'].includes(url.hostname);
      if (!internal || localPath.startsWith('/wp-content/')) return;
      const alias = aliases[(localPath.replace(/\/$/, '') || '') + '/' as keyof typeof aliases];
      let target = pages.find(p => p.path === alias) || pages.find(p => p.path === localPath || p.path.replace(/\/$/, '') === localPath.replace(/\/$/, ''));
      if (!target) target = pages.find(p => p.slug === localPath.replace(/^\//, '').replace(/\/$/, ''));
      const schoolYear = /^\/structura-anului-scolar-(\d{4}-\d{4})\/?$/.exec(localPath)?.[1];
      if (!target && schoolYear) target = pages.find(p => p.type === 'post' && p.slug.startsWith('structura-anului-scolar') && p.title.includes(schoolYear));
      if (!target && localPath.replace(/\/$/, '') === '/articole') target = pages.find(p => p.slug === 'articole-pro-erudio');
      if (!target && localPath.replace(/\/$/, '') === '/cursuri-vara/storytime') target = pages.find(p => p.slug === 'storytime-copii-4-7-ani');
      if (target) {
        const href = `${base}${target.path}${url.search}${url.hash}`;
        if (anchor.getAttribute('href') !== href) anchor.setAttribute('href', href);
      }
    });
    fixLinks();
    const observer = new MutationObserver(fixLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download') || anchor.dataset.originalForm || event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const url = new URL(anchor.href);
      const base = import.meta.env.BASE_URL.replace(/\/$/, '');
      const route = base && url.pathname.startsWith(`${base}/`) ? url.pathname.slice(base.length) : url.pathname;
      if (url.origin === location.origin && pages.some(p => p.path === route)) { event.preventDefault(); navigate(route + url.search + url.hash); }
    };
    document.addEventListener('click', onClick);
    return () => { observer.disconnect(); document.removeEventListener('click', onClick); };
  }, [pathname, search, navigate]);
  return null;
}
