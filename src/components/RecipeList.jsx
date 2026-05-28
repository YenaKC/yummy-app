import recipeData from '../assets/data/recipes.json';
import { RecipeCard } from './RecipeCard';
import { useState } from 'react';

export const RecipeList = () => {

    const [currentRecipeList, setCurrentRecipeList] = useState(recipeData);
    const deleteRecipe = (id) => {
        const newList = currentRecipeList.filter((recipe) => {
            return recipe.id !== id;
        })
        setCurrentRecipeList(newList);
    }

    return (
        <div className="recipe-container">
            {console.log(recipeData)}
            {currentRecipeList.map((recipe) => {

                return (
                    <RecipeCard onDelete={deleteRecipe} recipe={recipe}/>
                )
            })

            }
        </div>
    )
}