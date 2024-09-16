import View from "../components/View.tsx";
import RickMortyCharacterList from "../components/Rick-Morty-Character-List.tsx";

export default function Home() {
    return (
        <View>
            <h1>welcome to Rick and Morty App</h1>
            <RickMortyCharacterList/>
        </View>
    );
}

