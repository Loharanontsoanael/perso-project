import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function HorizontalCard({item}) {
  const { CurrentPage, CurrentUser } = MainData();


  return (
    <>
      <div className="HzCardMain">
        <div className="hzCardDescri">
          <div className="HzCardItemInfo">
            <p className="HzCardEngName">{ item && item.name} </p>
          </div>

          <div className="HzCardDetails">
            {CurrentUser.Type == "Admin" ? <p>Renter: {item && item.renter}</p> : <></>}
            <p>Quantity: {item &&item.quantity}</p>
            <p>Limit date : {item &&item.datelimit}</p>
          </div>
        </div>

        {/* {CurrentPage == "Cart" || CurrentPage == "Request" ? (
          <p className="HzCardPrice">1200050 Ar</p>
        ) : (
          <p className="HzCardPrice">{item.price}</p>
        )} */}
        <p className="HzCardPrice">{item && item.price} AR</p>

        <div className="HzCardButtons">
          {CurrentUser.Type !== "Admin" ? (
            <Button className="mr-2">edit</Button>
          ) : (
            <></>
          )}
          {CurrentUser.Type == "Admin" && CurrentPage == "Request" ? (
            <div>
              <Button>Accept </Button>
              <Button>Deny </Button>
            </div>
          ) : CurrentUser.Type == "Admin" && CurrentPage == "RentalsAdmin" ? (
            <div>
              <Button>Report</Button>
              <Button>Done</Button>
            </div>
          ) : CurrentPage == "Cart" ? (
            <Button>Delete</Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default HorizontalCard;
