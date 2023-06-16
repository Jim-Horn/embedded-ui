function createMap({ defaultValue = '', ...data } = {}) {
  const map = new Map(Object.entries(data));
  return function (key = '') {
    return map.get(key) ?? defaultValue;
  };
}

export { createMap };
