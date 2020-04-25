require("dotenv").config();
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, dir: "app" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.error(`> Ready on http://localhost:${port}`);
  });
});
