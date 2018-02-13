export function serialize(object) {
  const serialized = new FormData();

  Object.keys(object).forEach((key) => {
    serialized.append(key , object[key]);
  });

  return serialized;
}


export function requireAuth({ session }) {
  if (!session.isAuthenticated) {
    window.location.href = '/login';
  }
}
