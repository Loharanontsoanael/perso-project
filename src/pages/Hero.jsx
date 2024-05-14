import React from "react";
import { Button } from "@nextui-org/button";
import arrow_right from '../assets/arrow_right.png'
import { Link, Navigate } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-36">
        
        <p className=" text-dimWhite font-mona text-[18px] leading-[30.8px] pl-[65px] ">
          ENGINES LOCATION
        </p>
        
        <h1 className="font-bold text-[50px] font-mona pl-[60px]">
          BUILDING UP
          <br />
          WITH GOOD MATERIALS
        </h1>
        
        <p className="pl-[60px] mt-2">
          Buy or Rent all Constructions materials to us with rentable price with promotions
          <br/>
          Available for all payement methode.
        </p>

        <Link to='/Products'>
          {/* <Button className="rounded-[2rem] px-8 ml-[60px] mt-8 bg-btn ">
              Get Started
            <img src={arrow_right} className="w-[23px] h-[23x] object-contain" alt="arrow"/>
          </Button> */}
          <button className="rounded-[2rem] px-8 ml-[60px] mt-8 disp-flex-row bg-btn getstarted">
            Get Started
            <img src={arrow_right} className="w-[23px] h-[23x] object-contain" alt="arrow"/>
          </button>
        </Link>

      </div>
      <div className=""></div>
    </div>
  );
};

export default Hero;
