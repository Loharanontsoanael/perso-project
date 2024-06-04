import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function AddToChart() {
  const { PopUp, setIsPopUp, formatedDateToday , itemsToCart , addToCart , cartItems , CurrentUser } = MainData();

  const [quantityToRent, setQuantityToRent] = useState(1);
  const [DateLimit, setDateLimit] = useState(formatedDateToday);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datelimit = new Date(DateLimit)
    const today = new Date(formatedDateToday)
    
    const differenceOfDate = Math.ceil((datelimit.getTime() - today.getTime())/(1000*60*60*24))

    const valuesCart = {
      id: itemsToCart.id,
      name : itemsToCart.name,
      quantity : quantityToRent ,
      initialPrice:itemsToCart.price,
      price : parseInt(quantityToRent)*parseInt(itemsToCart.price)*(differenceOfDate+1) ,
      datelimit: DateLimit ,
    }
    
    addToCart(valuesCart)
    console.log(cartItems);
    setIsPopUp(false)
  };

  return (
    <>
      <div className="PopUpContainer AddEngineWrapper">
        <h1>{PopUp}</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Number to rent :</label>
            <input
              type="text"
              onChange={(e) => {
                setQuantityToRent(e.target.value);
              }}
              value={quantityToRent}
            />
          </div>

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

export default AddToChart;
