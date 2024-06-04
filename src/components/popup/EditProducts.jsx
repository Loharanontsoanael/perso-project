import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function EditProducts() {


  const { PopUp, setIsPopUp , CurrentEngine , setCurrentEngine ,editEngine } = MainData();

  const [EngineName, setEngineName] = useState(CurrentEngine.name);
  const [EnginePrice, setEnginePrice] = useState(CurrentEngine.price);
  const [EngineQuantity, setEngineQantity] = useState(CurrentEngine.stock);

  const handleSubmit = (e)=>{
    e.preventDefault()

    const id = CurrentEngine.id
    const values = {
      name:EngineName,
      price:EnginePrice,
      quantity:EngineQuantity
    }

    editEngine(id,values)
    setCurrentEngine({})
    setIsPopUp(false)
  }

  return (
    <>
      <div className="PopUpContainer AddEngineWrapper">
        <h1>{PopUp}</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Engine Name :</label>
            <input
              type="text"
              onChange={(e) => {
                setEngineName(e.target.value);
              }}
              value={EngineName}
            />
          </div>

          <div>
            <label>Price (/Day) :</label>
            <input
              type="text"
              onChange={(e) => {
                setEnginePrice(e.target.value);
              }}
              value={EnginePrice}
            />
          </div>

          <div>
            <label>Quantity :</label>
            <input
              type="text"
              onChange={(e) => {
                setEngineQantity(e.target.value);
              }}
              value={EngineQuantity}
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

export default EditProducts;
