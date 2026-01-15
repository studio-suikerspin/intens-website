import { c as createClient } from "../../chunks/prismicio.js";
const prerender = "auto";
async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });
  const settings = await client.getSingle("general_settings");
  const navigation = await client.getSingle("main_navigation");
  const footerNavigation = await client.getSingle("footer_navigation");
  const socialMedia = await client.getSingle("social_media");
  const projectTags = await client.getAllByType("project_tag");
  return { settings, navigation, footerNavigation, socialMedia, projectTags };
}
export {
  load,
  prerender
};
