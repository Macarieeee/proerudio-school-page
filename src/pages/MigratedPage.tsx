import DetailLayout from '@/components/DetailLayout';
import { formatTeamCards, formatTeamProfile } from '@/lib/team-layout';
import teamMembers from '@/data/team-members.json';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CalendarDays } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import wordpress from '@/data/wordpress-manifest.json';
import classroomImage from '@/assets/about-classroom.jpg';
import { useEffect, useState, type MouseEvent } from 'react';
import { formatRegistrationCourses } from '@/lib/registration-layout';
import { cardForPage, formatRelatedCollections, relatedPages } from '@/lib/related-content';
import RelatedContentCards from '@/components/RelatedContentCards';
import { expandImportedCardGrid } from '@/lib/expand-card-grids';
import { formatCourseDetails } from '@/lib/course-details-layout';

export const migratedPages = wordpress;
export type MigratedDefinition = (typeof wordpress)[number];

const MigratedPage = ({ page }: { page: MigratedDefinition }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState<{ path: string; html: string } | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setFailed(false);
    fetch(`${import.meta.env.BASE_URL}content/${page.contentFile}`, { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Content unavailable'); return response.text(); })
      .then(html => page.slug === 'echipa-pro-erudio' ? formatTeamCards(html) : html)
      .then(html => teamMembers.some(member => member.to === page.path) ? formatTeamProfile(html) : html)
      .then(html => setContent({ path: page.path, html: formatCourseDetails(page.slug === 'inscriere-cursuri-pro-erudio' ? formatRegistrationCourses(html) : formatRelatedCollections(html, page.path)) }))
      .catch(error => { if (error.name !== 'AbortError') setFailed(true); });
    return () => controller.abort();
  }, [page.path, page.contentFile, page.slug]);
  const article = page.type === 'post';
  const related = content?.html.includes('related-content-grid') ? [] : relatedPages(page);
  const followLink = (event: MouseEvent<HTMLElement>) => {
    if (expandImportedCardGrid(event.target)) return;
    const anchor = (event.target as HTMLElement).closest('a');
    if (!anchor || anchor.dataset.originalForm || anchor.target === '_blank' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const url = new URL(anchor.href);
    if (['www.proerudio.ro', 'proerudio.ro'].includes(url.hostname) && !url.pathname.startsWith('/wp-content/') && wordpress.some(p => p.path === url.pathname)) {
      event.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[88px]">
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <img src={page.image || classroomImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20" />
          <div className="container relative mx-auto max-w-6xl px-4 py-20 md:py-24">
            <Link to={article ? '/articole-pro-erudio/' : '/'} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80"><ArrowLeft className="h-4 w-4" />{article ? 'Toate articolele' : 'Pagina principală'}</Link>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-background/75"><BookOpen className="h-4 w-4" />{article ? 'Resurse Pro Erudio' : 'Pro Erudio · School of English'}</p>
            <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">{page.title}</h1>
            {article && <p className="mt-6 flex items-center gap-2 text-sm text-background/80"><CalendarDays className="h-4 w-4" /><time dateTime={page.date}>{new Date(page.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</time></p>}
          </div>
        </section>
        <section className="bg-muted/35 py-16 md:py-24">
          <DetailLayout>
            {content?.path === page.path ? <article onClick={followLink} className="wordpress-content min-w-0 overflow-x-auto rounded-2xl border bg-card p-6 shadow-sm md:p-10" dangerouslySetInnerHTML={{ __html: content.html }} /> : <div role="status" className="rounded-2xl border bg-card p-10">{failed ? <p>Conținutul nu s-a putut încărca. <a href={page.url} data-original-form="true" className="text-primary underline">Deschide pagina originală</a></p> : 'Se încarcă pagina…'}</div>}
            {related.length > 0 && <section className={'mt-14 border-t pt-10'}><h2 className={'mb-6 text-2xl font-bold'}>{article ? 'Alte articole' : 'Descoperă mai multe'}</h2><RelatedContentCards cards={related.map(p => cardForPage(p))} /></section>}
          </DetailLayout>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default MigratedPage;
