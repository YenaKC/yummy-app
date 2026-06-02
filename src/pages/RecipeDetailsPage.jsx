import { useParams } from "react-router-dom";
import "../recipeDetails.css";

export const RecipeDetailsPage = ({ recipesList }) => {

    const { recipeId } = useParams();


    const recipe = recipesList.find((recipe) => {
        return recipe.id === recipeId;
    });

    // console.log(recipeId)
    // console.log(recipe)

    // Yena: When the user access to a recipe id that is not existed(already the card deleted or put different id), it could show the message, not 'undefined'. But we could put it or if you don't think it's not important, not.
    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <>
            <div className="recipe-details-container">
                <img 
                    src={recipe.image}
                    alt={recipe.name} 
                    className="recipe-details-image" 
                />

                {/* "recipe-details-info" to seprate images and the information */}
                <div className="recipe-details-info">

                    {/* Main title of the recipe */}
                    <h1>{recipe.name}</h1>

                    <div className="recipe-stats">

                        {/* Container added to make the stat easier to style */}
                        <div className="recipe-stat-box">
                            <span>Calories</span>
                            <strong>{recipe.calories}</strong>
                        </div>

                        <div className="recipe-stat-box">
                            <span>Servings</span>
                            <strong>{recipe.servings}</strong>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

