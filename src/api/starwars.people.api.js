const baseURL = process.env.REACT_APP_STARWARSPEOPLE_URL;

export function fetchPeopleList() {
    return fetch(`${baseURL}`).then(response => response.json());
}
