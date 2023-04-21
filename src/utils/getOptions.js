// Helper function to get the options from the product object

export const getOptions = (product, key) => {
  let options = [];
  if (Array.isArray(product[key])) {
    options = product[key].map((item) => item.name);
  } else if (typeof product[key] === "string") {
    options = [product[key]];
  } else {
    options = [product[key]?.name] || [];
  }
  return options;
};
