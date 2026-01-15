import { i as initial_base, b as base } from "./server.js";
import { r as resolve_route } from "./routing.js";
import { try_get_request_store } from "@sveltejs/kit/internal/server";
import { P as attributes } from "./index2.js";
import { isFilled, asImagePixelDensitySrcSet, asImageWidthSrcSet, asLinkAttrs } from "@prismicio/client";
import { e as escape_html } from "./context.js";
function resolve(id, params) {
  const resolved = resolve_route(
    id,
    /** @type {Record<string, string>} */
    params
  );
  {
    const store = try_get_request_store();
    if (store && !store.state.prerendering?.fallback) {
      const after_base = store.event.url.pathname.slice(initial_base.length);
      const segments = after_base.split("/").slice(2);
      const prefix = segments.map(() => "..").join("/") || ".";
      return prefix + resolved;
    }
  }
  return base + resolved;
}
function PrismicImage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      field,
      imgixParams = {},
      alt,
      fallbackAlt,
      width,
      height,
      widths,
      pixelDensities,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const { resolvedWidth, resolvedHeight } = (() => {
      if (!isFilled.imageThumbnail(field)) return { resolvedWidth: void 0, resolvedHeight: void 0 };
      const ar = field.dimensions.width / field.dimensions.height;
      let resolvedWidth2 = castInt(width) ?? field.dimensions.width;
      let resolvedHeight2 = castInt(height) ?? field.dimensions.height;
      if (resolvedWidth2 != null && resolvedHeight2 == null) {
        resolvedHeight2 = resolvedWidth2 / ar;
      } else if (resolvedWidth2 == null && resolvedHeight2 != null) {
        resolvedWidth2 = resolvedHeight2 * ar;
      }
      return { resolvedWidth: resolvedWidth2, resolvedHeight: resolvedHeight2 };
    })();
    const { src, srcset } = (() => {
      if (!isFilled.imageThumbnail(field)) return { src: void 0, srcset: void 0 };
      if (pixelDensities) {
        return asImagePixelDensitySrcSet(field, {
          ...imgixParams,
          pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
        });
      }
      return asImageWidthSrcSet(field, {
        ...imgixParams,
        widths: widths === "defaults" ? void 0 : widths
      });
    })();
    function castInt(input) {
      if (typeof input === "number" || typeof input === "undefined" || input === null) {
        return input;
      } else {
        const parsed = Number.parseInt(input);
        if (Number.isNaN(parsed)) {
          return void 0;
        } else {
          return parsed;
        }
      }
    }
    if (isFilled.imageThumbnail(field)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attributes({
        src,
        srcset,
        alt: alt ?? (field.alt || fallbackAlt),
        width: resolvedWidth,
        height: resolvedHeight,
        ...restProps
      })} onload="this.__e=event" onerror="this.__e=event"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function PrismicLink($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      field,
      document,
      rel,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const linkAttrs = asLinkAttrs(field ?? document, { rel: typeof rel === "function" ? rel : void 0 });
    const href = ("href" in restProps ? restProps.href : linkAttrs.href) || "";
    const resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
    $$renderer2.push(`<a${attributes({ ...linkAttrs, rel: resolvedRel, href, ...restProps })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`${escape_html(field?.text)}`);
    }
    $$renderer2.push(`<!--]--></a>`);
  });
}
export {
  PrismicImage as P,
  PrismicLink as a,
  resolve as r
};
