export const RecipeCard = ({onDelete, recipe}) => {
    return (
        <div className="individual-recipe" key={recipe.id}>
            <img src={recipe.image} alt="Recipe image" className="image" />
            <div className="recipe-details">
                <h2>{recipe.name} {recipe.calories <= 200 && <span className="low-cal-badge">Low calories</span>}</h2>
                <p>Calories: {recipe.calories}</p>
                <p>Servings: {recipe.servings}</p>
                <button className="delete-btn" onClick={() => { onDelete(recipe.id) }}>Delete</button>
            </div>
        </div>
    )
}