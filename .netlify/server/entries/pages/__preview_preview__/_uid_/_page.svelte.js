import { S as SliceZone, c as components } from "../../../../chunks/index4.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data } = $$props;
    SliceZone($$renderer2, { slices: data.page.data.slices, components });
  });
}
export {
  _page as default
};
