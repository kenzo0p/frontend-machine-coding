import  { useState } from "react";
import "./styles.css";
import RecipeeCard from "./RecipeeCard";
import {recipesData} from "./recipesData"
const RecipeFilterApp = () => {
  const [selectedRating, setSelectedRating] = useState("4.0+");
  const [cart , setCart] = useState(0);
  const filteredRecipes = recipesData.filter(
    (recipe) => recipe.rating >= parseFloat(selectedRating)
  );

  return (
    <div className="app-container">
      <h1 className="app-title">🍽️ Recipe Explorer</h1>
      <div className="filter-container">
        <div className="filter-section">
          <label htmlFor="filter">Filter by rating: </label>
          <select 
            name="filter" 
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="filter-select"
          >
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </div>
        <div className="cart-section">
          <p>🛒 Cart Items: {cart}</p>
        </div>
      </div>
      <div className="recipes-container">
        <h2 className="average-rating">
          Average Rating: {selectedRating} ({filteredRecipes.length} Recipes)
        </h2>
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeeCard
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
              rating={recipe.rating}
              cuisine={recipe.cuisine}
              reviewCount={recipe.reviewCount}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeFilterApp;