import { NewRecipeForm } from "../components/NewRecipeForm"
import { useParams } from 'react-router-dom'

export const DashboardPage = ({onSubmit, recipesList}) => {
    const { recipeId } = useParams();
    const recipe = recipesList.find((recipe) => {
        return recipe.id === recipeId;
    })
    return(
        <div>
            <NewRecipeForm onSubmit = {onSubmit} recipe={recipe}/>
            
        </div>
    )
}