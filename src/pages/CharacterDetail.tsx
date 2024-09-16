import View from "../components/View.tsx";
import {useParams} from "react-router-dom";

function CharacterDetail() {

    const {id} = useParams();

    console.log(id)

    return (
       <View>
           <h1>welcome to character detail</h1>
       </View>
    );
}

export default CharacterDetail;