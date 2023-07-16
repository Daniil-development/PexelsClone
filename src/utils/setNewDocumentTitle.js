import { ejectQueryAndToUppercase } from "./ejectQueryAndToUppercase";

export const setNewDocumentTitle = (pathname) => {
  if (pathname === "/" && document.title !== indexTitle) {
    document.title = indexTitle;
  } else if (pathname !== "/") {
    let query = ejectQueryAndToUppercase(pathname);

    document.title = `${query} Photos, Download The BEST Free ${query} Stock Photos & HD Images`;
  }
};

const indexTitle =
  "Free Stock Photos, Royalty Free Stock Images &amp; Copyright Free Pictures · Pexels";
