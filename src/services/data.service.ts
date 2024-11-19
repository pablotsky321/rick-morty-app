export async function fetchCharacterList(page:number, name:string | null){

    let request;
    if(name == null || name == ''){
        request = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    }
    else{
        request = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
    }
    const response = await request.json()

    return await response

}

export async function fetchCharacterDetails(id:string){

    const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response = await request.json()

    return await response

}