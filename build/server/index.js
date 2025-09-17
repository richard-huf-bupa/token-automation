import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, LiveReload } from "@remix-run/react";
const key = "custom";
const cache = createCache({ key });
const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }) })
  );
  const chunks = extractCriticalToChunks(markup);
  const styles = constructStyleTagsFromChunks(chunks);
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => {
  return [
    { title: "Very cool app | Remix" },
    {
      property: "og:title",
      content: "Very cool app"
    },
    {
      name: "description",
      content: "This app is the best"
    }
  ];
};
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      typeof document === "undefined" ? "__STYLES__" : null
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      process.env.NODE_ENV === "development" && /* @__PURE__ */ jsx(LiveReload, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const background = { "neutral-primary": "#ffffff", "neutral-primary-hover": "#f0f1f3", "neutral-primary-pressed": "#e5e7eb", "neutral-secondary": "#f5f6f8", "neutral-secondary-hover": "#f0f1f3", "neutral-secondary-pressed": "#e5e7eb", "neutral-tertiary": "#f1efeb", "neutral-tertiary-hover": "#e5e2d8", "neutral-tertiary-pressed": "#dcd9cb", "brand-primary": "#0079c8", "brand-primary-hover": "#0652ae", "brand-primary-pressed": "#00398a", "brand-secondary": "#ddedf8", "brand-secondary-hover": "#b3d6ef", "brand-secondary-pressed": "#8dc0e8", "brand-tertiary": "#0d1846", "brand-tertiary-hover": "#0f2460", "brand-tertiary-pressed": "#00398a", "success-primary": "#1b883c", "success-primary-hover": "#0e6027", "success-primary-pressed": "#044317", "success-secondary": "#a7f0ba", "success-secondary-hover": "#6fdc8c", "success-secondary-pressed": "#48c06a", "warning-primary": "#f1c22d", "warning-primary-hover": "#bd9614", "warning-primary-pressed": "#6b5609", "warning-secondary": "#ffe79d", "warning-secondary-hover": "#fedf7d", "warning-secondary-pressed": "#fed75d", "danger-primary": "#d60023", "danger-primary-hover": "#ae132c", "danger-primary-pressed": "#861e2f", "danger-secondary": "#ffacb9", "danger-secondary-hover": "#fc7188", "danger-secondary-pressed": "#f04561", "inform-primary": "#007d79", "inform-primary-hover": "#005d5d", "inform-primary-pressed": "#004144", "inform-secondary": "#9ef0f0", "inform-secondary-hover": "#56dbdb", "inform-secondary-pressed": "#05b8b5", "promote-primary": "#8a3ff5", "promote-primary-hover": "#6929c4", "promote-primary-pressed": "#491d8b", "promote-secondary": "#e8daff", "promote-secondary-hover": "#d3b9ff", "promote-secondary-pressed": "#b88af6", "upsell-primary": "#db3907", "upsell-primary-hover": "#b72900", "upsell-primary-pressed": "#781800", "upsell-secondary": "#f8d09e", "upsell-secondary-hover": "#f1ad71", "upsell-secondary-pressed": "#ec8938", "inverse": "#21272a", "disabled": "#dde1e6" };
const tokens = {
  background
};
const meta = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};
function Index() {
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h1", { sx: { textSpacingTrim: "trim-start" }, children: "Tokens" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("input", { onChange: handleChange, name: "query", label: "Filter" }),
        /* @__PURE__ */ jsx("button", { type: "submit", children: "Filter" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { style: { listStyle: "none" }, children: Object.keys(tokens.background).map((role) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            gap: "1rem"
          },
          children: Object.keys(tokens.background[role]).map((emphasis) => {
            const EMPHASIS = tokens.background[role][emphasis];
            return /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  boxShadow: "0 0 12px rgba(0, 0, 0, 0.4)",
                  marginBottom: "1rem",
                  borderRadius: "12px"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "color",
                      value: EMPHASIS,
                      style: { width: "100%", height: "150px" }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { padding: 200, children: [
                    /* @__PURE__ */ jsxs("h3", { children: [
                      role,
                      " ",
                      emphasis
                    ] }),
                    /* @__PURE__ */ jsxs("p", { children: [
                      "Color:",
                      " ",
                      /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: EMPHASIS }) })
                    ] })
                  ] })
                ]
              },
              `content-${emphasis}`
            );
          })
        },
        `card-${role}`
      ) }, `token-${role}`);
    }) }) })
  ] }) });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DdGxmLGL.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/components-DfA0yev_.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-QsbZ1Vp8.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/components-DfA0yev_.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-C1bRrBXZ.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js"], "css": [] } }, "url": "/assets/manifest-f4f4a7c9.js", "version": "f4f4a7c9" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
