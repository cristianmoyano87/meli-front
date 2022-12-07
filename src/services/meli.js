
//https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6

export function find(keywords, SetState) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${keywords}&limit=4`)
    .then( response => response.json() )
    .then( data => SetState(data) )
    .catch( error => console.log(error) )   
}

export function getDetail(id, SetState) {
    fetch(`https://api.mercadolibre.com/items/${id}`)
    .then( response => response.json() )
    .then( dataId => {
        fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then( response => response.json() )
        .then( dataDescription => {
            SetState({dataId, dataDescription})
        })
        .catch( error => console.log(error) )   
    })
    .catch( error => console.log(error) )   
/* Version copada (y mas veloz) con procesamiento paralelo
    const urls = [`https://api.mercadolibre.com/items/${id}`, `https://api.mercadolibre.com/items/${id}/description`]

    const requests = urls.map(url => fetch(url))

    Promise.all(requests)
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(data => SetState(data))
*/
}