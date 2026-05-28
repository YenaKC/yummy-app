import { useParams } from  "react-router-dom";

export const RecipeDetailsPage = ({recipesList}) => {

    const { recipeId } = useParams();
    
    
    const recipe = recipesList.find((recipe) => {
        return recipe.id === recipeId;
    })
    console.log(recipeId)
    console.log(recipe)
    return(
        <>
            <div className='recipe-details-container'>
            <img src={recipe.image} alt="Your recipe image" className='image'/>
            <p>{recipe.name}</p>
            <p>Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
            </div>
           
        </>
    )
}

