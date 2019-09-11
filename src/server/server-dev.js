// import path from "path";
import "dotenv/config";
import express from "express";
import cors from "cors";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";
import routes from "./routes";
import models, { connectDb } from "./models";
const app = express(),
  // DIST_DIR = __dirname,
  // HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config);

app.use(cors());
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.use("/api", routes.api);
// app.get("*", (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     res.set("content-type", "text/html");
//     res.send(result);
//     res.end();
//   });
// });
const eraseDatabaseOnSync = true;
const PORT = process.env.PORT || 8080;
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({})
    ]);
    createUsersWithMessages();
  }
  const createUsersWithMessages = async () => {
    const user1 = new models.User({
      username: "rwieruch"
    });
    const message1 = new models.Message({
      text: "Published the Road to learn React",
      user: user1.id
    });
    await message1.save();
    await user1.save();
  };
  app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log("Press Ctrl+C to quit.");
  });
});
