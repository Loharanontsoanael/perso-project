import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function AddToChart() {
  const { PopUp, setIsPopUp, formatedDateToday, itemsToCart, addToCart, cartItems } = MainData();

  const [quantityToRent, setQuantityToRent] = useState(1);
  const [DateLimit, setDateLimit] = useState(formatedDateToday)
  const maxvalue= itemsToCart.stock

  const handleSubmit = (e) => {
    e.preventDefault();

    const datelimit = new Date(DateLimit);
    const today = new Date(formatedDateToday);

    const differenceOfDate = Math.ceil((datelimit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const valuesCart = {
      id: itemsToCart.id,
      name: itemsToCart.name,
      quantity: quantityToRent,
      initialPrice: itemsToCart.price,
      price: parseInt(quantityToRent) * parseInt(itemsToCart.price) * (differenceOfDate + 1),
      datelimit: DateLimit,
    };

    addToCart(valuesCart);
    setIsPopUp(false);
  };

  return (
    <>
      {PopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-800 p-6 rounded shadow-lg w-1/3 text-white">
            <h1 className="text-lg font-semibold mb-4">{PopUp}</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300">Number to rent :</label>
                <input
                  type="text"
                  onChange={(e) => {
                    let newValue = e.target.value

                    if(parseInt(newValue)>=parseInt(maxvalue)){
                      setQuantityToRent(maxvalue)
                    }else{
                      setQuantityToRent(newValue)
                    }
                    // setQuantityToRent(e.target.value);
                  }}
                  value={quantityToRent}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Return date :</label>
                <input
                  type="date"
                  min={formatedDateToday}
                  onChange={(e) => {
                    setDateLimit(e.target.value);
                  }}
                  value={DateLimit}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded text-white"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  onClick={() => {
                    setIsPopUp(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Validate
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddToChart;
