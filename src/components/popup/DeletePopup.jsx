import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MainData } from "../../context/MainContext";

function DeletePopup() {

    const {idToDelete , setIsPopUp , deleteEngine}=MainData()

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleConfirmDelete = () => {
        deleteEngine(idToDelete);
        setIsPopUp(false)
      };
    
      const handleCancelDelete = () => {
        setIsPopUp(false)
      };


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-gray-800 p-6 rounded shadow-lg w-1/3 text-white">
          <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
          <p className="mb-4">Are you sure you want to delete this item?</p>
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              onClick={handleCancelDelete}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleConfirmDelete}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeletePopup;
