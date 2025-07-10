export default function getCookies(name) {
    return localStorage.getItem(name);
}