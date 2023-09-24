import React, { useEffect, useState, useContext } from 'react';
import './Api.css';
import MainContext from "./MainContext";

function Home() {
    const [agents, setAgents] = useState([]);
    const { favorites, setFavorites } = useContext(MainContext); // Obtén el estado de favoritos del contexto

    useEffect(() => {
        // Realiza una solicitud GET a la API utilizando fetch
        fetch('https://valorant-api.com/v1/agents')
            .then(response => response.json())
            .then(data => {
                // Filtra los primeros 10 agentes de la respuesta
                const firstTenAgents = data.data.slice(0, 10);
                setAgents(firstTenAgents);
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []);

    const handleClick = (agent) => {
        const isAgentFavorite = favorites.some(favAgent => favAgent.uuid === agent.uuid);

        if (!isAgentFavorite) {
            // Si el agente no está en la lista de favoritos, agrégalo al estado de favoritos
            setFavorites([...favorites, agent]);
        }
    }

    return (
        <div className='CustomApi'>
            <div className='CustomApih2'>
                <h2> <img width="40%" src="src\assets\logo.png" alt="" /> </h2>
            </div>
            <div className="agent-list">
                {agents.map(agent => (
                    <div key={agent.uuid} className="agent-card">
                        <img className='CustomImg' src={agent.displayIcon} alt={agent.displayName} />
                        <div className='CustomButton'>
                            <p>
                                {agent.displayName}
                                <button className='CustomButtonx' onClick={() => handleClick(agent)} style={{ color: favorites.some(favAgent => favAgent.uuid === agent.uuid) ? 'red' : 'initial' }}>
                                    <i className="far fa-heart CustomIcon"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;







