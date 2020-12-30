export async function getPokemonList(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json())
        .then(data => {
            resolve(data)
        })
    });
}

export function getIndivPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json())
        .then(data => {
            resolve(data);
        })
    });
}