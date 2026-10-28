import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import pages from '@/data/wordpress-manifest.json';
import campImage from '@/assets/summer-camp-uk.jpg';
import articlesImage from '@/assets/facility-library.jpg';

const schoolYear = pages.find(page => page.path === '/structura-anului-scolar-2026-2027/')!;
const cards = [
  { title: 'Structura anului școlar 2026–2027', image: schoolYear.image, path: schoolYear.path, label: 'Calendar școlar' },
  { title: 'Tabere Pro Erudio', image: campImage, path: 'https://tabere.proerudio.ro', label: 'Experiențe de neuitat' },
  { title: 'Articolele noastre', image: articlesImage, path: '/articole-pro-erudio/', label: 'Inspirație și educație' },
];

export default function DetailLayout({ children }: { children: ReactNode }) {
  const layout = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const update = () => layout.current?.style.setProperty('--detail-navbar-height', `${header.getBoundingClientRect().height}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return <div ref={layout} className="detail-layout">
    <div className="detail-layout-content">{children}</div>
    <aside className="detail-sidebar" aria-label="Descoperă Pro Erudio">
      {cards.map(card => {
        const content = <><img src={card.image} alt="" loading="lazy" /><div className="detail-sidebar-caption"><span>{card.label}</span><h2>{card.title}</h2><ArrowUpRight aria-hidden="true" /></div></>;
        return card.path.startsWith('https:')
          ? <a key={card.path} className="detail-sidebar-card" href={card.path} target="_blank" rel="noopener noreferrer">{content}</a>
          : <Link key={card.path} className="detail-sidebar-card" to={card.path}>{content}</Link>;
      })}
    </aside>
  </div>;
}
