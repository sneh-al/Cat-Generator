export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertForSelect = (items) =>
  items.map((item) => ({
    value: item.id,
    label: capitalize(item.name),
  }));
