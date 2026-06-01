import { useParams } from "react-router-dom";

export const RecipeDetailsPage = ({ recipesList }) => {

    const { recipeId } = useParams();


    const recipe = recipesList.find((recipe) => {
        return recipe.id === recipeId;
    });
    console.log(recipeId)
    console.log(recipe)

    // Yena: When the user access to a recipe id that is not existed(already the card deleted or put different id), it could show the message, not 'undefined'. But we could put it or if you don't think it's not important, not.
    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <>
            <div className='recipe-details-container'>
                <img src={recipe.image} alt="Your recipe image" className='image' />
                <p>{recipe.name}</p>
                <p>Calories: {recipe.calories}</p>
                <p>Servings: {recipe.servings}</p>
            </div>

        </>
    )
}

