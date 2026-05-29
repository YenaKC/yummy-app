import { NewRecipeForm } from "../components/NewRecipeForm"

export const DashboardPage = ({onSubmit}) => {

    return(
        <div>
            <NewRecipeForm onSubmit = {onSubmit}/>
        </div>
    )
}