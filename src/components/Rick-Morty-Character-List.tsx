import View from "./View.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {fetchCharacterList} from "../services/data.service.ts";
import {Result} from "../vite-env";
import RickMortyCharacter from "./Rick-Morty-Character.tsx";
import '../styles/rick-morty-list.css'

export default function RickMortyCharacterList() {
    const [page, setPage] = useState(1)
    const [characterList, setCharacterList] = useState([] as Result[])
    const [maxPage, setMaxPage] = useState(1)
    const [name, setName] = useState('')

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

        const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
            const newText = event.target.value;
            setName(newText);
        };

    return (
        <View>
            <div className='container-list-rick-morty'>
                <input className='search-bar' type='text' value={name} onChange={handleInputChange} placeholder='Search by name' />
            <div className='button-group'>
                <button className='button' onClick={()=>sumPage()}>Next</button>
                <button className='button' onClick={()=>restPage()}>Previous</button>
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