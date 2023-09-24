import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Favoritos from './components/Favoritos';
import Home from './components/Home';
import MainContext from "./components/MainContext";
import NavBar from './components/NavBar';

function App() {
    const [favorites, setFavorites] = useState([]); // Estado para los favoritos

    // Define el valor que deseas proporcionar a través del contexto
    const contextValue = {
        favorites: favorites, // Pasa la lista de favoritos al contexto
        setFavorites: setFavorites, // Pasa la función para actualizar favoritos
    };

    return (
        <MainContext.Provider value={contextValue}>
            <BrowserRouter>
                <>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/favoritos' element={<Favoritos />} />
                    </Routes>
                </>
            </BrowserRouter>
        </MainContext.Provider>
    );
}

export default App;





