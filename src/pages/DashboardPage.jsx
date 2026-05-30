import { NewRecipeForm } from "../components/NewRecipeForm"
import { useParams } from 'react-router-dom'

export const DashboardPage = ({ onSubmit, recipesList, onUpdate }) => {
    const { recipeId } = useParams();
    const recipe = recipesList.find((recipe) => {
        return recipe.id === recipeId;
    })
    return (
        <div>
            //I added the onUpdate props here
            <NewRecipeForm onSubmit={onSubmit} recipe={recipe} onUpdate={onUpdate}/>
            {/* <UpdateForm onSubmit={onSubmit} recipe={recipe} /> */}

        </div>
    )
}