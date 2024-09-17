import View from "./components/View.tsx";
import './styles/App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import CharacterDetail from "./pages/CharacterDetail.tsx";

export default function App(){
    return (
        <div className="app-background">
            <div className="content-wrapper">
                <View>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/:id' element={<CharacterDetail/>}/>
                        </Routes>
                    </BrowserRouter>
                </View>
            </div>
        </div>
    )
}
