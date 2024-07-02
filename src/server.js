import express from "express";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import dotenv from "dotenv";
import { homedir } from "os";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const envPath = path.join(
  homedir(),
  ".config",
  "nillion",
  "nillion-devnet.env",
);
dotenv.config({ path: envPath });

const app = express();
const port = 3003;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Add nillion-devnet Chain",
    subtitle: `Add nillion-devnet chain to Keplr`,
    env: process.env,
  });
});

export default function start() {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
