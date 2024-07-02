#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";
import open from "open";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamically import index.js
const startServer = async () => {
  const { default: start } = await import(
    path.join(__dirname, "../src/server.js")
  );
  start();
};

startServer();

// Open the webpage
open("http://localhost:3003");
