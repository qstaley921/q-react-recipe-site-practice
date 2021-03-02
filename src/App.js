import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'd9c4f537';
  const APP_KEY = '80b0a32ef601cf26d788fa91ccb4e2a7';

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    const getData = async () => {
      const result = await axios(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      setRecipes(result.hits);
    };

    getData();
  }, []); 

  return (
    <div className="App"> 
      <h1>Recipe Site:</h1>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>

        
    </div>
  );
}

export default App;
