import path from "path";
import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import connectDb from "./../configs/db";

const app = express(),
  DIST_DIR = __dirname,
  ADMIN_HTML_FILE = path.join(DIST_DIR, "admin/index.html"),
  HOME_HTML_FILE = path.join(DIST_DIR, "home/index.html");
app.use(express.static(DIST_DIR));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.get("/admin/*", (req, res) => {
  res.sendFile(ADMIN_HTML_FILE);
});
app.use("/api/user", routes.user);
app.use("/api/categories", routes.category);
app.use("/api/products", routes.product);
app.use("/api/photos", routes.image);
app.use("/api/routes", routes.sidebarList);
app.use("/api/info", routes.info);
app.use("/api/banners", routes.banner);
app.use("/api/services", routes.service);
app.get("/", (req, res) => {
  res.sendFile(HOME_HTML_FILE);
});

const PORT = process.env.PORT || 8080;
connectDb();
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
