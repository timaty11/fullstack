const copyObj = (object) => {
  let result = {};
  let entries = Object.entries(object);

  for (const [key, value] of entries) {
    result[key] = typeof value === 'object' ? copyObj(value) : value;
  }

  return result;
};