import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function RentNow() {
  const {
    PopUp,
    setIsPopUp,
    formatedDateToday,
    itemsToCart,
    addToCart,
    cartItems,
    CurrentUser,
  } = MainData();

  const [quantityToRent, setQuantityToRent] = useState(1);
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
      renter_id:CurrentUser.id,
      engine_id: itemsToCart.id,
      engine_name: itemsToCart.name,
      quantity_to_rent: quantityToRent,
      initial_price: itemsToCart.price,
      total_price:
        parseInt(quantityToRent) *
        parseInt(itemsToCart.price) *
        (differenceOfDate + 1),
      date_limit: DateLimit,
    };

    const values_to_Rental = {
        UserId : valuesToRent.renter_id ,
        engine_id : valuesToRent.engine_id,
        dateLimit : valuesToRent.date_limit,
        choosen_quantity: 1 ,
    }

    // addToCart(valuesCart);
    console.log(values_to_Rental);
    setIsPopUp(false);
  };

  return (
    <>
      <div className="PopUpContainer AddEngineWrapper">
        <h1>{PopUp}</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Return date :</label>
            <input
              type="date"
              min={formatedDateToday}
              onChange={(e) => {
                setDateLimit(e.target.value);
              }}
              value={DateLimit}
            />
          </div>

          <div>
            <Button
              type="Button"
              onClick={() => {
                setIsPopUp(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Validate</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RentNow;
