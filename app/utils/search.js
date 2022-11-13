export default function filter({ list, value, searchFields }) {
  return list.filter((item) => {
    return searchFields.some((key) => {
      return item[key.toLowerCase()]
        ?.toLowerCase()
        .includes(value?.toLowerCase());
    });
  });
}
