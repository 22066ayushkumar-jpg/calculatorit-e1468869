// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execFileSync } from "node:child_process";
import path from "node:path";

/**
 * Keeps public/sitemap.xml and public/calculators.json in sync automatically:
 * regenerates on dev-server start and whenever a public/*.html page is added,
 * renamed or removed. Builds already run it via the prebuild npm hook.
 */
function autoSitemap() {
  const run = () => {
    try {
      execFileSync(process.execPath, ["scripts/generate-sitemap.mjs"], {
        cwd: process.cwd(),
        stdio: "inherit",
      });
    } catch (err) {
      console.error("[auto-sitemap] failed:", err);
    }
  };
  const isPage = (file: string) =>
    file.replace(/\\/g, "/").includes("/public/") && file.endsWith(".html");

  return {
    name: "auto-sitemap",
    apply: "serve" as const,
    configureServer(server: {
      middlewares: {
        use: (fn: (req: { url?: string }, res: unknown, next: () => void) => void) => void;
      };
      watcher: {
        add: (p: string) => void;
        on: (evt: string, cb: (file: string) => void) => void;
      };
    }) {
      run();
      const publicDir = path.resolve(process.cwd(), "public");
      server.watcher.add(publicDir);
      server.watcher.add(path.join(publicDir, "*.html"));
      for (const evt of ["add", "unlink", "addDir", "unlinkDir"]) {
        server.watcher.on(evt, (file: string) => {
          if (isPage(file)) run();
        });
      }
      // Safety net: some file-creation paths don't trigger the watcher, so
      // always regenerate right before these files are served.
      server.middlewares.use((req, _res, next) => {
        const url = (req.url || "").split("?")[0];
        if (
          url === "/sitemap.xml" ||
          url === "/calculators.json" ||
          url === "/vehicles.html"
        ) {
          run();
        }
        next();
      });
    },
  };
}


export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [autoSitemap()],
  },
});
