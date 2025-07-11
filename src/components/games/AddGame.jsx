import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addGame } from "../../services/GameService"
import { getCategories } from "../../services/CategoryService"

export const AddGame = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    
    const initialGameState = {
        title: "",
        description: "",
        designer: "", 
        year_released: "",
        number_of_players: "", 
        estimated_time_to_play: "", 
        age_recommendation: "", 
        categories: []  
    }
    
    useEffect(()=>{
        getCategories().then(setCategories)
    },[])
    
    const handleSubmit = () => {
        
        const gameToSave = {
            title: selections.title,
            description: selections.description,
            designer: selections.designer, 
            year_released: selections.year_released,
            number_of_players: selections.number_of_players, 
            estimated_time_to_play: selections.estimated_time_to_play, 
            age_recommendation: selections.age_recommendation, 
            categories: selections.categories  
        }
        
        addGame(gameToSave)
            .then(()=>{
                alert('Game Added!')
                setSelections(initialGameState)
                navigate(`/games`)
            })
    }
    
    const [selections, setSelections] = useState(initialGameState)
    
    return (
        <div>
            <form onSubmit={e => {e.preventDefault(); handleSubmit()}}>
            <h2>Add A Game</h2>
                <fieldset>
                    <label>Title: </label>
                    <input
                    type="text"
                    value={selections.title}
                    onChange={(e)=> setSelections({...selections, title: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                    <label>Description: </label>
                    <input
                    type="text"
                    value={selections.description}
                    onChange={(e)=> setSelections({...selections, description: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                    <label>Designer: </label>
                    <input
                    type="text"
                    value={selections.designer}
                    onChange={(e)=> setSelections({...selections, designer: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                    <label>Release Year: </label>
                    <input
                    type="text"
                    value={selections.year_released}
                    onChange={(e)=> setSelections({...selections, year_released: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                    <label>Number of Players: </label>
                    <input
                    type="number"
                    value={selections.number_of_players}
                    onChange={(e)=> setSelections({...selections, number_of_players: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                    <label>Est. Playtime: </label>
                    <input
                    type="text"
                    value={selections.estimated_time_to_play}
                    onChange={(e)=> setSelections({...selections, estimated_time_to_play: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                    <label>Age Restriction: </label>
                    <input
                    type="text"
                    value={selections.age_recommendation}
                    onChange={(e)=> setSelections({...selections, age_recommendation: e.target.value})}
                    ></input>
                </fieldset>
                <fieldset>
                <label>Categories: </label>
                {categories.map(cat => (
                    <label key={cat.id} style={{ marginRight: "1em" }}>
                        <input
                            type="checkbox"
                            checked={selections.categories.includes(cat.id)}
                            onChange={e => {
                                if (e.target.checked) {
                                    setSelections({
                                        ...selections,
                                        categories: [...selections.categories, cat.id]
                                    });
                                } else {
                                    setSelections({
                                        ...selections,
                                        categories: selections.categories.filter(id => id !== cat.id)
                                    });
                                }
                            }}
                        />
                        {cat.label}
                    </label>
                ))} 
            </fieldset>
            <button type="submit">Add Game</button>
            </form>
        </div>
    )
}