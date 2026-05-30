
import { RecipeCard } from './RecipeCard';
import { useState } from 'react';

export const RecipeList = ({ recipesList, onDelete }) => {

    return (
        <div className="recipe-container">
            {recipesList.map((recipe) => {

                return (
                    <RecipeCard
                        onDelete={onDelete}
                        recipe={recipe}
                        key={recipe.id} />
                )
            })

            }
        </div>
    )
}