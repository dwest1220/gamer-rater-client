import { useEffect, useState } from "react"
import { getGames } from "../../services/GameService"
import { Link, useNavigate } from "react-router-dom";

export const Game = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        getGames().then(setGames)
    }, [])

    const handleClick = () => {
      navigate('/games/add')
    }

    return (  <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Games</h2>
      <ul className="space-y-2">
        {games.map(game => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`} className="text-blue-600 hover:underline">
              {game.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
      onClick={handleClick}
      >  
        Register New Game
      </button>
    </div>
  );
};
