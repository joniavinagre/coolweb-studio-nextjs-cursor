import { createRoot, hydrateRoot } from "react-dom/client";
import App, { AppShell, AppRoutes } from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

if (container.innerHTML.trim().length > 0) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}

// Build-time prerender export
export async function prerender(data: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { StaticRouter } = await import("react-router-dom/server");
  const { HelmetProvider } = await import("react-helmet-async");

  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <AppShell>
        <StaticRouter location={data.url}>
          <AppRoutes />
        </StaticRouter>
      </AppShell>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`
    : "";

  // All routes to prerender
  const allRoutes = [
    "/",
    "/services",
    "/portfolio",
    "/about",
    "/contact",
    "/portfolio/masajes-gaston-molina",
    "/portfolio/4dhues-led-panels",
    "/portfolio/centro-clinico-vicente-briet",
    "/portfolio/tropical-travel-agency",
    "/portfolio/nails-by-anabela",
    "/portfolio/quiver-and-quill",
    "/portfolio/ongles-fantaisies",
    "/portfolio/club-de-espanol",
    "/portfolio/coffee-and-bakery-marseille",
    "/portfolio/tailang-ramen-restaurant",
    "/portfolio/raiz-de-salud",
    "/portfolio/chico-diez-barber-club",
  ];

  return {
    html,
    head,
    links: data.url === "/" ? new Set(allRoutes) : undefined,
  };
}
