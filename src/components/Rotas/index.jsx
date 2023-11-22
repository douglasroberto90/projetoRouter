import {BrowserRouter, Routes, Route} from "react-router-dom";

import PaginaBackEnd from "../PaginaBackEnd/index.jsx"; 
import PaginaFrontEnd from "../PaginaFrontEnd/index.jsx";
import PaginaInicial from "../PaginaInicial/index.jsx";

export default function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaInicial/>}/>
            <Route path='/front-end' element={<PaginaFrontEnd/>}/>
            <Route path='/back-end' element={<PaginaBackEnd/>}/>
        </Routes>
    </BrowserRouter>
    );
}
