// Admin reads share the CDN-cached public catalog endpoints; a unique param
// keeps them off the edge cache so edits show up immediately.
export function uncachedUrl(path) {
  return `${path}${path.includes("?") ? "&" : "?"}_ts=${Date.now()}`;
}
