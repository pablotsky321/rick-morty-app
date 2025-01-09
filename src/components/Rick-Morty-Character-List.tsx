import View from "./View.tsx";
import {useEffect, useState} from "react";
import {fetchCharacterList} from "../services/data.service.ts";
import {Result} from "../vite-env";
import RickMortyCharacter from "./Rick-Morty-Character.tsx";
import '../styles/rick-morty-list.css'

export default function RickMortyCharacterList({name}: {name: string}) {
    const [page, setPage] = useState(1)
    const [characterList, setCharacterList] = useState([] as Result[])
    const [maxPage, setMaxPage] = useState(1)

    useEffect(()=>{
        fetchCharacterList(page, name)
            .then((data)=>{
                setCharacterList(data.results)
                setMaxPage(data.info.pages)
            })
            .catch((err)=>{
                console.error(err)
            })
    },[page, name])

    const sumPage = () =>{
        if(page<maxPage){
            setPage(page+1)
        }else{
            setPage(1)
        }
    }

    const restPage = () =>{
        if(page>1){
            setPage(page-1)
        }else{
            setPage(maxPage)
        }
    }


    if(characterList == null){
        return (
            <div className='not-found-container'>
                <h1>Characters not found</h1>
            </div>
        )
    }

    return (
        <View>
            <div className='container-list-rick-morty'>
                <div className='button-group'>
                    <button className='button' onClick={() => sumPage()}>Next</button>
                    <button className='button' onClick={() => restPage()}>Previous</button>
                </div>
                <p className='page-indicator'>page {page} of {maxPage}</p>
                <div className='list-horizontal'>
                    {characterList.map((character) => {
                        return (
                            <RickMortyCharacter data={character} key={character.id}/>
                        )
                    })}
                </div>
            </div>
        </View>
    );
}