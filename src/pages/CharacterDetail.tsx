import View from "../components/View.tsx";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchCharacterDetails} from "../services/data.service.ts";
import {Result} from "../vite-env";
import '../styles/character-detail.css'

function CharacterDetail() {

    const {id} = useParams();
    const [character, setCharacter] = useState({} as Result)

    useEffect(()=>{
        fetchCharacterDetails(id as string)
            .then((data)=>{
                setCharacter(data)
            })
            .catch(()=>{
                console.error("Failed to fetch character details")
            })
    },[id])

    if(!character.name){
        return (
            <div className='loading-barr'>
                <p>Loading...</p>
            </div>
        );
    }

    return (
       <View>
           <div className='character-detail-container'>
               <Link to='/' className='return-link'>Go back</Link>
               <div className='details'>
                   <div className='character-image'>
                       <img src={character.image} alt="character-image"/>
                   </div>
                   <div className='character-detail'>
                       <p>name: {character.name}</p>
                       <p>status: {character.status}</p>
                       <p>species: {character.species}</p>
                       <p>type: {character.type}</p>
                       <p>gender: {character.gender}</p>
                       <div className="origin-detail">
                           <h3>Origin details</h3>
                           <p>name: {character.origin.name}</p>
                           <p>url: {character.origin.url}</p>
                       </div>
                       <div className='location-detail'>
                           <h3>location details</h3>
                           <p>name: {character.location.name}</p>
                           <p>url: {character.location.url}</p>
                       </div>
                       <ul className='episodes-list'>
                           {character.episode.map((episode,index)=>{
                               return(
                                   <li key={episode}><p>episode {index+1}: {episode}</p></li>
                               )
                           })}
                       </ul>
                   </div>
               </div>
           </div>
       </View>
    );
}

export default CharacterDetail;