import { NewRecipeForm } from "../components/NewRecipeForm"
import { useParams } from 'react-router-dom'
import '../form.css'


export const DashboardPage = ({ onSubmit, recipesList, onUpdate }) => {
    // Objective: Adjust both AddRecipe & UpdateRecipe in NewRecipeForm component.
    const { recipeId } = useParams();     // If it is /dashboard = no exist RecipeID: recipe = undefined => Add Recipe (get the id)
    
    // Find the id that exists
    const recipe = recipesList.find((recipe) => {
        return recipe.id === recipeId;
    })
    return (
        <div className="form-page">
            <NewRecipeForm onSubmit={onSubmit} recipe={recipe} onUpdate={onUpdate}/>
            {/* <UpdateForm onSubmit={onSubmit} recipe={recipe} /> */}

        </div>
    )
}