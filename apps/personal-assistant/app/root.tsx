import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
} from "@remix-run/react";

import styles from "./index.css?url";
import type { LinksFunction } from "@remix-run/node";

import Sidebar from "../components/side-bar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  const error = useRouteError();

  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Sidebar />
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
