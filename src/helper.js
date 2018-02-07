export function serialize(object) {
  const serialized = new FormData();

  Object.keys(object).forEach((key) => {
    serialized.append(key , object[key]);
  });

  console.log(serialized);
  return serialized;
}
