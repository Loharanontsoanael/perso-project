import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function RentNow() {
  const {
    PopUp,
    setIsPopUp,
    formatedDateToday,
    itemsToCart,
    CurrentUser,
  } = MainData();

  const [DateLimit, setDateLimit] = useState(formatedDateToday);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datelimit = new Date(DateLimit);
    const today = new Date(formatedDateToday);

    const differenceOfDate = Math.ceil(
      (datelimit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    const valuesToRent = {
      renter: CurrentUser.UserName,
      renter_id: CurrentUser.id,
      engine_id: itemsToCart.id,
      engine_name: itemsToCart.name,
      quantity_to_rent: 1, // Assuming quantity is always 1 for rental
      initial_price: itemsToCart.price,
      total_price:
        parseInt(itemsToCart.price) *
        (differenceOfDate + 1),
      date_limit: DateLimit,
    };

    // Here you can perform any action with valuesToRent, such as sending it to the backend or updating the state

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

export default RentNow;
