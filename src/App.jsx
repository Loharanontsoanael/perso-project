import * as React from "react";
import { Button } from "@nextui-org/button";
import NavBar from "./components/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import { MainData } from "./context/MainContext";
import PopUpWrapper from "./components/popup/PopUpWrapper";

function App() {

  const{CurrentUser ,CurrentPage , setCurrentPage}=MainData()

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
      <div className="PopUp">
          <PopUpWrapper />
      </div>

    </>
  );
}

export default App;
