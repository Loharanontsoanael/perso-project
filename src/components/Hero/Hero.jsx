import React from "react";
import { Button } from "@nextui-org/button";
import arrow_right from '../../assets/arrow_right.png'

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-48">
        <p className=" text-dimWhite font-mona text-[18px] leading-[30.8px] pl-[65px] ">
          ENGIN LOCATION
        </p>
        <h1 className="font-bold text-[50px] font-mona pl-[60px]">
          ALL OF US BUILD UP
          <br />
          HOUSE WITH GOOD MATERIALS
        </h1>
        <p className="pl-[60px] mt-2">
          Buy or Rent all Constructions materials to us with rentable price with promotions
          <br/>
          Avalaible for all payement methode.
        </p>
        <Button className="rounded-[2rem] px-8 ml-[60px] mt-8 bg-btn ">Get Started <img
            src={arrow_right}
            className="w-[23px] h-[23x] object-contain"
            alt="arrow"
          /></Button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Hero;
