import recipeData from '../assets/data/recipes.json';
import { useState } from 'react';

export const RecipeList = () => {

    const [currentRecipeList, setCurrentRecipeList] = useState(recipeData);
    const deleteRecipe = (id)=> {
        const newList = currentRecipeList.filter((recipe)=>{
            return recipe.id !== id;
        })
        setCurrentRecipeList(newList);
    }
    
    return (
        <div className="recipe-container">
            {console.log(recipeData)}
            { currentRecipeList.map((recipe) => {
                
                return (
                    <div className="individual-recipe" key={recipe.id}>
                        <img src={recipe.image} alt="Recipe image" className="image"/>
                        <div className="recipe-details">
                            <h2>{recipe.name} {recipe.calories<=200 && <span className="low-cal-badge">Low calories</span>}</h2>
                            <p>Calories: {recipe.calories}</p>
                            <p>Servings: {recipe.servings}</p>
                            <button className="delete-btn" onClick={()=>{deleteRecipe(recipe.id)}}>Delete</button>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}