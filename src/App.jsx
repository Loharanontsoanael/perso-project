import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import PopUpWrapper from "./components/popup/PopUpWrapper";
import { MainData } from "./context/MainContext";
import axios, { Axios } from "axios";

function App() {
  const navigate = useNavigate();
  const {
    CurrentUser,
    CurrentPage,
    setCurrentPage,
    IsPopUp,
    setIsPopUp
  } =MainData();
  
    const refPopUp = useRef("");

  useEffect(() => {
    if (CurrentUser.Type == "Admin") {
      navigate("/ProductsAdmin");
    } else if (CurrentUser.Type == "Guest") {
      navigate("/");
    } else {
      console.log(CurrentUser);
      console.log("normal user");
    }
  }, [CurrentUser]);

  useEffect(() => {
    document.addEventListener("click", handlePopUp, true);
  }, []);

  const handlePopUp = (e) => {
    if (refPopUp.current && !refPopUp.current.contains(e.target)) {
      // setIsPopUp(false);
      console.log("test");
    }
  };

  return (
    <>
      <div className="dark font-mona  h-screen w-screen relative z-0 h-all">
        <div className="wrapping">
          <div>
            <NavBar CurrentUser={CurrentUser} setCurrentPage={setCurrentPage} />
          </div>
          <div className="dark corpse">
            <Outlet />
          </div>
        </div>
      </div>
      {IsPopUp && (
        <div className="PopUp" ref={refPopUp}>
          <PopUpWrapper refPopUp={refPopUp} />
        </div>
      )}
    </>
  );
}

export default App;
