import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { lazy, Suspense, type ComponentType } from 'react';
import NotFound from './pages/not-found';
import SiteRouting from './components/SiteRouting';
import pages from './data/pages.json';
import aliases from './data/route-aliases.json';

const modules = import.meta.glob<{ default: ComponentType }>('./pages/*/index.tsx');
const routes = pages.map(page => ({ path: page.path, Component: lazy(modules[`./pages/${page.folder}/index.tsx`]) }));
const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /><Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop /><SiteRouting />
        <Suspense fallback={<div role="status" className="p-10">Se încarcă pagina…</div>}>
          <Routes>
            {routes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
            {Object.entries(aliases).filter(([from]) => !pages.some(page => page.path === from)).map(([from, to]) => <Route key={from} path={from} element={<Navigate replace to={to} />} />)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
