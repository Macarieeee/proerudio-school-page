import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import type { ComponentType } from 'react';
const modules = import.meta.glob<{ default: ComponentType }>('../src/pages/*/index.tsx', { eager: true });

export function render(folder: string, path: string, basename: string) {
  const Page = modules[`../src/pages/${folder}/index.tsx`]?.default;
  if (!Page) throw new Error(`Missing page: ${folder}`);
  return renderToString(<MemoryRouter basename={basename || '/'} initialEntries={[`${basename}${path}`]}><Page /></MemoryRouter>);
}
