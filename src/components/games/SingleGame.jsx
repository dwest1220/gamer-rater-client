import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleGame } from "../../services/GameService"

export const SingleGame = () => {
    const { id } = useParams()
    const [game, setGame] = useState(null)
    
    useEffect(()=>{
        getSingleGame(id).then(setGame)
    },[id])

    if (!game) return <div>Loading...</div>

    return (
    <div>
        <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
        <div>
            <ul>
                <li>Designer: {game.designer}</li>
                <li>Release Date: {game.year_released}</li>
                <li>Est. Time: {game.estimated_time_to_play}</li>
                <li>Age Recommendation: {game.age_recommendation}+</li>
                <li>
                    Categories: {" "}
                    {Array.isArray(game.categories)
                        ? game.categories.map((cat)=> cat.label).join(", ")
                        : game.categories}    
                </li>
            </ul>
        </div>
    </div>
    )
}