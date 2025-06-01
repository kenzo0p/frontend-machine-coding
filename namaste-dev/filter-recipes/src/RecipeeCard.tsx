import React from "react";

const RecipeeCard = ({ image, name, rating, cuisine, reviewCount ,setCart , cart }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
        <h1 className="card-recipee_name">{name}</h1>
      </div>
      <div className="card_info">
        <p className="card_info-cuisine">🍴 Cuisine: {cuisine}</p>
        <p className="card_info-rating">
          ⭐ Rating: {rating} ({reviewCount} reviews)
        </p>
        <button onClick={() => setCart(cart + 1)} className="card_cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default RecipeeCard;