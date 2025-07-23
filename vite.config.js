import react from '@vitejs/plugin-react';


import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function faviconMetaInjectPlugin() {
  return {
    name: 'favicon-meta-inject',
    apply: 'build',
    enforce: 'post',
    async generateBundle(_, bundle) {
      const indexHtmlFile = Object.keys(bundle).find(fileName => fileName === 'index.html');
      if (!indexHtmlFile) return;

      const faviconMetaPath = path.resolve(__dirname, 'public/favicons/favicon-meta.html');
      let faviconMetaContent = '';
      try {
        faviconMetaContent = await fs.promises.readFile(faviconMetaPath, 'utf-8');
      } catch (err) {
        this.error(`Failed to read favicon meta file: ${err.message}`);
        return;
      }

      const htmlAsset = bundle[indexHtmlFile];
      if (htmlAsset.type === 'asset') {
        const headCloseTagIndex = htmlAsset.source.indexOf('</head>');
        if (headCloseTagIndex !== -1) {
          htmlAsset.source = htmlAsset.source.slice(0, headCloseTagIndex) + faviconMetaContent + htmlAsset.source.slice(headCloseTagIndex);
        } else {
          // If no </head> found, append at start
          htmlAsset.source = faviconMetaContent + htmlAsset.source;
        }
      }
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    faviconMetaInjectPlugin(),
    react()
  ]
});