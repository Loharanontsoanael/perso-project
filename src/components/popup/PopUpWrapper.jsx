import React from "react";
import Login from "./Login";
// import Register from './Register'
import AddProducts from "./AddProducts";
import EditProducts from "./EditProducts";
import EditChart from "./EditChart";
import EditRentals from "./EditRentals";
import { MainData } from "../../context/MainContext";
import AddToChart from "./AddToChart";
import RentNow from "./RentNow";
import DeletePopup from "./DeletePopup";

function PopUpWrapper({ refPopUp }) {
  const { PopUp } = MainData();
  return (
    <>
      <div className="PopUpWrapper" ref={refPopUp}>
        {
          <div ref={refPopUp}>
            {((PopUp == "Login" || PopUp == "Register") && <Login />) ||
              // PopUp=="Register" && <Register />
              (PopUp == "AddToChart" && <AddToChart />) ||
              (PopUp == "New Engine" && <AddProducts />) ||
              (PopUp == "EditProducts" && <EditProducts />) ||
              (PopUp == "EditChart" && <EditChart />) ||
              (PopUp == "EditRentals" && <EditRentals />) ||
              (PopUp == "RentNow" && <RentNow />)||
              (PopUp=="DeletePopup"&&<DeletePopup />)}
          </div>
        }
      </div>
    </>
  );
}

export default PopUpWrapper;
