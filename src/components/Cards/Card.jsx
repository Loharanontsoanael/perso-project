import React, { useState } from "react";
import cardicons from "../assets/icons_buy.png";
import rating from "../assets/rating.png";
import remove from "../assets/remove.png";
import { MainData } from "../../context/MainContext";
import { Button } from "@nextui-org/react";

function Card({ id, Name, Price, Stock, Statut, CurrentUser, CurrentPage }) {
  const { deleteEngine, ShowEditEngine, ShowAddToCart, ShowRentNow } = MainData();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const Item = {
    id: id,
    name: Name,
    price: Price,
    stock: Stock,
    Statut: Statut,
  };

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteEngine(itemToDelete);
    setIsConfirmationModalOpen(false);
    setItemToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsConfirmationModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <>
      <div className="card">
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
          <div className="price">{Price} Ar /Day</div>
        </div>

        <div className="content">
          <div className="brand">{Name}</div>
          <div className="product-name">{Price} Ar/Day</div>
          <div className="rating">Available Number: {Stock}</div>
          <div className="rating">
            <img
              src={rating}
              className="w-[10px] h-[10px] object-contain"
              alt="rating"
            />
            <p className="flex">4.5</p>
          </div>
        </div>
        {(CurrentPage === "ProductsAdmin" || CurrentUser.Type === "Admin") ? (
          <div className="button-container">
            <button
              className="buy-button button"
              onClick={() => {
                ShowEditEngine(Item);
              }}
            >
              Edit
            </button>
            <button
              className="cart-button button"
              onClick={() => {
                handleDeleteClick(id);
              }}
            >
              <img
                src={remove}
                className="w-[23px] h-[23px] object-contain"
                alt="remove"
              />
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button className="buy-button button" onClick={() => { ShowRentNow(Item); }}>Rent Now</button>
            <button className="cart-button button" onClick={() => { ShowAddToCart(Item); }}>
              <img
                src={cardicons}
                className="w-[23px] h-[23px] object-contain"
                alt="addcart"
              />
            </button>
          </div>
        )}
      </div>

      {isConfirmationModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 p-6 rounded shadow-lg w-1/3 text-white">
            <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
