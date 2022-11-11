import { useState } from 'react';
import './App.css';
import iconCalories from './iconcalories.png'

function MyDesserts ({calories,image,label,ingredients}) {
   
    const [collapse, setCollapse] = useState (false)

    return (
        <div className='head'>
           <div className='contant'>
               <p className='par_calories'><img className='icon' src={iconCalories} alt='calories'/>{calories.toFixed()} calories</p>
               <img className='photo' src={image} alt="dessert"/>
               <h2>{label}</h2>     
           </div>
           <div className='contant_btn'>        
               {
                collapse ? <h3>{ingredients}</h3> : null
               }
              <div>
                   <button className='collapse' onClick={() => setCollapse(!collapse)}>{collapse? "Collapse" : "Ingredients"}</button>
              </div>
           </div>
        </div>
    )
}
export default MyDesserts;