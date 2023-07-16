export const ejectQueryAndToUppercase = (pathname) => {
  let query = pathname.split("/")[2];
  query = query.split(" ");

  query.forEach((value, index, array) => {
    array[index] = value[0].toUpperCase() + value.substring(1);
  });
  return query.join(" ");
};
