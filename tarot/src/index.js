import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/cinzel";
import "bootstrap/dist/js/bootstrap.bundle.min.js" ;
import {BrowserRouter, Route, Routes} from "react-router";
import NameDraw from "./draws/NameDraw";
import {ThreeDraw} from "./draws/ThreeDraw";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/name-draw" element={<NameDraw/>}/>
                <Route path="/3-draw" element={<ThreeDraw/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
