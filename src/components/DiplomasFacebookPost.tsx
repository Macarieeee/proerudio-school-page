import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Facebook } from 'lucide-react';

const postUrl = 'https://www.facebook.com/proerudio/posts/pfbid0nHi4tWSBhwCYyXg51du3WDcTAK8Nyq4ribcy2AGjEBA5DEfyxfc4GCCxiKCdpdxNl';
type FacebookWindow = Window & { FB?: { XFBML: { parse: (element: HTMLElement) => void } } };

export default function DiplomasFacebookPost() {
  const preview = useRef<HTMLDivElement>(null);
  const embed = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!preview.current) return;
    const observer = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / 500)));
    observer.observe(preview.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const element = embed.current;
    if (!element) return;
    // Facebook sizes the embedded post to its actual contents. Observe that
    // height instead of reserving a fixed, mostly empty iframe rectangle.
    const observer = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height));
    observer.observe(element);
    const parse = () => (window as FacebookWindow).FB?.XFBML.parse(element);
    let script = document.getElementById('facebook-post-sdk') as HTMLScriptElement | null;
    if ((window as FacebookWindow).FB) parse();
    else {
      if (!script) {
        script = document.createElement('script');
        script.id = 'facebook-post-sdk';
        script.src = 'https://connect.facebook.net/ro_RO/sdk.js#xfbml=0&version=v22.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.addEventListener('load', parse);
        document.body.append(script);
      } else script.addEventListener('load', parse);
    }
    return () => {
      observer.disconnect();
      script?.removeEventListener('load', parse);
    };
  }, []);

  return <section className="diplomas-facebook" aria-labelledby="diplomas-facebook-title">
    <div className="diplomas-facebook-intro">
      <span className="diplomas-facebook-label"><Facebook aria-hidden="true" size={18} /> Pro Erudio · Facebook</span>
      <h2 id="diplomas-facebook-title">Diplomele tale merită să fie sărbătorite!</h2>
      <p>Ai pregătit fotografia? Intră pe postarea campaniei și lasă-ne un comentariu cu diplomele sau amintirile tale.</p>
      <a className="diplomas-facebook-button" href={postUrl} target="_blank" rel="noopener noreferrer">Vezi postarea pe Facebook <ArrowUpRight aria-hidden="true" size={18} /></a>
      <p className="diplomas-facebook-note">Dacă previzualizarea nu se încarcă, poți deschide postarea direct pe Facebook.</p>
    </div>
    <div ref={preview} className="diplomas-facebook-preview" style={{ height: height * scale }}>
      <div ref={embed} style={{ width: 500, transform: `scale(${scale})`, transformOrigin: 'top left', lineHeight: 0 }}>
        <div className="fb-post" data-href={postUrl} data-width="500" data-show-text="false" />
      </div>
    </div>
  </section>;
}
