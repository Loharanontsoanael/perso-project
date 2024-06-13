import React, { useState } from "react";
import remove from "../assets/remove.png";
import { MainData } from "../../context/MainContext";
import { FiShoppingCart } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";


function Card({ id, Name, Price, Stock, Statut, CurrentUser, CurrentPage }) {
  const {
    deleteEngine,
    ShowEditEngine,
    ShowAddToCart,
    ShowRentNow,
    ShowDeletePopup,
  } = MainData();


  const Item = {
    id: id,
    name: Name,
    price: Price,
    stock: Stock,
    Statut: Statut,
  };

  const handleDelete = (id) => {
    ShowDeletePopup(id);
  };


  return (
    <>
      <div className={`card ${(Statut=='Unavailable'&&CurrentUser.Type!=='Admin')?'disabledCard':''}`}>
        <div className="image-container">
          {Statut === "Available" ? (
            <div className="statutisavalaible">
              <p className="px-2">{Statut}</p>
            </div>
          ) : (
            <div className="statutisdisabled">
              <p className="px-2">{Statut}</p>
            </div>
          )}
        </div>

        <div className="content">
          <div className="NamePrice">
            <div className="brand">{Name}</div>
            <div className="product-price">{Price} Ar/Day</div>
          </div>
          <div className="rating">Available Number: {Stock}</div>
        </div>
        {CurrentPage === "ProductsAdmin" || CurrentUser.Type === "Admin" ? (
          <div className="buttonCardAdmin">
            <button
              className="editCard"
              onClick={() => {
                ShowEditEngine(Item);
              }}
            >
              <MdEdit/>
            </button>
            <button
              className="deleteCard"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <MdOutlineDeleteOutline/>
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button
              className={` ${Statut == 'Available'?'RentNow':'disabledRentNow'}`}
              disabled={Statut == "Unavailable" ? true : false}
              onClick={() => {
                ShowRentNow(Item);
              }}
            >
              Rent Now
            </button>
            <button
              className={`${Statut == 'Available'?'cartButton':'disabledcartButton'}`}
              disabled={Statut == "Unavailable" ? true : false}
              onClick={() => {
                ShowAddToCart(Item);
              }}
            >
              <FiShoppingCart/>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
