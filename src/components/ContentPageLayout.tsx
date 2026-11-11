import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DetailLayout from '@/components/DetailLayout';
import { expandCardGrid } from '@/lib/expand-card-grids';

type Props = { hero: ReactNode; children: ReactNode; bodyClass: string };

export default function ContentPageLayout({ hero, children, bodyClass }: Props) {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    if (!image) return;
    const previous = document.body.style.overflow;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setImage(null); };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', close);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', close); };
  }, [image]);
  const onClick = (event: MouseEvent<HTMLElement>) => {
    if (expandCardGrid(event.target)) return;
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('.photo-gallery a');
    if (!link || !/\.(jpe?g|png|webp|gif)(\?|$)/i.test(link.href)) return;
    event.preventDefault();
    setImage(link.href);
  };
  return <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-[var(--site-header-height,88px)]" onClick={onClick}>
      {hero}
      <section className={bodyClass}><DetailLayout>{children}</DetailLayout></section>
    </main>
    <Footer />
    {image && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Imagine mărită" onClick={() => setImage(null)}>
      <button autoFocus type="button" className="absolute right-4 top-4 rounded-full bg-background p-3 text-foreground" aria-label="Închide imaginea" onClick={() => setImage(null)}>✕</button>
      <img src={image} alt="Imagine mărită de la cursurile Pro Erudio" className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain" onClick={event => event.stopPropagation()} />
    </div>}
  </div>;
}
