import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fontsource/cinzel";
import {BrowserRouter, Route, Routes} from "react-router";
import {NameDraw} from "./draws/NameDraw";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/name-draw" element={<NameDraw/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
