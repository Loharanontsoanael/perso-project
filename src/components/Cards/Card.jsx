import React from "react";
import cardicons from "../assets/icons_buy.png";
import rating from "../assets/rating.png";
import remove from "../assets/remove.png";
function Card({ Name, Price, Stock, Statut, CurrentUser, CurrentPage }) {
  return (
    <>
      <div className="card">
        <div className="image-container">
          {Statut == "Available" ? (
            <div className="statutisavalaible">
              <p className="px-2">{Statut}</p>
            </div>
          ) : (
            <div className="statutisdisabled">
              <p className="px-2">{Statut}</p>
            </div>
          )}
          <div className="price">{Price} Ar /heure</div>
        </div>

        <div className="content">
          <div className="brand">{Name} </div>
          <div className="product-name">{Price} Ar/Day</div>
          <div className="rating">Availabel Number : {Stock}</div>
          <div className="rating">
            <img
              src={rating}
              className="w-[10px] h-[10x] object-contain"
              alt="rating"
            />
            <p className="flex">4.5</p>
          </div>
        </div>
        {CurrentPage == "ProductsAdmin" || CurrentUser == "Admin" ? (
          <div className="button-container">
            <button className="buy-button button">Edit</button>
            <button className="cart-button button">
              <img
                src={remove}
                className="w-[23px] h-[23x] object-contain"
                alt="remove"
              />
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button className="buy-button button">Loan Now</button>
            <button className="cart-button button">
              <img
                src={cardicons}
                className="w-[23px] h-[23x] object-contain"
                alt="addcart"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
