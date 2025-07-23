// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://satishkhanal.com' });

const routes = [
  '/',
  '/POS/',
  '/chess/',
  '/Travel-Agency-Website/',
  '/flappy-bird/',
  '/tic-tac-toe/',
];

routes.forEach((url) => {
  sitemap.write({ url, changefreq: 'monthly', priority: url === '/' ? 1.0 : 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream('../public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap generated at public/sitemap.xml');
});