import * as prismic from "@prismicio/client";
import { createClient as createClient$1 } from "@prismicio/client";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./state.svelte.js";
const enableAutoPreviews = (config) => {
  if (!config.cookies) {
    return;
  }
  const cookie = config.cookies.get(prismic.cookie.preview);
  if (cookie && /\.prismic\.io/.test(cookie)) {
    config.client.queryContentFromRef(cookie);
  }
};
const repositoryName$1 = "intens";
const sm = {
  repositoryName: repositoryName$1
};
const repositoryName = sm.repositoryName;
const routes = [
  { type: "homepage", path: "/" },
  { type: "page", path: "/:uid" },
  { type: "project", path: "/projecten/:uid" }
];
const createClient = ({ cookies, ...config } = {}) => {
  const client = createClient$1(repositoryName, {
    routes,
    ...config
  });
  enableAutoPreviews({ client, cookies });
  return client;
};
export {
  createClient as c,
  repositoryName as r
};
