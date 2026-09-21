import { defineConfig } from 'vite';

/**
 * `base: './'` deja el build estático portable: `dist/` se puede servir
 * en la raíz de un host o en un subpath, y también abrirse con `vite preview`.
 * Las fuentes viven en `public/fonts/` y el CSS las referencia como `/fonts/…`
 * (válido en dev). En el build el CSS queda en `dist/assets/`, así que esas
 * URLs se reescriben a `../fonts/…`.
 */
function relativizePublicFontUrls() {
  return {
    name: 'relativize-public-font-urls',
    apply: 'build',
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue;
        const source = typeof file.source === 'string' ? file.source : file.source.toString();
        file.source = source
          .replaceAll('url("/fonts/', 'url("../fonts/')
          .replaceAll("url('/fonts/", "url('../fonts/")
          .replaceAll('url(/fonts/', 'url(../fonts/');
      }
    },
  };
}

export default defineConfig({
  base: './',
  root: '.',
  publicDir: 'public',
  plugins: [relativizePublicFontUrls()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    assetsInlineLimit: 0,
  },
});
