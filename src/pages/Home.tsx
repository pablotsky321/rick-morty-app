import View from "../components/View.tsx";
import RickMortyCharacterList from "../components/Rick-Morty-Character-List.tsx";
import '../styles/home.css'
import {ChangeEvent, useState} from "react";

export default function Home() {

    const [name, setName] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setName(newText);
    };

    return (
        <View>
            <div className='main-container'>
                <div className='header'>
                    <h1 className='title'>Rick and Morty</h1>
                    <div className="link-icon">
                        <p>Icon from:</p>
                        <a className='rick-morty-link' target="_blank" href="https://icons8.com">Icons8</a>
                        <a className='rick-morty-link' target="_blank"
                           href="https://icons8.com/icon/6NdESBVdyMv8/rick-sanchez">Rick Sanchez</a>
                    </div>
                    <input className='search-bar' type='text' value={name} onChange={handleInputChange}
                           placeholder='Search by name'/>
                </div>
                <RickMortyCharacterList name={name}/>
            </div>
        </View>
    );
}

