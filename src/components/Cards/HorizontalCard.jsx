import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { MainData } from "../../context/MainContext";
import { FaCheck, FaTimes } from "react-icons/fa";

function HorizontalCard({ item, rentals }) {
  const {
    CurrentPage,
    CurrentUser,
    formatedDateToday,
    deletToCart,
    ShowEditToCart,
  } = MainData();

  const datelimit = new Date(
    (item && item.datelimit) || (rentals && rentals.dateLimit)
  );
  const today = new Date(formatedDateToday);

  const month = String(datelimit.getMonth() + 1).padStart(2, "0"); // Pad month with leading zero if necessary
  const day = String(datelimit.getDate()).padStart(2, "0"); // Pad day with leading zero if necessary
  const year = String(datelimit.getFullYear()).slice(-2); // Get last two digits of the year

  const formattedDate = `${month}/${day}/${year}`;

  const differenceOfDate = Math.ceil(
    (datelimit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  useEffect(() => {
    console.log(formattedDate);
  }, []);

  return (
    <>
      <div className="HzCardMain">
        <div className="hzCardDescri">
          <div className="HzCardItemInfo">
            <p className="HzCardEngName">
              {item && item.name} {rentals && rentals.engine.EngineName}{" "}
            </p>
          </div>

          <div className="HzCardDetails">
            {CurrentUser.Type == "Admin" ? (
              <p>
                Renter:{" "}
                {(item && item.renter) || (rentals && rentals.user.UserName)}
              </p>
            ) : (
              <></>
            )}
            {CurrentPage == "Cart" ? (
              <p>
                {" "}
                Price: {item && item.initialPrice}
                {rentals && rentals.engine.Price} Ar
              </p>
            ) : (
              ""
            )}
            <p>
              Quantity:{" "}
              {(item && item.quantity) || (rentals && rentals.choosen_quantity)}
            </p>
            <p>
              Limit date : {formattedDate}{" "}
              {differenceOfDate > 0
                ? `( ${differenceOfDate + 1} days left)`
                : differenceOfDate == 0
                ? "(Today left)"
                : ""}
            </p>
          </div>
        </div>

        {CurrentPage == "Cart" || CurrentPage == "Request" ? (
          <p className="HzCardPrice">
            {(item && item.price) || rentals.total_price} Ar
          </p>
        ) : (
          <p className="HzCardPrice">{rentals && rentals.status}</p>
        )}
        {/* <p className="HzCardPrice">{item && item.price} Ar</p> */}
        {CurrentUser.Type == "Admin" && CurrentPage == "Request" ? (
          <div className="HzCardButtons mt-4">
            <div className="flex space-x-4">
              <button
                aria-label="Accept"
                className="p-2 bg-gray-800 text-white rounded-[0.5em] shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700"
              >
                <FaCheck className="w-5 h-5" />
              </button>
              <button
                aria-label="Deny"
                className="p-2 bg-red-500 text-white rounded-[0.5em] shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : CurrentUser.Type == "Admin" && CurrentPage == "RentalsAdmin" ? (
          <div className="HzCardButtons">
            <div>
              <Button>Report</Button>
              <Button>Done</Button>
            </div>
          </div>
        ) : CurrentPage == "Cart" ? (
          <div className="HzCardButtons">
            {CurrentUser.Type !== "Admin" ? (
              <Button
                className="mr-2"
                onClick={() => {
                  if (item) {
                    ShowEditToCart(item);
                  }
                }}
              >
                edit
              </Button>
            ) : (
              <></>
            )}
            <Button
              onClick={() => {
                if (item) {
                  deletToCart(item.id);
                }
              }}
            >
              Delete
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default HorizontalCard;
