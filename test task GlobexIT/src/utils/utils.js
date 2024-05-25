export function filterUser(data, search) {
    return  data.filter((f) => {
        const name = f.name.toLowerCase();
        const resultSearch = search.toLowerCase();
        return name.includes(resultSearch);
    });
}