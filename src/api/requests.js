import { INDEX_ROUTE, PICTURES_PER_PAGE } from "../utils/consts";

export const getUrl = (currentPage, path, search) => {
  let url = `/curated?page=${currentPage}&per_page=${PICTURES_PER_PAGE}`;

  if (path !== INDEX_ROUTE) {
    path = path.split("/");
    url = `/search?query=${path[2]}&page=${currentPage}&per_page=${PICTURES_PER_PAGE}`;
    url += "&" + search.substring(1);
  }
  return url;
};
