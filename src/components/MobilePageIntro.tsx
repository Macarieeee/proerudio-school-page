import pages from '@/data/pages.json';

type Props = { slug: string; title: string; summary?: string; image?: string };

export default function MobilePageIntro({ slug, title, summary, image }: Props) {
  const originalImage = image || pages.find(page => page.slug === slug)?.image;
  return (
    <section className={`mobile-page-intro${originalImage ? '' : ' mobile-page-intro-no-image'}`} aria-label={title}>
      {originalImage && <img src={originalImage} alt={title} decoding="async" />}
      <h1>{title}</h1>
      {summary && <p>{summary}</p>}
    </section>
  );
}
