import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const NewRecipeForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

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
        console.log(newRecipe)
        onSubmit(newRecipe)
        navigate('/')
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