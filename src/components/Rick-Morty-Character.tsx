import {Result} from "../vite-env";
import View from "./View.tsx";
import {Link} from "react-router-dom";
import '../styles/rick-morty.css'

export default function RickMortyCharacter({data}:{data:Result}) {

    return(
        <View>
            <div className="character-card">
                <Link to={`/${data.id}`} className="character-link">
                    <div className="character-image">
                        <img src={data.image} alt={`${data.name} character`}/>
                    </div>
                    <div className="character-info">
                        <h2 className="character-name">{data.name}</h2>
                        <p className="character-detail"><span>Species:</span> {data.species}</p>
                        <p className="character-detail"><span>Gender:</span> {data.gender}</p>
                        <p className="character-detail"><span>Status:</span> {data.status}</p>
                    </div>
                </Link>
            </div>
        </View>
    )
}