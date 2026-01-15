export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/.DS_Store","fonts/icons/.DS_Store","fonts/icons/iconly.css","fonts/icons/iconly.eot","fonts/icons/iconly.min.css","fonts/icons/iconly.svg","fonts/icons/iconly.ttf","fonts/icons/iconly.woff","fonts/icons/iconly.woff2","fonts/satoshi/.DS_Store","fonts/satoshi/Satoshi-Variable.eot","fonts/satoshi/Satoshi-Variable.ttf","fonts/satoshi/Satoshi-Variable.woff","fonts/satoshi/Satoshi-Variable.woff2","fonts/satoshi/Satoshi-VariableItalic.eot","fonts/satoshi/Satoshi-VariableItalic.ttf","fonts/satoshi/Satoshi-VariableItalic.woff","fonts/satoshi/Satoshi-VariableItalic.woff2","fonts/satoshi/satoshi.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {start:"_app/immutable/entry/start.Cy8u1oC7.js",app:"_app/immutable/entry/app.CGitQb4S.js",imports:["_app/immutable/entry/start.Cy8u1oC7.js","_app/immutable/chunks/BMvEYaOm.js","_app/immutable/chunks/zmNkOPuI.js","_app/immutable/entry/app.CGitQb4S.js","_app/immutable/chunks/zmNkOPuI.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BaUpIOIQ.js","_app/immutable/chunks/DmEiESpS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/preview/_server.ts.js'))
			},
			{
				id: "/[[preview=preview]]/projecten/[uid]",
				pattern: /^(?:\/([^/]+))?\/projecten\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/slice-simulator",
				pattern: /^\/slice-simulator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			const { match: preview } = await import ('./entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
