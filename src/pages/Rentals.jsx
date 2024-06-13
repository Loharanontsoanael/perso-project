import React, { useEffect } from "react";
import HorizontalCard from "../components/Cards/HorizontalCard";
import { MainData } from "../context/MainContext";

function Rentals() {
  const { CurrentPage, CurrentUser, ShowLogin, rental, formatedDateToday } =
    MainData();
  const today = new Date(formatedDateToday);

  const rentalClient =
    rental.length > 0
      ? rental.filter(
          (item) => (item.user.id == CurrentUser.id && item.status !== "Back")
        )
      : false;

  const rentalAdmin =
    rental.length > 0
      ? rental.filter(
          (item) => item.status == "Renting" || item.status == "Back"
        )
      : false;

  const rentalAdminRequest =
    rental.length > 0
      ? rental.filter((item) => item.status == "Pending")
      : false;

  useEffect(() => {
    console.log(rentalClient);
  }, []);

  return (
    <>
      <div className="RentalsMainContainer">
        <div className="RentalsContentContainer">
          {rentalAdmin.length <= 0 && CurrentPage == "RentalsAdmin"
            ? "No rentalAdmin"
            : rentalClient.length <= 0 && CurrentPage == "Rentals"
            ? " No RentalCli"
            : rentalAdminRequest.length <= 0 && CurrentPage == "Request"
            ? "No rentaladminREquest"
            : ""}

          {CurrentUser.Type == "Guest" ? (
            <div>
              <h3>Log In</h3> to show your current rentals
            </div>
          ) : CurrentUser.Type == "Client" ? (
            rentalClient &&
            rentalClient.map((items, i) => {

              const datelimit = new Date(items.dateLimit);
              const differenceOfDate = Math.ceil(
                (datelimit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
              );
              const diffDate =
                differenceOfDate >= 0 ? differenceOfDate : -differenceOfDate;

              return (
                <div
                  className={`CartItems ${items.reporting ? "hzAlert" : (differenceOfDate<=2&&items.status=='Renting')?'hzWarning':''}`}
                  key={i}
                >
                  <HorizontalCard
                    CurrentPage={CurrentPage}
                    CurrentUser={CurrentUser}
                    rentals={items}
                  />
                </div>
              );
            })
          ) : CurrentPage == "Request" ? (
            rentalAdminRequest &&
            rentalAdminRequest.map((items, i) => (
              <div className="CartItems" key={i}>
                <HorizontalCard
                  CurrentPage={CurrentPage}
                  CurrentUser={CurrentUser}
                  rentals={items}
                />
              </div>
            ))
          ) : (
            rentalAdmin &&
            rentalAdmin.map((items, i) => (
              <div className="CartItems" key={i}>
                <HorizontalCard
                  CurrentPage={CurrentPage}
                  CurrentUser={CurrentUser}
                  rentals={items}
                />
              </div>
            ))
          )}

          {/* {rentalClient &&
            rentalClient.map((items, i) => (
              <div className="CartItems" key={i}>
                <HorizontalCard
                  CurrentPage={CurrentPage}
                  CurrentUser={CurrentUser}
                  rentals={items}
                />
              </div>
            ))} */}
        </div>
      </div>
    </>
  );
}

export default Rentals;
