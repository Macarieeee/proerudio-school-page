import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Storytime from "./pages/Storytime";
import CampBenefitsArticle from "./pages/CampBenefitsArticle";
import Articles from "./pages/Articles";
import ImportedWordPressPage, { importedPages } from "./pages/ImportedWordPressPage";
import MigratedPage, { migratedPages } from "./pages/MigratedPage";
import MigrationRouting, { originalPath } from "./components/MigrationRouting";

const queryClient = new QueryClient();

const OriginalHome = () => {
  const { search } = useLocation();
  const attachment = migratedPages.find(page => page.path === '/' && new URL(page.url).search === search && search !== '');
  return attachment ? <MigratedPage page={attachment} /> : <Index />;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <MigrationRouting />
        <Routes>
          <Route path="/" element={<OriginalHome />} />
          <Route path="/cursuri-vara/storytime" element={<Navigate replace to={originalPath('storytime-copii-4-7-ani')} />} />
          <Route path={originalPath('storytime-copii-4-7-ani')} element={<Storytime />} />
          <Route path="/8-motive-sa-mi-trimit-copilul-tabara" element={<CampBenefitsArticle />} />
          <Route path="/articole" element={<Navigate replace to="/articole-pro-erudio/" />} />
          <Route path="/articole-pro-erudio/" element={<Articles />} />
          {importedPages.map((page) => (
            <Route key={page.slug} path={`/${page.slug}/`} element={originalPath(page.slug) !== `/${page.slug}/` ? <Navigate replace to={originalPath(page.slug)} /> : <ImportedWordPressPage page={page} />} />
          ))}
          {importedPages.filter(page => originalPath(page.slug) !== `/${page.slug}/`).map(page => (
            <Route key={`original-${page.slug}`} path={originalPath(page.slug)} element={<ImportedWordPressPage page={page} />} />
          ))}
          {migratedPages.filter(page => !page.preserved && page.path !== '/' && page.path !== '/articole-pro-erudio/').map(page => (
            <Route key={page.path} path={page.path} element={<MigratedPage page={page} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
