import './App.css';
import Axios from "axios";
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
const [query,setquery] = useState("");
const [recipes ,setrecipes] = useState([]);
const [healthLabel ,sethealthLabel] = useState("vegan")


  const YOUR_APP_ID ="bd639d4b";
const YOUR_APP_KEY ="ea4549d9402985b2430168534e28ba62";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
 
  async function getRecipes(){
    var result = await Axios.get(url) ;
    setrecipes(result.data.hits)
    console.log(result.data);
  }
  

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className ="app">
    <h1>Food Plaza</h1>
    <form className="app_searchForm" onSubmit={onSubmit}>
      
        <input className ="app_input"
         type="text" placeholder="entre inggredient"
        value ={query} onChange={(e) => setquery(e.target.value)}></input>
        <input  className="app_submit" type="submit" value="search"/>
        <select className ="app_healthLabels">
          <option onClick ={()=> sethealthLabel("vegan")}>Vegan</option>
          <option  onClick ={()=> sethealthLabel("vegetarian")}>Vegetarian</option>
          <option onClick ={()=> sethealthLabel("gliten-free")}>Gluten-free</option>
          <option onClick ={()=> sethealthLabel("egg-free")}>egg-free</option>
          <option onClick ={()=> sethealthLabel("peanut-free")}>peanut-free</option>
          <option onClick ={()=> sethealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick ={()=> sethealthLabel("low-sugar")}>low-sugar</option>
          <option onClick ={()=> sethealthLabel("fish-free")}>fish-free</option>
          <option onClick ={()=> sethealthLabel("dairy-free")}>dairy-free</option>
      

        </select>
      
    </form>
    

    <div className="app_recipes">
    {recipes.map((recipe) => {
     return <RecipeTile recipe ={recipe} />;
    })}
    </div>
    </div>
    
  );
}

export default App;
