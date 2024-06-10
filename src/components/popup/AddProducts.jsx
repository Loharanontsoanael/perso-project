import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function AddProducts() {
  const { PopUp, setIsPopUp, AddNewEngine } = MainData();

  const [EngineName, setEngineName] = useState("");
  const [EnginePrice, setEnginePrice] = useState(0);
  const [EngineQuantity, setEngineQantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewEngine(EngineName, EnginePrice, EngineQuantity);
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
                <label className="block text-gray-300">Engine Name :</label>
                <input
                  type="text"
                  onChange={(e) => setEngineName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Price (/Day) :</label>
                <input
                  type="text"
                  onChange={(e) => setEnginePrice(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Quantity :</label>
                <input
                  type="text"
                  onChange={(e) => setEngineQantity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 rounded text-white"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  onClick={() => setIsPopUp(false)}
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

export default AddProducts;
