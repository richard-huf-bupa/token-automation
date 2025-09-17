import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, LiveReload } from "@remix-run/react";
import { ThemeProvider, rdsBupaTheme } from "@bupa/rds.theme";
import { RdsHeading } from "@bupa/rds.components";
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
      /* @__PURE__ */ jsx(ThemeProvider, { theme: rdsBupaTheme, children }),
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
const meta = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};
function Index() {
  return /* @__PURE__ */ jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-16", children: /* @__PURE__ */ jsxs("header", { className: "flex flex-col items-center gap-9", children: [
    /* @__PURE__ */ jsx(RdsHeading, { children: "Tokens" }),
    "dfgdfg hey sdfdsfdfs sdfdsf"
  ] }) }) });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dou_GsJp.js", "imports": ["/assets/index-8NflKPZb.js", "/assets/components-DlvUs5Jw.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-BN5ly--E.js", "imports": ["/assets/index-8NflKPZb.js", "/assets/components-DlvUs5Jw.js", "/assets/createTheme-UO0eMvqm.js"], "css": ["/assets/root-BpfpdlSU.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Cs1VHH8c.js", "imports": ["/assets/index-8NflKPZb.js", "/assets/createTheme-UO0eMvqm.js"], "css": [] } }, "url": "/assets/manifest-4db8eab5.js", "version": "4db8eab5" };
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
