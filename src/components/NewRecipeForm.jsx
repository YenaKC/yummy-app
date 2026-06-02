import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../form.css'


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
            <form onSubmit={handleFormSubmit} className='form-container'>
                <label>
                    What's cookin' ?
                    <input
                        type="text"
                        placeholder="Best cookies ever"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <label>
                    Image url
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
                <button>
                    <span>
                    Submit
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 74 74"
                        height="34"
                        width="34"
                    >
                        <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                        <path
                        fill="white"
                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                        ></path>
                    </svg>
                </button>
            </form>
        </>
    )
}