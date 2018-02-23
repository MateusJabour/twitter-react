export function requireAuth({ session, history }) {
  if (!session.isAuthenticated) {
    history.push('/login');
  }
}

export function redirectAuth({ session, history }) {
  if (session.isAuthenticated) {
    history.push('/');
  }
}

export function parseJwt (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};
