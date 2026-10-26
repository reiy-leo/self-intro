import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import { I18nProvider, useI18n } from "@/i18n";
import { useSystemAppearance } from "@/lib/use-system-appearance";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { About } from "@/pages/About";
import { NotFound } from "@/pages/NotFound";

function TitleSync() {
  const { pathname } = useLocation();
  const { t } = useI18n();
  useEffect(() => {
    const page = pathname === "/projects" ? t.nav.projects : pathname === "/about" ? t.nav.about : null;
    document.title = page ? `${page} · Rei` : "Rei";
    window.scrollTo(0, 0);
  }, [pathname, t]);
  return null;
}

function App() {
  const appearance = useSystemAppearance();
  return (
    <Theme appearance={appearance} accentColor="gray" grayColor="slate" radius="medium" scaling="100%">
      <BrowserRouter>
        <TitleSync />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
