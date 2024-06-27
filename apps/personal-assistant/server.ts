import { createRequestHandler } from "@remix-run/express";
import express from "express";
import { installGlobals } from "@remix-run/node";

installGlobals();

const vite =
  process.env.NODE_ENV === "production"
    ? undefined
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();

// handle asset requests
if (vite) {
  app.use(vite.middlewares);
} else {
  app.use(
    "/build",
    express.static("public/build", {
      immutable: true,
      maxAge: "1y",
    })
  );
}

app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    build: vite
      ? () => vite.ssrLoadModule("virtual:remix/server-build")
      : await import("./build/server/index.js"),
  })
);

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
