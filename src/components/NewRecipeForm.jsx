import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const NewRecipeForm = ({ onSubmit, recipe, onUpdate }) => {

    // I created a condition to take the value from recipe if it exists, if not leave default.  --OK
    const initialName = recipe ? recipe.name : ''
    const initialImage = recipe ? recipe.image : ''
    const initialCalories = recipe ? recipe.calories : 0
    const initialServings = recipe ? recipe.servings : 0

    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage);
    const [calories, setCalories] = useState(initialCalories);
    const [servings, setServings] = useState(initialServings);


    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')

        const newRecipe = {

            name: name,
            image: image,
            calories: calories,
            servings: servings,
        }
        //need to call handleUpdate
        recipe ? handleUpdate() : onSubmit(newRecipe) && navigate('/');
        console.log(newRecipe)
        navigate('/')
    }

    const handleUpdate = (e) => {
        const updatedRecipe = {
            id: recipe.id,
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        }
        onUpdate(updatedRecipe)
        navigate('/')
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }
    const handleCalories = (e) => {
        setCalories(e.target.value);
    }
    const handleServings = (e) => {
        setServings(e.target.value);
    }



    return (
        <>
            <form onSubmit={handleFormSubmit} >
                <label>
                    Your recipe
                    <input
                        type="text"
                        placeholder="Best cookies ever"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <label>
                    Image
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </label>
                <label>
                    Calories
                    <input
                        type="number"
                        placeholder="200"
                        value={calories}
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                </label>
                <label>
                    Servings
                    <input
                        type="number"
                        placeholder="1"
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }}
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}