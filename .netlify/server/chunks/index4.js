import { x as attr, P as attributes, F as attr_class, K as clsx, y as ensure_array_like, Q as spread_props, J as stringify, T as element } from "./index2.js";
import { P as PrismicImage, a as PrismicLink, r as resolve } from "./PrismicLink.js";
/* empty css                                    */
import { e as escape_html } from "./context.js";
import { asTree } from "@prismicio/client/richtext";
import { isFilled } from "@prismicio/client";
import { p as page } from "./index3.js";
import "@sveltejs/kit/internal/server";
import "swiper/bundle";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function PrismicEmbed($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { field } = $$props;
    if (isFilled.embed(field)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div${attr("data-oembed", field.embed_url)}${attr("data-oembed-type", field.type)}${attr("data-oembed-provider", field.provider_name)}>${html(field.html)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function DefaultComponent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { node, children } = $$props;
    const dirProp = "direction" in node && node.direction === "rtl" ? { direction: "rtl" } : {};
    if (node.type === "heading1") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h1${attributes({ ...dirProp })}>`);
      children($$renderer2);
      $$renderer2.push(`<!----></h1>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (node.type === "heading2") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2${attributes({ ...dirProp })}>`);
        children($$renderer2);
        $$renderer2.push(`<!----></h2>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (node.type === "heading3") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h3${attributes({ ...dirProp })}>`);
          children($$renderer2);
          $$renderer2.push(`<!----></h3>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (node.type === "heading4") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<h4${attributes({ ...dirProp })}>`);
            children($$renderer2);
            $$renderer2.push(`<!----></h4>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (node.type === "heading5") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<h5${attributes({ ...dirProp })}>`);
              children($$renderer2);
              $$renderer2.push(`<!----></h5>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (node.type === "heading6") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<h6${attributes({ ...dirProp })}>`);
                children($$renderer2);
                $$renderer2.push(`<!----></h6>`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (node.type === "paragraph") {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`<p${attributes({ ...dirProp })}>`);
                  children($$renderer2);
                  $$renderer2.push(`<!----></p>`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (node.type === "preformatted") {
                    $$renderer2.push("<!--[-->");
                    $$renderer2.push(`<pre>`);
                    children($$renderer2);
                    $$renderer2.push(`<!----></pre>`);
                  } else {
                    $$renderer2.push("<!--[!-->");
                    if (node.type === "strong") {
                      $$renderer2.push("<!--[-->");
                      $$renderer2.push(`<strong>`);
                      children($$renderer2);
                      $$renderer2.push(`<!----></strong>`);
                    } else {
                      $$renderer2.push("<!--[!-->");
                      if (node.type === "em") {
                        $$renderer2.push("<!--[-->");
                        $$renderer2.push(`<em>`);
                        children($$renderer2);
                        $$renderer2.push(`<!----></em>`);
                      } else {
                        $$renderer2.push("<!--[!-->");
                        if (node.type === "list-item") {
                          $$renderer2.push("<!--[-->");
                          $$renderer2.push(`<li${attributes({ ...dirProp })}>`);
                          children($$renderer2);
                          $$renderer2.push(`<!----></li>`);
                        } else {
                          $$renderer2.push("<!--[!-->");
                          if (node.type === "o-list-item") {
                            $$renderer2.push("<!--[-->");
                            $$renderer2.push(`<li${attributes({ ...dirProp })}>`);
                            children($$renderer2);
                            $$renderer2.push(`<!----></li>`);
                          } else {
                            $$renderer2.push("<!--[!-->");
                            if (node.type === "group-list-item") {
                              $$renderer2.push("<!--[-->");
                              $$renderer2.push(`<ul>`);
                              children($$renderer2);
                              $$renderer2.push(`<!----></ul>`);
                            } else {
                              $$renderer2.push("<!--[!-->");
                              if (node.type === "group-o-list-item") {
                                $$renderer2.push("<!--[-->");
                                $$renderer2.push(`<ol>`);
                                children($$renderer2);
                                $$renderer2.push(`<!----></ol>`);
                              } else {
                                $$renderer2.push("<!--[!-->");
                                if (node.type === "image") {
                                  $$renderer2.push("<!--[-->");
                                  $$renderer2.push(`<p class="block-img">`);
                                  PrismicImage($$renderer2, { field: node });
                                  $$renderer2.push(`<!----></p>`);
                                } else {
                                  $$renderer2.push("<!--[!-->");
                                  if (node.type === "embed") {
                                    $$renderer2.push("<!--[-->");
                                    PrismicEmbed($$renderer2, { field: node.oembed });
                                  } else {
                                    $$renderer2.push("<!--[!-->");
                                    if (node.type === "hyperlink") {
                                      $$renderer2.push("<!--[-->");
                                      PrismicLink($$renderer2, {
                                        field: node.data,
                                        children: ($$renderer3) => {
                                          children($$renderer3);
                                          $$renderer3.push(`<!---->`);
                                        },
                                        $$slots: { default: true }
                                      });
                                    } else {
                                      $$renderer2.push("<!--[!-->");
                                      if (node.type === "label") {
                                        $$renderer2.push("<!--[-->");
                                        $$renderer2.push(`<span${attr_class(clsx(node.data.label))}>`);
                                        children($$renderer2);
                                        $$renderer2.push(`<!----></span>`);
                                      } else {
                                        $$renderer2.push("<!--[!-->");
                                        $$renderer2.push(`<!--[-->`);
                                        const each_array = ensure_array_like(node.text.split("\n"));
                                        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                                          let line = each_array[index];
                                          if (index > 0) {
                                            $$renderer2.push("<!--[-->");
                                            $$renderer2.push(`<br/>`);
                                          } else {
                                            $$renderer2.push("<!--[!-->");
                                          }
                                          $$renderer2.push(`<!--]-->${escape_html(line)}`);
                                        }
                                        $$renderer2.push(`<!--]-->`);
                                      }
                                      $$renderer2.push(`<!--]-->`);
                                    }
                                    $$renderer2.push(`<!--]-->`);
                                  }
                                  $$renderer2.push(`<!--]-->`);
                                }
                                $$renderer2.push(`<!--]-->`);
                              }
                              $$renderer2.push(`<!--]-->`);
                            }
                            $$renderer2.push(`<!--]-->`);
                          }
                          $$renderer2.push(`<!--]-->`);
                        }
                        $$renderer2.push(`<!--]-->`);
                      }
                      $$renderer2.push(`<!--]-->`);
                    }
                    $$renderer2.push(`<!--]-->`);
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Serialize_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { components: components2, children } = $$props;
    const CHILD_TYPE_RENAMES = {
      "list-item": "listItem",
      "o-list-item": "oListItem",
      "group-list-item": "list",
      "group-o-list-item": "oList"
    };
    function getComponent(child) {
      return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
    }
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(children);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let child = each_array[$$index];
      const Component = getComponent(child);
      $$renderer2.push(`<!---->`);
      Component($$renderer2, {
        node: child.node,
        children: ($$renderer3) => {
          if (child.children.length > 0) {
            $$renderer3.push("<!--[-->");
            Serialize_1($$renderer3, { children: child.children, components: components2 });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function PrismicRichText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { field, components: components2 = {} } = $$props;
    const children = asTree(field).children;
    Serialize_1($$renderer2, { children, components: components2 });
  });
}
function TodoComponent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    "slice_type" in slice ? slice.slice_type : slice.type;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function SliceZone($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      slices = [],
      components: components2 = {},
      context = {},
      defaultComponent = void 0
    } = $$props;
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(slices);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let slice = each_array[index];
      const type = "slice_type" in slice ? slice.slice_type : slice.type;
      const Component = components2[type] || defaultComponent;
      if (Component) {
        $$renderer2.push("<!--[-->");
        if (slice.__mapped) {
          $$renderer2.push("<!--[-->");
          const { __mapped, ...mappedProps } = slice;
          $$renderer2.push(`<!---->`);
          Component($$renderer2, spread_props([mappedProps]));
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<!---->`);
          Component($$renderer2, { slice, slices, context, index });
          $$renderer2.push(`<!---->`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        TodoComponent($$renderer2, { slice });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ContacSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} class="block-spacing--end"><div class="contact-section"><div class="container"><div class="contact-section__inner svelte-1w6s6pb"><div class="contact-section__content svelte-1w6s6pb"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.contact_categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<div class="contact-section__category svelte-1w6s6pb"><div class="contact-section__label svelte-1w6s6pb">${escape_html(item.category_label)}</div> <div class="contact-section__details svelte-1w6s6pb"><div class="first svelte-1w6s6pb">${escape_html(item.email)}</div> <div class="second svelte-1w6s6pb">${escape_html(item.phone_number)}</div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="contact-section__image svelte-1w6s6pb">`);
    PrismicImage($$renderer2, {
      field: slice.primary.side_image,
      style: "max-height: 750px; object-fit: cover; width: 100%; height: auto;"
    });
    $$renderer2.push(`<!----></div></div></div></div></section>`);
  });
}
function Eyebrow($$renderer, $$props) {
  let { children, isDark = false } = $$props;
  $$renderer.push(`<div${attr_class(clsx(["section-eyebrow", isDark ? "section-eyebrow--dark" : ""]), "svelte-1q75u8i")}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Title($$renderer, $$props) {
  let { children, isDark = false } = $$props;
  $$renderer.push(`<h2${attr_class(clsx(["section-title", isDark ? "section-title--dark" : ""]), "svelte-e5rvbf")}>`);
  children($$renderer);
  $$renderer.push(`<!----></h2>`);
}
function Description($$renderer, $$props) {
  let { content, isDark = false } = $$props;
  $$renderer.push(`<div${attr_class(`section-header__description ${stringify(isDark ? "section-header__description--dark" : "")}`, "svelte-1h6sg33")}>`);
  PrismicRichText($$renderer, { field: content });
  $$renderer.push(`<!----></div>`);
}
function CallToAction$1($$renderer, $$props) {
  let { cta, isDark = false } = $$props;
  $$renderer.push(`<div class="section-header__cta-wrapper svelte-5j1fm8">`);
  PrismicLink($$renderer, {
    field: cta,
    class: [
      "section-header__cta",
      isDark ? "section-header__cta--dark" : ""
    ]
  });
  $$renderer.push(`<!----> <i${attr_class(`icon-circle cta-icon ${stringify(isDark ? "cta-icon--dark" : "")}`, "svelte-5j1fm8")}></i> <div class="section-header__cta-underline"></div></div>`);
}
function SectionHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const {
      eyebrow = null,
      title,
      description = null,
      cta = null,
      isDark = false
    } = $$props;
    $$renderer2.push(`<div${attr_class(`section-header ${stringify(isDark ? "section-header--dark" : "")}`, "svelte-1xf71e1")}><div class="section-header__content svelte-1xf71e1"><div class="section-header__title svelte-1xf71e1">`);
    if (eyebrow) {
      $$renderer2.push("<!--[-->");
      Eyebrow($$renderer2, {
        isDark,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(eyebrow)}`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (title) {
      $$renderer2.push("<!--[-->");
      Title($$renderer2, {
        isDark,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(title)}`);
        }
      });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (cta?.text) {
      $$renderer2.push("<!--[-->");
      CallToAction$1($$renderer2, { isDark, cta });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (description) {
      $$renderer2.push("<!--[-->");
      Description($$renderer2, { content: description, isDark });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function CustomerReviews($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section class="reviews-section block-spacing svelte-94djhx"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} data-reveal-group=""><div class="reviews-section__inner svelte-94djhx"><div class="container">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.eyebrow,
      title: slice.primary.headline,
      isDark: true
    });
    $$renderer2.push(`<!----></div> <div class="reviews-wrap svelte-94djhx"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.reviews);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<div class="review svelte-94djhx"><div class="review__inner svelte-94djhx"><div class="review__top svelte-94djhx"><div class="review__avatar svelte-94djhx">`);
      PrismicImage($$renderer2, { field: item.avatar });
      $$renderer2.push(`<!----></div> <div class="review__info svelte-94djhx"><p class="review__author svelte-94djhx">${escape_html(item.name)}</p> <p class="review__date svelte-94djhx">${escape_html(item.date)}</p></div></div> <div class="review__stars svelte-94djhx"><!--[-->`);
      const each_array_1 = ensure_array_like(Array.from(Array(parseInt(item.rating)).keys()));
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        each_array_1[$$index];
        $$renderer2.push(`<span class="review__star review__star--filled svelte-94djhx">★</span>`);
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array_2 = ensure_array_like(Array.from(Array(5 - parseInt(item.rating)).keys()));
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        each_array_2[$$index_1];
        $$renderer2.push(`<span class="review__star svelte-94djhx">☆</span>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="review__content svelte-94djhx">`);
      PrismicRichText($$renderer2, { field: item.content });
      $$renderer2.push(`<!----></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function CallToAction($$renderer, $$props) {
  let { cta, isDark = false } = $$props;
  $$renderer.push(`<div class="cta-wrapper svelte-cdwn4o">`);
  PrismicLink($$renderer, { field: cta, class: ["cta", isDark ? "cta--dark" : ""] });
  $$renderer.push(`<!----> <i${attr_class(`icon-circle cta-icon ${stringify(isDark ? "cta-icon--dark" : "")}`, "svelte-cdwn4o")}></i> <div class="cta-underline"></div></div>`);
}
function Fullscreen($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<div class="hero__background svelte-12t6mg0">`);
    if (slice.primary.video_url?.url) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<video class="hero__background-video svelte-12t6mg0"${attr("src", slice.primary?.video_url?.url)} autoplay muted loop playsinline></video>`);
    } else {
      $$renderer2.push("<!--[!-->");
      PrismicImage($$renderer2, {
        field: slice.primary?.image,
        class: "hero__background-image",
        style: "object-fit: cover; width: 100%; height: 100%;"
      });
    }
    $$renderer2.push(`<!--]--></div> <div${attr_class(`hero__content ${stringify(slice.primary.add_overlay ? "hero__content--overlay" : "")}`, "svelte-12t6mg0")}>`);
    if (slice.primary.cta_link && slice.primary.video_url?.url) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="filled-cta svelte-12t6mg0">`);
      CallToAction($$renderer2, { cta: slice.primary.cta_link, isDark: true });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="hero__headlines svelte-12t6mg0"><div class="hero__headlines_first svelte-12t6mg0"><div class="hero__eyebrow svelte-12t6mg0">`);
    PrismicRichText($$renderer2, { field: slice.primary.eyebrow });
    $$renderer2.push(`<!----></div> <div class="headline svelte-12t6mg0">`);
    PrismicRichText($$renderer2, { field: slice.primary.headline });
    $$renderer2.push(`<!----></div></div> <div class="subheadline svelte-12t6mg0">`);
    PrismicRichText($$renderer2, { field: slice.primary.subheadline });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
function Parallax($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    let columnCount = slice.primary.column_1?.length ? 1 : 0;
    columnCount += slice.primary.column_2?.length > 0 ? 1 : 0;
    columnCount += slice.primary.column_3?.length > 0 ? 1 : 0;
    $$renderer2.push(`<div class="parallax-wrap"><div class="hero-bg svelte-1ogoz6u">`);
    if (slice.primary.video_url?.url) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<video class="hero-bg__media" autoplay loop muted playsinline${attr("poster", slice.primary.poster_image?.url)}><source${attr("src", slice.primary.video_url.url)}/></video>`);
    } else {
      $$renderer2.push("<!--[!-->");
      PrismicImage($$renderer2, { class: "hero-bg__media", field: slice.primary.poster_image });
    }
    $$renderer2.push(`<!--]--> <div class="hero-bg__overlay svelte-1ogoz6u"></div></div> <div class="hero-content svelte-1ogoz6u"><div class="hero-content__top svelte-1ogoz6u"><div class="container svelte-1ogoz6u"><div class="hero-eyebrow svelte-1ogoz6u">${escape_html(slice.primary.eyebrow)}</div> <h1 class="hero-headline svelte-1ogoz6u">${escape_html(slice.primary.headline)}</h1></div></div> <div class="container"><div class="hero-content__bottom svelte-1ogoz6u"><!--[-->`);
    const each_array = ensure_array_like(Array.from({ length: columnCount }).keys());
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      each_array[index];
      $$renderer2.push(`<div${attr_class(`column column-${stringify(index + 1)}`, "svelte-1ogoz6u")}><!--[-->`);
      const each_array_1 = ensure_array_like(slice.primary[`column_${index + 1}`]);
      for (let index2 = 0, $$length2 = each_array_1.length; index2 < $$length2; index2++) {
        let { item } = each_array_1[index2];
        $$renderer2.push(`<div class="column-item svelte-1ogoz6u">`);
        PrismicRichText($$renderer2, { field: item });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section class="hero svelte-18cmxc6"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}>`);
    if (slice.variation === "fullscreen") {
      $$renderer2.push("<!--[-->");
      Fullscreen($$renderer2, { slice });
    } else {
      $$renderer2.push("<!--[!-->");
      if (slice.variation === "parallax") {
        $$renderer2.push("<!--[-->");
        Parallax($$renderer2, { slice });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
function ImpactNumbers($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr_class(`block-spacing impact-numbers-section ${stringify(slice.primary.dark ? "bg-dark" : "")}`)}${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} data-reveal-group=""><div class="container"><div class="impact-numbers-section__inner svelte-1y2aaxw">`);
    SectionHeader($$renderer2, {
      title: slice.primary.headline,
      eyebrow: slice.primary.eyebrow,
      description: slice.primary.description || void 0,
      cta: slice.primary.cta_link,
      isDark: slice.primary.dark
    });
    $$renderer2.push(`<!----> <div class="stats svelte-1y2aaxw"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.stats);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<div class="stat svelte-1y2aaxw"><div class="stat__image svelte-1y2aaxw">`);
      PrismicImage($$renderer2, { field: item.image });
      $$renderer2.push(`<!----></div> <div class="stat__content svelte-1y2aaxw"><div class="stat__number-wrap svelte-1y2aaxw"><span class="stat__number">${escape_html(item.value)}</span>${escape_html(item.number_symbol)}</div> <h3 class="stat__title svelte-1y2aaxw">${escape_html(item.label)}</h3> <p class="stat__description svelte-1y2aaxw">${escape_html(item.description)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
function LogoGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} class="block-spacing--end" data-reveal-group=""><div data-logo-wall-shuffle="false" data-logo-wall-cycle-init="" class="logo-wall"><div class="container"><div class="logo-wall__inner svelte-r37svz">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.section_eyebrow ? slice.primary.section_eyebrow : "",
      title: slice.primary.section_title
    });
    $$renderer2.push(`<!----> <div class="logo-wall__collection"><div data-logo-wall-list="" class="logo-wall__list svelte-r37svz"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.logos);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<div data-logo-wall-item="" class="logo-wall__item svelte-r37svz"><div data-logo-wall-target-parent="" class="logo-wall__logo svelte-r37svz"><div class="logo-wall__logo-before svelte-r37svz"></div> <div data-logo-wall-target="" class="logo-wall__logo-target svelte-r37svz">`);
      PrismicImage($$renderer2, { field: item.logo_image, class: "logo-wall__logo-img" });
      $$renderer2.push(`<!----></div></div></div>`);
    }
    $$renderer2.push(`<!--]--> <!--[-->`);
    const each_array_1 = ensure_array_like(slice.primary.logos);
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let item = each_array_1[index];
      $$renderer2.push(`<div data-logo-wall-item="" class="logo-wall__item svelte-r37svz"><div data-logo-wall-target-parent="" class="logo-wall__logo svelte-r37svz"><div class="logo-wall__logo-before svelte-r37svz"></div> <div data-logo-wall-target="" class="logo-wall__logo-target svelte-r37svz">`);
      PrismicImage($$renderer2, { field: item.logo_image, class: "logo-wall__logo-img" });
      $$renderer2.push(`<!----></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div></section>`);
  });
}
function MediaGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr_class(`media-grid ${stringify(slice.primary.light_or_dark ? "media-grid--dark" : "")} block-spacing`, "svelte-lwe9s8")}${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}><div class="container"><div class="media-grid__inner svelte-lwe9s8">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.eyebrow,
      title: slice.primary.heading,
      description: slice.primary.description,
      cta: slice.primary.cta_link,
      isDark: slice.primary.light_or_dark
    });
    $$renderer2.push(`<!----> <div class="masonry-wrap"><div class="masonry-collection"><div data-masonry-list="" class="masonry-list svelte-lwe9s8"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.items);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<div class="masonry-item svelte-lwe9s8"><div class="masonry-item__visual svelte-lwe9s8">`);
      if (item.image.url) {
        $$renderer2.push("<!--[-->");
        PrismicImage($$renderer2, { field: item.image });
      } else {
        $$renderer2.push("<!--[!-->");
        if (item.video_url.url) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<video${attr("src", item.video_url.url)} autoplay playsinline muted></video>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div></section>`);
  });
}
function MultiBlockTextImage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section class="multi-text-image block-spacing--end svelte-7c2py"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}><div class="multi-text-image__container container"><div class="multi-text-image__inner svelte-7c2py"><div class="text-blocks svelte-7c2py"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.blocks);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let block = each_array[index];
      $$renderer2.push(`<div class="text-block svelte-7c2py"><h3 class="text-block__title svelte-7c2py">${escape_html(block.title)}</h3> <div class="text-block__description svelte-7c2py">`);
      PrismicRichText($$renderer2, { field: block.description });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="side-image svelte-7c2py">`);
    PrismicImage($$renderer2, { field: slice.primary.side_image });
    $$renderer2.push(`<!----></div></div></div></section>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    const { data: settings } = page.data.settings;
    const data = page.data;
    const navigationItems = data.footerNavigation.data.footer_navigation_item;
    const socialMediaItems = data.socialMedia.data.social_media_link;
    $$renderer2.push(`<section${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} class="block-spacing--start"><footer class="footer svelte-11trt6b"><div class="container"><div class="footer__wrap svelte-11trt6b"><div class="footer__top svelte-11trt6b"><a${attr("href", resolve("/"))} class="header__logo" title="Home" aria-label="Home">`);
    PrismicImage($$renderer2, { field: settings.site_logo });
    $$renderer2.push(`<!----></a> <ul class="social-list svelte-11trt6b"><!--[-->`);
    const each_array = ensure_array_like(socialMediaItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li class="social-list__item svelte-11trt6b">`);
      PrismicLink($$renderer2, {
        field: link,
        class: ["header__nav-link"],
        children: ($$renderer3) => {
          if (link.text === "Instagram" || link.url?.includes("instagram.com")) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="icon-instagram svelte-11trt6b"></span>`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (link.text === "Tiktok" || link.url?.includes("tiktok.com")) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="icon-tiktok svelte-11trt6b"></span>`);
            } else {
              $$renderer3.push("<!--[!-->");
              if (link.text === "Linkedin" || link.url?.includes("linkedin.com")) {
                $$renderer3.push("<!--[-->");
                $$renderer3.push(`<span class="icon-linkedin svelte-11trt6b"></span>`);
              } else {
                $$renderer3.push("<!--[!-->");
              }
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="footer__middle svelte-11trt6b"><!--[-->`);
    const each_array_1 = ensure_array_like(slice.primary.items);
    for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
      let item = each_array_1[index];
      PrismicLink($$renderer2, {
        field: item.destination,
        class: "footer-link",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="footer-link__label">${escape_html(item.label)}</div> `);
          PrismicImage($$renderer3, { field: item.media, class: "footer-link__image" });
          $$renderer3.push(`<!----> <div class="footer-link__overlay"></div>`);
        },
        $$slots: { default: true }
      });
    }
    $$renderer2.push(`<!--]--></div> <div class="footer__bottom svelte-11trt6b"><ul class="footer-list svelte-11trt6b"><!--[-->`);
    const each_array_2 = ensure_array_like(navigationItems);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let link = each_array_2[$$index_2];
      $$renderer2.push(`<li class="header__nav-list-item">`);
      PrismicLink($$renderer2, {
        field: link,
        class: ["header__nav-link"],
        target: "_blank",
        rel: "noopener noreferrer"
      });
      $$renderer2.push(`<!----></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div>Website by Studio Suikerspin</div></div></div></div></footer></section>`);
  });
}
function ProjectBanner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { project } = $$props;
    let projectData = project.project;
    if (!isFilled.contentRelationship(project.project)) {
      projectData = null;
    }
    if (projectData) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="carousel-banner svelte-1n15dpf"><div class="carousel-banner__bg svelte-1n15dpf">`);
      if (isFilled.contentRelationship(projectData.data.featured_image)) {
        $$renderer2.push("<!--[-->");
        PrismicImage($$renderer2, { field: projectData.data.featured_image });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="carousel-banner__inner svelte-1n15dpf"><div class="carousel-banner__text-wrap svelte-1n15dpf">`);
      if (projectData.data.title) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="carousel-banner__title svelte-1n15dpf">${escape_html(projectData.data.title)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (projectData.data.summary) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="carousel-banner__summary svelte-1n15dpf">${escape_html(projectData.data.summary)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="carousel-banner__link svelte-1n15dpf"><a${attr("href", resolve(`/projecten/${projectData.uid}`))}${attr("title", projectData.data.title)}><span>Bekijk project</span> <i class="icon-arrow-right"></i></a></div> <div class="carousel-banner__tags svelte-1n15dpf"><!--[-->`);
      const each_array = ensure_array_like(projectData.data.tags);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let item = each_array[index];
        $$renderer2.push(`<div class="carousel-banner__tag">${escape_html(item.tag)}</div>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function HorizontalShowcase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr_class(`block-spacing--sm horizontal-showcase ${stringify(slice.primary.dark ? "bg-dark" : "")}`)}${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} data-reveal-group=""><div class="horizontal-showcase__container"><div class="container">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.eyebrow || "",
      title: slice.primary.headline || "",
      description: slice.primary.description,
      cta: slice.primary.cta_link,
      isDark: slice.primary.dark
    });
    $$renderer2.push(`<!----></div> <div class="horizontal-showcase__wrap svelte-rtaqvl" data-horizontal-scroll-wrap=""><!--[-->`);
    const each_array = ensure_array_like(slice.primary.projects);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let project = each_array[index];
      $$renderer2.push(`<div data-horizontal-scroll-panel="" class="horizontal-showcase__panel svelte-rtaqvl"><div class="horizontal-showcase__panel-inner svelte-rtaqvl">`);
      ProjectBanner($$renderer2, { project });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function LinkButton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      linkField = null,
      href = "",
      variant = "primary",
      icon = "circle",
      isDark = false
    } = $$props;
    if (linkField) {
      $$renderer2.push("<!--[-->");
      PrismicLink($$renderer2, {
        field: linkField,
        class: ["btn", `btn--${variant}`, isDark ? "btn--dark" : ""],
        children: ($$renderer3) => {
          $$renderer3.push(`<span>${escape_html(linkField.text)}</span> `);
          if (icon) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<i${attr_class(`icon-${stringify(icon)} btn__icon`)}></i>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      if (href) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", resolve(href))}${attr_class(clsx(["btn", `btn--${variant}`, isDark ? "btn--dark" : ""]))}><span>${escape_html(href)}</span> <i${attr_class(`icon-${stringify(icon)} btn__icon`)}></i></a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ProjectsGridWithFilters($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    const { projectTags } = page.data;
    let activeFilter = "all";
    let projects = slice.primary.projects.filter(({ project }) => isFilled.contentRelationship(project)).map(function({ project }) {
      const tags = project.data.tags.flatMap((tag) => tag.project_tag.data.tag);
      return {
        id: project.uid,
        title: project.data.title,
        summary: project.data.summary,
        type: project.data.project_type,
        image: project.data.featured_image,
        url: `/projecten/${project.uid}`,
        tags
      };
    });
    $$renderer2.push(`<section class="project-grid-section block-spacing"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}><div class="project-grid svelte-ek5o1l"><div class="project-grid__filters svelte-ek5o1l"><div class="project-grid__filter svelte-ek5o1l"><button${attr_class(`btn btn--outline ${stringify("btn--active")}`, "svelte-ek5o1l")}>Alle projecten</button></div> <!--[-->`);
    const each_array = ensure_array_like(projectTags);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let projectTag = each_array[index];
      if (isFilled.contentRelationship(projectTag) && projectTag.data) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="project-grid__filter svelte-ek5o1l"><button${attr_class(`btn btn--outline ${stringify(activeFilter === projectTag.data.tag ? "btn--active" : "")}`, "svelte-ek5o1l")}>${escape_html(projectTag.data.tag)}</button></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="container"><div class="project-grid__projects svelte-ek5o1l">`);
    if (projects.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(projects);
      for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
        let project = each_array_1[index];
        $$renderer2.push(`<div class="project-card svelte-ek5o1l"><div class="project-card__bg svelte-ek5o1l">`);
        PrismicImage($$renderer2, { field: project.image });
        $$renderer2.push(`<!----></div> <div class="project-card__inner svelte-ek5o1l"><div class="project-card__top svelte-ek5o1l"><div class="project-card__tags"><span class="project-card__tag svelte-ek5o1l">${escape_html(project.type)}</span></div> <a${attr("href", resolve(project.url))}${attr("title", project.title)} class="btn btn--icon-only"><i class="icon-arrow-right btn__icon"></i></a></div> <div class="project-card__content svelte-ek5o1l"><h2 class="project-card__title svelte-ek5o1l">${escape_html(project.title)}</h2> <p class="project-card__summary svelte-ek5o1l">${escape_html(project.summary)}</p></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="project-card project-card--no-projects svelte-ek5o1l"><p>Er zijn geen projecten gevonden.</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
function ImageText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr_class(`block-spacing image-text ${stringify(
      // let tag = $state('div');
      slice.primary.dark ? "bg-dark" : ""
    )}`)}${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} data-reveal-group=""><div class="container"><div class="image-text__inner svelte-aacjui">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.eyebrow ? slice.primary.eyebrow : void 0,
      title: slice.primary.headline,
      description: slice.primary.description ? slice.primary.description : void 0,
      cta: slice.primary.cta_link ? slice.primary.cta_link : void 0,
      isDark: slice.primary.dark
    });
    $$renderer2.push(`<!----> <div class="image-text__blocks svelte-aacjui"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.image_text_block);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let block = each_array[index];
      $$renderer2.push(`<div class="image-text__block svelte-aacjui" data-reveal-group="">`);
      element(
        $$renderer2,
        block.cta_button.url ? "a" : "div",
        () => {
          $$renderer2.push(`${attr_class(`image-text__block-image image-text__block-image--${stringify(block.image_right ? "right" : "left")}`, "svelte-aacjui")}`);
        },
        () => {
          if (block.cta_button.url) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`${html(`<link rel="preload" as="image" href="${block.image.url}" />`)} <div class="image-button svelte-aacjui"><i class="icon-arrow-right"></i></div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          PrismicImage($$renderer2, { field: block.image });
          $$renderer2.push(`<!---->`);
        }
      );
      $$renderer2.push(` <div class="image-text__block-wrap svelte-aacjui"><div class="image-text__block-content svelte-aacjui"><h3 class="image-text__block-title svelte-aacjui">${escape_html(block.title)}</h3> <div class="image-text__block-text svelte-aacjui">`);
      PrismicRichText($$renderer2, { field: block.text });
      $$renderer2.push(`<!----></div></div> `);
      if (block.cta_button.url) {
        $$renderer2.push("<!--[-->");
        LinkButton($$renderer2, { linkField: block.cta_button });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
function ServicesSlider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} class="bg-dark"><div class="container"><div class="service-slider svelte-4yecwx"><div class="service-slider__title svelte-4yecwx">`);
    PrismicRichText($$renderer2, { field: slice.primary.section_title });
    $$renderer2.push(`<!----></div> <div class="service-slider__slides swiper"><div class="swiper-wrapper"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.projects);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let project = each_array[index];
      $$renderer2.push(`<div class="swiper-slide"><div class="service-slider__slide-inner svelte-4yecwx"><div class="service-slider__header svelte-4yecwx"><div class="service-slider__text-content svelte-4yecwx"><div class="service-slider__subtitle svelte-4yecwx">`);
      PrismicRichText($$renderer2, { field: project.service_title });
      $$renderer2.push(`<!----></div> <div clqass="service-slider__description">`);
      PrismicRichText($$renderer2, { field: project.service_text });
      $$renderer2.push(`<!----></div></div> <div class="carousel-buttons desktop-only svelte-4yecwx"><button type="button" class="carousel-button carousel-button--prev svelte-4yecwx" title="Previous"><i class="icon-arrow-right svelte-4yecwx"></i></button> <button type="button" class="carousel-button carousel-button--next svelte-4yecwx" title="Next"><i class="icon-arrow-right svelte-4yecwx"></i></button></div></div> `);
      ProjectBanner($$renderer2, { project });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="carousel-buttons mobile-only svelte-4yecwx"><button type="button" class="carousel-button carousel-button--prev svelte-4yecwx" title="Previous"><i class="icon-arrow-right svelte-4yecwx"></i></button> <button type="button" class="carousel-button carousel-button--next svelte-4yecwx" title="Next"><i class="icon-arrow-right svelte-4yecwx"></i></button></div></div></div></div></section>`);
  });
}
function TeamMembersCarousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}${attr_class(`block-spacing--sm--end team-members ${stringify(slice.primary.dark ? "dark" : "")}`, "svelte-e6dw2u")} data-reveal-group=""><div class="team-members__inner svelte-e6dw2u"><div class="container">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.eyebrow ? slice.primary.eyebrow : "",
      title: slice.primary.section_title,
      description: slice.primary.section_description,
      cta: slice.primary.cta_link,
      isDark: slice.primary.dark
    });
    $$renderer2.push(`<!----></div> <div class="team-members__carousel swiper svelte-e6dw2u"><div class="swiper-wrapper"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.team_members);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let member = each_array[index];
      $$renderer2.push(`<div class="carousel-item swiper-slide svelte-e6dw2u"><div class="carousel-item__inner svelte-e6dw2u"><div class="carousel-item__image svelte-e6dw2u">`);
      PrismicImage($$renderer2, { field: member.photo });
      $$renderer2.push(`<!----></div> <div class="carousel-item__content svelte-e6dw2u"><div class="carousel-item__info svelte-e6dw2u"><h3 class="carousel-item__name svelte-e6dw2u">${escape_html(member.name)}</h3> <p class="carousel-item__title svelte-e6dw2u">${escape_html(member.role)}</p></div> `);
      PrismicLink($$renderer2, {
        field: member.social_linkedin,
        class: "carousel-item__social-link",
        children: ($$renderer3) => {
          $$renderer3.push(`<i class="icon-linkedin"></i>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <nav class="container carousel-nav svelte-e6dw2u"><div class="swiper-scrollbar carousel-scrollbar svelte-e6dw2u"></div> <div class="carousel-buttons svelte-e6dw2u"><button type="button" class="carousel-button carousel-button--prev svelte-e6dw2u" title="Previous"><i class="icon-arrow-right"></i></button> <button type="button" class="carousel-button carousel-button--next svelte-e6dw2u" title="Next"><i class="icon-arrow-right"></i></button></div></nav></div></div></section>`);
  });
}
function TextOnly($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)} class="block-spacing text-only-section svelte-665p8t" data-reveal-group=""><div class="container"><div class="text-only svelte-665p8t"><div class="text-only__title svelte-665p8t">`);
    PrismicRichText($$renderer2, { field: slice.primary.title });
    $$renderer2.push(`<!----></div> <div class="text-only__text svelte-665p8t">`);
    PrismicRichText($$renderer2, { field: slice.primary.text });
    $$renderer2.push(`<!----></div></div></div></section>`);
  });
}
function TextWithFeatureGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section class="text-with-feature-grid block-spacing"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}><div class="text-with-feature-grid__inner svelte-4f272j"><div class="text-with-feature-grid__bg svelte-4f272j">`);
    if (slice.primary.background_image.url) {
      $$renderer2.push("<!--[-->");
      PrismicImage($$renderer2, { field: slice.primary.background_image });
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="container">`);
    SectionHeader($$renderer2, {
      eyebrow: slice.primary.eyebrow,
      title: slice.primary.headline,
      description: slice.primary.description,
      isDark: !slice.primary.text_is_dark
    });
    $$renderer2.push(`<!----></div> <div class="feature-grid svelte-4f272j"><!--[-->`);
    const each_array = ensure_array_like(slice.primary.features);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<div class="feature-item svelte-4f272j"><div class="feature-item__inner svelte-4f272j"><div class="feature-item__title svelte-4f272j">${escape_html(item.feature_title)}</div> <div class="feature-item__bullets svelte-4f272j">`);
      PrismicRichText($$renderer2, { field: item.feature_bullets });
      $$renderer2.push(`<!----></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function VideoBannerSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { slice } = $$props;
    $$renderer2.push(`<section class="fs-video-banner svelte-14stz16"${attr("data-slice-type", slice.slice_type)}${attr("data-slice-variation", slice.variation)}><div class="container svelte-14stz16"><div class="fs-video-banner__wrap svelte-14stz16"><div class="fs-video-banner__content-wrap svelte-14stz16"><h2 class="banner-title svelte-14stz16">${escape_html(slice.primary.headline)}</h2> <div class="banner-content svelte-14stz16">`);
    PrismicRichText($$renderer2, { field: slice.primary.content });
    $$renderer2.push(`<!----></div> `);
    LinkButton($$renderer2, { linkField: slice.primary.cta_link, icon: false });
    $$renderer2.push(`<!----></div> <div class="fs-video-banner__video svelte-14stz16"><video autoplay muted loop playsinline${attr("poster", slice.primary.poster_image?.url)} class="svelte-14stz16"><source${attr("src", slice.primary.video.url)} type="video/mp4"/></video></div></div></div></section>`);
  });
}
const components = {
  contact_info_sidebar: ContacSection,
  customer_reviews: CustomerReviews,
  hero_with_navigation_overlay: Hero,
  impact_statistics: ImpactNumbers,
  logo_grid: LogoGrid,
  media_grid: MediaGrid,
  multi_block_text_image: MultiBlockTextImage,
  navigational_media_grid: Footer,
  project_showcase: HorizontalShowcase,
  projects_grid_with_filters: ProjectsGridWithFilters,
  service_highlights: ImageText,
  services_slider: ServicesSlider,
  team_members_carousel: TeamMembersCarousel,
  text_only: TextOnly,
  text_with_feature_grid: TextWithFeatureGrid,
  video_banner_section: VideoBannerSection
};
export {
  SliceZone as S,
  components as c,
  html as h
};
