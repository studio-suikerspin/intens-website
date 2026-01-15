import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DDqi8IKa.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/zmNkOPuI.js","_app/immutable/chunks/BaUpIOIQ.js","_app/immutable/chunks/DNtYm6iE.js","_app/immutable/chunks/BMvEYaOm.js","_app/immutable/chunks/BaPYFG2g.js","_app/immutable/chunks/DHNl2dv3.js","_app/immutable/chunks/D1vs6kAZ.js"];
export const stylesheets = ["_app/immutable/assets/0.BxYTb7ck.css"];
export const fonts = [];
