import * as React from "react";
import { Button } from "@nextui-org/button";
import NavBar from "./components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="dark font-mona  h-screen w-screen relative z-0 h-all"> 
      <div className="wrapping">
        <div>
          <NavBar />
        </div>
        <div className="dark corpse">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default App;
