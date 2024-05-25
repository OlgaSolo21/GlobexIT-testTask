const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getUser = () => {
    return fetch('http://localhost:3000', {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((res) => handleResponse(res))
}