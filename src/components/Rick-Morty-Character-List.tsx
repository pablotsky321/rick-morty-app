import View from "./View.tsx";
import {useEffect, useState} from "react";
import {fetchCharacterList} from "../services/data.service.ts";
import {Result} from "../vite-env";
import RickMortyCharacter from "./Rick-Morty-Character.tsx";
import '../styles/rick-morty-list.css'

export default function RickMortyCharacterList() {
    const [page, setPage] = useState(1)
    const [characterList, setCharacterList] = useState([] as Result[])
    const [maxPage, setMaxPage] = useState(1)

    useEffect(()=>{
        fetchCharacterList(page)
            .then((data)=>{
                setCharacterList(data.results)
                setMaxPage(data.info.pages)
            })
            .catch((err)=>{
                console.error(err)
            })
    },[page])

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

    return (
        <View>
            <div className='container-list-rick-morty'>
            <div className='button-group'>
                <button className='button' onClick={()=>sumPage()}>Siguiente</button>
                <button className='button' onClick={()=>restPage()}>Anterior</button>
            </div>
            <div className='list-horizontal'>
            {characterList.map((character)=>{
                return(
                    <RickMortyCharacter data={character} key={character.id}/>
                )
            })}
            </div>
            </div>
        </View>
    );
}