const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3456;
const ROOT = __dirname;

const siteDataPath = path.join(ROOT, "data", "site.json");

function loadSiteData() {
  const raw = fs.readFileSync(siteDataPath, "utf8");
  return JSON.parse(raw);
}

app.set("view engine", "ejs");
app.set("views", path.join(ROOT, "views"));

app.use(express.static(path.join(ROOT, "public")));

app.get("/", (_req, res) => {
  res.render("index", { site: loadSiteData() });
});

app.get("/api/tour", (_req, res) => {
  const { tourDates } = loadSiteData();
  res.json(tourDates);
});

app.listen(PORT, () => {
  console.log(`Lauren-Michael Sellers site running at http://localhost:${PORT}`);
});
