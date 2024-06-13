import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaTimes, FaCheck, FaEdit, FaTrash } from "react-icons/fa"; // Import de FaEdit pour l'icône d'édition
import { MainData } from "../../context/MainContext";
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { BiCheckDouble } from "react-icons/bi";
// import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LiaTimesCircleSolid } from "react-icons/lia";

function HorizontalCard({ item, rentals }) {
  const {
    CurrentPage,
    CurrentUser,
    formatedDateToday,
    deletToCart,
    ShowEditToCart,
    editRental,
    deleteRental,
    IsBack,
    reporting,
  } = MainData();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDelete = () => {
    if (item) {
      deletToCart(item.id);
      toggleDeleteModal();
    }
  };

  const handleEdit = (status) => {
    const id = rentals.id;
    const value = {
      user_id: rentals.user.id,
      engine_id: rentals.engine.id,
      dateLimit: rentals.dateLimit,
      choosen_quantity: rentals.choosen_quantity,
      total_price: rentals.total_price,
      status: status == "Accept" ? "Renting" : "Denied",
    };
    editRental(id, value);
  };

  const handleDeleteRental = () => {
    deleteRental(rentals.id);
    console.log(rentals.id);
  };

  const handleIsback = () => {
    IsBack(rentals.id);
  };

  const handleReporting = () => {
    reporting(rentals.id);
  };

  const datelimit = new Date(
    (item && item.datelimit) || (rentals && rentals.dateLimit)
  );
  const today = new Date(formatedDateToday);

  const month = String(datelimit.getMonth() + 1).padStart(2, "0");
  const day = String(datelimit.getDate()).padStart(2, "0");
  const year = String(datelimit.getFullYear()).slice(-2);

  const formattedDate = `${month}/${day}/${year}`;

  const differenceOfDate = Math.ceil(
    (datelimit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const diffDate = differenceOfDate >= 0 ? differenceOfDate : -differenceOfDate;

  useEffect(() => {
    console.log(differenceOfDate);
  });

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
            {CurrentUser.Type === "Admin" ? (
              <p>
                Renter:{" "}
                {(item && item.renter) || (rentals && rentals.user.UserName)}
              </p>
            ) : (
              <></>
            )}
            {CurrentPage === "Cart" ? (
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
                : differenceOfDate === 0
                ? "(Today left)"
                : ""}
            </p>
          </div>
        </div>

        {CurrentPage === "Cart" || CurrentPage === "Request" ? (
          <p className="HzCardPrice">
            {(item && item.price) || rentals.total_price} Ar
          </p>
        ) : (
          <div className="HzCardPrice">
            <p>
              {rentals && rentals.status}
            </p>
            <p>
            {(rentals.reporting && CurrentUser.Type!=='Admin')
                ? "(Must be returned)"
                : (differenceOfDate <= 2&& CurrentUser.Type!=='Admin')
                ? differenceOfDate >= 0
                  ? `(Should be back in ${differenceOfDate} Day)`
                  : `(Should have been back ${diffDate} Day ago)`
                : ""}
            </p>
          </div>
        )}

        {CurrentUser.Type === "Admin" && CurrentPage === "Request" ? (
          <div className="HzCardButtons">
            <div className="flex space-x-4">
              <button
                aria-label="Deny"
                className="AdminDeny"
                onClick={() => {
                  handleEdit("Deny");
                }}
              >
                <FaTimes />
              </button>
              <button
                aria-label="Accept"
                className="AdminAccept"
                onClick={() => {
                  handleEdit("Accept");
                }}
              >
                <FaCheck />
              </button>
            </div>
          </div>
        ) : CurrentUser.Type === "Admin" && CurrentPage === "RentalsAdmin" ? (
          <div className="HzCardButtons">
            <div className="Reportings">
              <button
                className={`${
                  differenceOfDate <= 0 ? "Report" : "disabledReport"
                }`}
                onClick={handleReporting}
              >
                <GoReport />
              </button>
              <button
                className={`${
                  rentals.isBack ? "Returned" : "DisabledReturned"
                }`}
                disabled={!rentals.isBack}
                onClick={() => {
                  handleDeleteRental();
                }}
              >
                <BiCheckDouble />
              </button>
            </div>
          </div>
        ) : CurrentPage === "Cart" ? (
          <div className="HzCardButtons">
            {CurrentUser.Type !== "Admin" ? (
              <button
                className="editCart"
                onClick={() => {
                  if (item) {
                    ShowEditToCart(item);
                  }
                }}
              >
                <MdEdit /> {/* Icône de crayon pour l'édition */}
              </button>
            ) : (
              <></>
            )}
            {/* <Button onClick={toggleDeleteModal}>
              <FaTrash className="w-5 h-5" />
            </Button> */}
            <button onClick={toggleDeleteModal} className="DeleteCart">
              <MdOutlineDeleteOutline />
            </button>
          </div>
        ) : CurrentUser.Type == "Client" &&
          CurrentPage == "Rentals" &&
          rentals.status == "Denied" ? (
          <div className="btnClients">
            <button
              className="DeleteDenied"
              onClick={() => {
                handleDeleteRental();
              }}
            >
              <LiaTimesCircleSolid />
            </button>
          </div>
        ) : CurrentUser.Type == "Client" &&
          CurrentPage == "Rentals" &&
          rentals.status == "Renting" ? (
          <div className="btnClients">
            <button className="Returned" onClick={handleIsback}>
              <BiCheckDouble />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {showDeleteModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="absolute bg-gray-800 rounded-lg text-white w-full max-w-md p-8">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">Delete Item</h3>
              <p>Are you sure you want to delete this item?</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
              >
                Delete
              </button>
              <button
                onClick={toggleDeleteModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HorizontalCard;
