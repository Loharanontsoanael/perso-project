import { useState } from "react";
import { Button } from "@nextui-org/react";
import { FaCheck, FaTimes, FaEdit, FaTrash } from "react-icons/fa"; // Import de FaEdit pour l'icône d'édition
import { MainData } from "../../context/MainContext";

function HorizontalCard({ item, rentals }) {
  const {
    CurrentPage,
    CurrentUser,
    formatedDateToday,
    deletToCart,
    ShowEditToCart,
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
          <p className="HzCardPrice">{rentals && rentals.status}</p>
        )}

        {CurrentUser.Type === "Admin" && CurrentPage === "Request" ? (
          <div className="HzCardButtons">
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
        ) : CurrentUser.Type === "Admin" && CurrentPage === "RentalsAdmin" ? (
          <div className="HzCardButtons">
            <div>
              <Button>Report</Button>
              <Button>Done</Button>
            </div>
          </div>
        ) : CurrentPage === "Cart" ? (
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
                <FaEdit className="w-5 h-5" /> {/* Icône de crayon pour l'édition */}
              </Button>
            ) : (
              <></>
            )}
            <Button onClick={toggleDeleteModal}>
              <FaTrash className="w-5 h-5" />
            </Button>
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
