import path from "path";
import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import connectDb from './../configs/db';

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});
app.use("/api/user", routes.user);
const PORT = process.env.PORT || 8080;
connectDb();
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
