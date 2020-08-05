import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (response) => {
            if (response.ok) {
                return await response.json()
            }
            throw  new Error("Não foi possivel carregar os dados")
        });

}
function getAll() {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (response) => {
            if (response.ok) {
                return await response.json()
            }
            throw  new Error("Não foi possivel carregar os dados")
        });

}

// const create = category => {
//     return fetch(URL_CATEGORIES, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(category)
//     })
//         .then(async response => {
//
//             if (response.ok) {
//                 const res = await response.json()
//                 return res
//             }
//
//             throw new Error('Não foi possível cadastrar a categoria')
//         })
// }

export default {
    getAllWithVideos, getAll
}
