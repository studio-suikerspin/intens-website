import * as server from '../entries/pages/__preview_preview__/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/__preview_preview__/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[[preview=preview]]/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DliVo7cp.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/zmNkOPuI.js","_app/immutable/chunks/DEVR4yPI.js","_app/immutable/chunks/DNtYm6iE.js","_app/immutable/chunks/BMvEYaOm.js","_app/immutable/chunks/BaUpIOIQ.js","_app/immutable/chunks/DmEiESpS.js","_app/immutable/chunks/DRiVYuK6.js","_app/immutable/chunks/BaPYFG2g.js","_app/immutable/chunks/D1vs6kAZ.js"];
export const stylesheets = ["_app/immutable/assets/index.BIKm_MQY.css"];
export const fonts = [];
