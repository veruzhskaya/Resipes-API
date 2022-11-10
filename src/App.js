import { useEffect, useState } from 'react';
import video from './Untitled.mp4'
import './App.css';
import MyDesserts from './MyDesserts';
import icon from './icons2.png'

function App() {
const MY_ID="8bf8e1ca";
const MY_API="5ba6e75ed8901e7799caacc1c858fa74";

const [mySearch, setMySearch] = useState ('');
const [myRecipes, setMyRecipes] = useState([]);
const [submitted, setSubmitted] = useState ('dessert');


const searchMyRecipe = (e) => {
  setMySearch (e.target.value)
}

const enterSearch = (e) => {
  e.preventDefault();
  setSubmitted (mySearch)
}

useEffect ( () => {
  const getRecipe = async() => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${submitted}&app_id=${MY_ID}&app_key=${MY_API}`)
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits)
  }
  getRecipe()
}, [submitted])


  return (
    <div className="App">
     <div className='container'>
     <video autoPlay muted loop>
     <source src={video} type = "video/mp4"/>
     </video>
     <h1>Find your favorite dessert!</h1>
     </div>
     <div className='container_search'>
      <form onSubmit={enterSearch}>
        <input className='search'
        placeholder='Search...'
        onChange={searchMyRecipe}
        value={mySearch}
        >
        </input>
      </form>
    <div className='btn'>
     <button className='icon_btn' onClick={()=> setSubmitted (mySearch)}>
      <img className='icon_search' src={icon} alt='search'/>
     </button>
     </div>
     </div>
     <div>
     {myRecipes.map ((element, index) => 
      <MyDesserts  key={index} calories = {element.recipe.calories}
       image= {element.recipe.image}
       label= {element.recipe.label}
       ingredients= {element.recipe.ingredientLines}
      />
     )}
     </div>
    </div>
  );
}

export default App;
