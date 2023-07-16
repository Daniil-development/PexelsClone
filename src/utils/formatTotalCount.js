export const formatTotalCount = (totalCountFormatted) => {
  switch (Math.floor((totalCountFormatted.length - 1) / 3)) {
    case 0:
      break;
    case 1:
      totalCountFormatted =
        totalCountFormatted.substring(0, totalCountFormatted.length - 3) +
        "." +
        totalCountFormatted[totalCountFormatted.length - 3] +
        "K";
      break;
    case 2:
      totalCountFormatted =
        totalCountFormatted.substring(0, totalCountFormatted.length - 6) +
        "." +
        totalCountFormatted[totalCountFormatted.length - 6] +
        "M";
      break;
    case 3:
      totalCountFormatted =
        totalCountFormatted.substring(0, totalCountFormatted.length - 9) +
        "." +
        totalCountFormatted[totalCountFormatted.length - 9] +
        "MM";
      break;
    default:
      totalCountFormatted = "Inf";
  }
  return totalCountFormatted;
};
