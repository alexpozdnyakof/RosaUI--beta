
export function currentUser(): {} {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : {};
}
export function saveUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}
export function clearUser() {
    localStorage.removeItem('currentUser');
}
