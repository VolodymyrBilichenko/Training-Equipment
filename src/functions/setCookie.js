export default function setCookie(name, data, maxTime) {
    localStorage.setItem(name, data);
}