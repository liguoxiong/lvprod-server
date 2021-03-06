import path from "path";
import "dotenv/config";
import express from "express";
import cors from "cors";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";
import routes from "./routes";
import connectDb from "./../configs/db";
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  ADMIN_HTML_FILE = path.join(DIST_DIR, "admin/index.html"),
  compiler = webpack(config);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.use("/api/user", routes.user);
app.use("/api/categories", routes.category);
app.use("/api/constructions", routes.construction);
app.use("/api/products", routes.product);
app.use("/api/photos", routes.image);
app.use("/api/routes", routes.sidebarList);
app.use("/api/info", routes.info);
app.use("/api/banners", routes.banner);
app.use("/api/services", routes.service);
app.use("/api/sendmail", routes.mail);
app.get("/admin/*", (req, res, next) => {
  compiler.outputFileSystem.readFile(ADMIN_HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});
app.get("/", (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});
// const eraseDatabaseOnSync = true;
const PORT = process.env.PORT || 8080;
connectDb();
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
