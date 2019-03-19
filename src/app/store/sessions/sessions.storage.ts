const SESSION_KEY = 'session';

export function getSession() {
    const token = localStorage.getItem('token');
    return token ? token : {};
}

export function saveSession( session ) {
    localStorage.setItem('token', session);
    console.log(localStorage.getItem('token'));
}

export function clearSesssion() {
    localStorage.removeItem('token');
}
