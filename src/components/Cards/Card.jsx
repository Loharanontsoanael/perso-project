import React from "react";
import cardicons from "../assets/icons_buy.png";
import rating from "../assets/rating.png";
import remove from "../assets/remove.png";
import { MainData } from "../../context/MainContext";

function Card({ id, Name, Price, Stock, Statut, CurrentUser, CurrentPage }) {
  const { deleteEngine , ShowEditEngine , ShowAddToCart , ShowRentNow} = MainData();

  const Item = {
    id: id,
    name: Name,
    price: Price,
    stock: Stock,
    Statut: Statut,
  };

  const handleDelete = (id) => {
    deleteEngine(id);
    // console.log(id);
  };

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
          <div className="price">{Price} Ar /Day</div>
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
        {CurrentPage == "ProductsAdmin" || CurrentUser.Type == "Admin" ? (
          <div className="button-container">
            <button
              className="buy-button button"
              onClick={() => {
                ShowEditEngine(Item)
              }}
            >
              Edit
            </button>
            <button
              className="cart-button button"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <img
                src={remove}
                className="w-[23px] h-[23x] object-contain"
                alt="remove"
              />
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button className="buy-button button" onClick={()=>{ShowRentNow(Item)}}>Rent Now</button>
            <button className="cart-button button" onClick={()=>{ShowAddToCart(Item)}}>
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
