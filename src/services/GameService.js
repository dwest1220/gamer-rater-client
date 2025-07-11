export const getGames = async () => {
    const response = await fetch('http://localhost:8000/games', {
        headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rater_token")).token}`
            }
    })
    return await response.json()
}

export const getSingleGame = async (id) => {
    const response = await fetch(`http://localhost:8000/games/${id}`, {
        headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rater_token")).token}`
            }
    })
    return await response.json()
}

export const addGame = async (gameToSave) => {
    const response = await fetch("http://localhost:8000/games", {
        method: "POST",
        headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rater_token")).token}`,
                "Content-Type": "application/json"
            },
        body: JSON.stringify(gameToSave)
    })
    return await response.json()
}