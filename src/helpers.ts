import { Session } from "./reducers/session";

export function requireAuth({ session, history } : { session: Session, history: any }) {
  if (!session.isAuthenticated) {
    history.push('/login');
  }
}

export function redirectAuth({ session, history } : { session: Session, history: any }) {
  if (session.isAuthenticated) {
    history.push('/');
  }
}

export function parseJwt (token : string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

export function difFromCreationDate(date : string) {
  const today = Date.now() / 1000;
  const photoDate = new Date(date).getTime() / 1000;

  const difInSec = today - photoDate;
  if (difInSec > 60) {
    const difInMin = difInSec / 60;
    if (difInMin > 60) {
      const difInHour = difInMin / 60;
      if (difInHour > 24) {
        const difInDay = difInHour / 24;
        return Math.floor(difInDay) + 'd';
      } else {
        return Math.floor(difInHour) + 'h';
      }
    } else {
      return Math.floor(difInMin) + 'm';
    }
  } else {
    return Math.floor(difInSec) + 's';
  }
}

export function sortByDate(array : Array<any>) {
  return array.sort(function(a, b) {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
  });
}
