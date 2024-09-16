export async function fetchCharacterList(page:number){

    const request = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const response = await request.json()

    return await response

}

export async function fetchCharacterDetails(id:string){

    const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response = await request.json()

    return await response

}