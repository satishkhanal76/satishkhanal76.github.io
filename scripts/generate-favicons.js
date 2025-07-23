// generate-favicon.js
import favicons from "favicons";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const source = path.join(__dirname, "../public/hero-img.jpeg");


const configuration = {
  path: "/favicons/", // path for overriding default icons path
  appName: "Satish Khanal", 
  appShortName: "Portfolio",
  appDescription: "Satish Khanal's personal portfolio",
  developerName: "Satish Khanal",
  background: "#ffffff",
  theme_color: "#ffffff",
  icons: {
    android: true, 
    appleIcon: true, 
    favicons: true,
    windows: false,
    yandex: false
  },
};

const outputDir = path.join(__dirname, "../public/favicons");
fs.mkdirSync(outputDir, { recursive: true });

favicons(source, configuration)
  .then(response => {
    for (const image of response.images) {
      fs.writeFileSync(path.join(__dirname, "../public/favicons", image.name), image.contents);
    }
    for (const file of response.files) {
      fs.writeFileSync(path.join(__dirname, "../public/favicons", file.name), file.contents);
    }
    fs.writeFileSync(path.join(__dirname, "../public/favicons/favicon-meta.html"), response.html.join("\n"));
    console.log("Favicon generated!");
  })
  .catch(console.error);