import { c as createClient } from "../../../chunks/prismicio.js";
const load = async ({ params, fetch, cookies }) => {
  const client = createClient({ fetch, cookies });
  const page = await client.getSingle("homepage");
  return {
    page
  };
};
const entries = async () => {
  return [{}];
};
export {
  entries,
  load
};
