import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import herobg from "../assets/hero.png";

function Hero() {
  return (
    <div className="bg-black">
      <div className="grid min-h-[85vh] px-8">
        <div className="container my-8 mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            className="text-3xl !leading-snug lg:text-5xl xl:text-6xl text-text"
          >
            Sales-driven, empathic <br /> AI Waiter
          </Typography>
        </div>
        <div
          className="lg:min-h-[60vh] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${herobg})` }}
        ></div>
        <div className="container my-auto mx-auto grid place-items-center text-center">
          <Typography className="my-4 max-w-3xl text-text text-xl lg:text-2xl font-medium">
            Increase your restaurant’s revenue and customer loyalty with
            analytics at no additional hiring cost.
          </Typography>
          <div className="mt-8 grid w-full place-items-start md:justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              {/* <Input color="white" label="Enter your email" size="lg" /> */}
              <Button className="w-full px-4 md:w-[12rem] bg-text text-black">
                Send Menu
              </Button>
            </div>
          </div>
          {/* <div className="p-5">
            <div className="flex items-center justify-center">
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-basiraGreen file:text-black
          hover:file:bg-basiraGreen-darker
          cursor-pointer"
                  style={{ transition: "background-color 0.2s" }}
                />
              </label>
            </div>
          </div> */}

          <Typography className="my-4 lg:mb-16 max-w-3xl text-white text-xs lg:text-sm font-medium">
            We will open 15 seats on αlpha release.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
