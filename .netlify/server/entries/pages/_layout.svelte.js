import { w as head, x as attr, y as ensure_array_like } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { getToolbarSrc } from "@prismicio/client";
import { p as page } from "../../chunks/index3.js";
import { r as repositoryName } from "../../chunks/prismicio.js";
import { r as resolve, P as PrismicImage, a as PrismicLink } from "../../chunks/PrismicLink.js";
import { e as escape_html } from "../../chunks/context.js";
function PrismicPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      repositoryName: repositoryName2
    } = $$props;
    const toolbarSrc = getToolbarSrc(repositoryName2);
    head("vyylff", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<script defer${attr("src", toolbarSrc)}><\/script><!---->`);
    });
  });
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data: settings } = page.data.settings;
    const { navigation_item: navigationItems } = page.data.navigation.data;
    $$renderer2.push(`<header class="header svelte-1elxaub"><div class="header__container"><div class="header__inner svelte-1elxaub"><a${attr("href", resolve("/"))} class="header__logo svelte-1elxaub" title="Home" aria-label="Home">`);
    PrismicImage($$renderer2, { field: settings.site_logo, class: "logo--light" });
    $$renderer2.push(`<!----> `);
    PrismicImage($$renderer2, { field: settings.site_logo_dark, class: "logo--dark" });
    $$renderer2.push(`<!----></a> <nav class="header__nav svelte-1elxaub" aria-label="Primary navigation"><ul class="header__nav-list svelte-1elxaub"><!--[-->`);
    const each_array = ensure_array_like(navigationItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li class="header__nav-list-item">`);
      PrismicLink($$renderer2, { field: link, class: ["header__nav-link"] });
      $$renderer2.push(`<!----></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <button class="menu-toggle svelte-1elxaub" aria-label="Toggle navigation"><i class="icon-menu"></i></button></nav></div></div></header> <div class="mobile-menu svelte-1elxaub"><button class="mobile-menu__close svelte-1elxaub" aria-label="Toggle navigation"><span class="mobile-menu__close-bar mobile-menu__close-bar--first svelte-1elxaub"></span> <span class="mobile-menu__close-bar mobile-menu__close-bar--second svelte-1elxaub"></span></button> <nav class="mobile-menu__nav svelte-1elxaub" aria-label="Primary navigation"><ul class="mobile-menu__nav-list svelte-1elxaub"><!--[-->`);
    const each_array_1 = ensure_array_like(navigationItems);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<li class="mobile-menu__nav-list-item svelte-1elxaub">`);
      PrismicLink($$renderer2, { field: link, class: ["mobile-menu__nav-link"] });
      $$renderer2.push(`<!----></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav></div>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    let { data: metadata } = page?.data?.page ?? { data: {} };
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(metadata.page_title)}</title>`);
      });
      if (metadata.meta_description) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="description"${attr("content", metadata.meta_description)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (metadata.meta_title) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="og:title"${attr("content", metadata.meta_title)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (metadata.meta_image) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="og:image"${attr("content", metadata.meta_image.url)}/> <meta name="twitter:card" content="summary_large_image"/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <link rel="stylesheet" href="/fonts/satoshi/satoshi.css"/> <link rel="stylesheet" href="/fonts/icons/iconly.css"/>`);
    });
    $$renderer2.push(`<main>`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <div id="smooth-wrapper"><div id="smooth-content">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div></div></main> `);
    PrismicPreview($$renderer2, { repositoryName });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
