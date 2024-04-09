import * as React from "react";
import { Button } from "@nextui-org/button";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="dark font-mona  h-screen w-screen relative z-0"> 
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <NavBar />
      <Hero /> 
      </div>

    </div>
  );
}

export default App;
