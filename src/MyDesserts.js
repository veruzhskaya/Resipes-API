import { useState } from 'react';
import './App.css';
import iconCalories from './iconcalories.png'

function MyDesserts ({calories,image,label,ingredients}) {
    const [ingredient, setIgredient] = useState(ingredients);
    const [collapse, setCollapse] = useState (true)

    const openIngredients =() => {
        if (ingredient === ingredients) {
            setIgredient ([])
        }
        else {
            setIgredient (ingredients)
        }
        setCollapse (!collapse)
    }

    return (
        <div className='head'>
        <div className='contant'>
         <p className='par_calories'><img className='icon' src={iconCalories} alt='calories'/>{calories.toFixed()} calories</p>
         <img className='photo' src={image} alt="dessert"/>
         <h2>{label}</h2>     
        </div>
        <div className='contant_btn'>        
         <h2>{ingredients}</h2>
        <div>
         <button onClick={openIngredients}>{collapse? "Ingredients" : "Collapse"}</button>
        </div>
        </div>
        </div>
    )
}
export default MyDesserts;