import { Link } from "react-router-dom"

export const RecipeCard = ({ onDelete, recipe }) => {
    return (
        <div className="individual-recipe" key={recipe.id}>
            <img src={recipe.image} alt="Recipe image" className="image" />
            <div className="recipe-details">
                <h2>{recipe.name} {recipe.calories <= 200 && <span className="low-cal-badge">Low calories</span>}</h2>
                <p>Calories: {recipe.calories}</p>
                <p>Servings: {recipe.servings}</p>
                <button className="delete-btn" onClick={() => { onDelete(recipe.id) }}>Delete</button>
                <Link to={`/recipe/${recipe.id}`}>
                    <button className='seedetails' >See Details</button>
                </Link>
                <Link to={`/dashboard/${recipe.id}`}>
                    <button className='update-btn'>Update</button>
                </Link>
            </div>
        </div>
    )
}