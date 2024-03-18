export default function setCookie(name, data, maxTime) {

    const domain = window.location.hostname
    const maxAge = maxTime ?? 999999999

    document.cookie = `${name}=${data}; path=/; domain=${domain}; max-age=${maxAge}; secure;`
}