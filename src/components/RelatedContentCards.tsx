import ExpandableCardGrid from './ExpandableCardGrid';
import { Link } from 'react-router-dom';
import type { RelatedCard } from '@/lib/related-content';

export default function RelatedContentCards({ cards }: { cards: RelatedCard[] }) {
  return <ExpandableCardGrid key={cards.map(card => card.path).join('|')} className="related-content-grid">{cards.map(card => <Link key={card.path} to={card.path} className="related-content-card">
    <div className="related-content-media" style={{ backgroundImage: `url("${card.image}")` }}><h3>{card.title}</h3></div>
    <div className="related-content-body"><span className="related-content-badge">{card.badge}</span><p>{card.summary}</p><span className="related-content-action">{card.action}<span aria-hidden="true">→</span></span></div>
  </Link>)}</ExpandableCardGrid>;
}
