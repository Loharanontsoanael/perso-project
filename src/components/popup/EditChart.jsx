import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function EditChart() {
  const { PopUp, setIsPopUp, formatedDateToday, itemsToCart, editItemCart, editCart } = MainData();
  
  const [quantityToRent, setQuantityToRent] = useState(editItemCart.quantity);
  const [DateLimit, setDateLimit] = useState(editItemCart.datelimit);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datelimit = new Date(DateLimit);
    const today = new Date(formatedDateToday);
    
    const differenceOfDate = Math.ceil((datelimit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const valuesCart = {
      id: editItemCart.id,
      name: editItemCart.name,
      quantity: quantityToRent,
      initialPrice: editItemCart.initialPrice,
      price: parseInt(quantityToRent) * parseInt(itemsToCart.price) * parseInt(differenceOfDate + 1),
      datelimit: DateLimit,
    };
    
    editCart(valuesCart.id, valuesCart);
    setIsPopUp(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-white p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">{PopUp}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Number to rent:</label>
            <input
              type="text"
              onChange={(e) => setQuantityToRent(e.target.value)}
              value={quantityToRent}
              className="border rounded-md px-4 py-2 w-full bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block">Return date:</label>
            <input
              type="date"
              min={formatedDateToday}
              onChange={(e) => setDateLimit(e.target.value)}
              value={DateLimit}
              className="border rounded-md px-4 py-2 w-full bg-gray-700 text-white"
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => setIsPopUp(false)}
              className="mr-2 bg-red-600 hover:bg-red-700 text-white"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Validate</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditChart;
