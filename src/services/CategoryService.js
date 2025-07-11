export const getCategories = async () => {
    const response = await fetch('http://localhost:8000/categories', {
        headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rater_token")).token}`
            }
    })
    return await response.json()
}
