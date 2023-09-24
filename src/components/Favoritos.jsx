import React, { useContext } from 'react';
import MainContext from "./MainContext";

const Favoritos = () => {
    const { favorites } = useContext(MainContext); // Obtén la lista de favoritos del contexto

    return (
        <div className="CustomApi">
            <div className="CustomApih2">
                <h2>Favoritos</h2>
            </div>
            <div className="agent-list">
                {favorites.map(agent => (
                    <div key={agent.uuid} className="agent-card">
                        <img className='CustomImg' src={agent.displayIcon} alt={agent.displayName} />
                        <div className='CustomButton'>
                            <p>{agent.displayName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favoritos;



