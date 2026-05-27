import recipeData from '../assets/data/recipes.json'
import { useState } from 'react'


export const Recipe = () => {

    const [currentRecipeList, setLowcalRecipeList] = useState(recipeData)
    const displayLowCalRecipe = (recipesArr) => {
    const newArray = currentRecipeList.filter((recipe) => recipe.calories<=200)
    setLowcalRecipeList(newArray)
    }
    return (
        <div className="recipe-container">
            {console.log(recipeData)}
            { currentRecipeList.map((recipe) => {
                
                return (
                    <div className="individual-recipe" key={recipe.id}>
                        <img src={recipe.image} alt="Recipe image" className="image"/>
                        <div className="recipe-details">
                            <h2>{recipe.name}</h2>
                            <p>Calories: {recipe.calories}</p>
                            <p>Servings: {recipe.servings}</p>
                            <button onClick={()=>{displayLowCalRecipe(recipe.calories)}}>Check</button>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}