export function fetchstarshipList() {
    return fetch(`https://swapi.dev/api/starships/`).then(response => response.json());
}