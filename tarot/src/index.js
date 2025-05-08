import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Route, Routes} from "react-router";
import Draws from "./views/Draws";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/draws" element={<Draws/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
