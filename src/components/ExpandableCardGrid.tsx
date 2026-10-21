import { Children, useId, useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export default function ExpandableCardGrid({ children, className }: { children: ReactNode; className: string }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const cards = Children.toArray(children);
  return <>
    <div id={id} className={className}>{expanded ? cards : cards.slice(0, 6)}</div>
    {!expanded && cards.length > 6 && <div className="card-grid-more"><Button type="button" variant="outline" aria-controls={id} aria-expanded={false} onClick={() => setExpanded(true)}>Vezi mai mult</Button></div>}
  </>;
}
