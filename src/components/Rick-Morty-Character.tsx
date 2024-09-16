import {Result} from "../vite-env";
import View from "./View.tsx";
import {Link} from "react-router-dom";
import '../styles/rick-morty.css'

export default function RickMortyCharacter({data}:{data:Result}) {

    return(
        <View>
            <Link to={`/${data.id}`} className='character-container'>
            <div className='character-image'>
                <img src={data.image} alt='Character'/>
            </div>
            <div className='properties'>
                <p>name: {data.name}</p>
                <p>species: {data.species}</p>
                <p>gender: {data.gender}</p>
                <p>status: {data.status}</p>
            </div>
            </Link>
        </View>
    )
}