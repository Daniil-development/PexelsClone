import { $host } from "./index";

export const getData = async (url) => {
  try {
    const { data } = await $host.get(url);
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
