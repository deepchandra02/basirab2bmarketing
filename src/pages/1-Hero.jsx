import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import herobg from "../assets/hero/hero.png";

function Hero() {
  return (
    <div className="bg-black text-gold lg:min-h-screen rounded-b-3xl md:rounded-b-[4em]">
      <div className="grid">
        <div className="container mt-8 md:mt-32 lg:mt-4 hidden lg:mb-8 mx-auto md:grid place-items-center text-center">
          <Typography className="font-extrabold text-6xl lg:text-7xl xl:text-8xl text-text !leading-snug">
            Emotionally Intelligent <br /> AI Waiter
          </Typography>
        </div>

        <div className="container  my-4 grid gap-y-5 mx-auto md:hidden place-items-center text-center">
          <Typography className="font-extrabold text-6xl sm:text-7xl">
            Emotionally
          </Typography>
          <Typography className="font-extrabold text-6xl sm:text-7xl">
            Intelligent
          </Typography>
          <Typography className="font-extrabold text-4xl sm:text-5xl">
            AI Waiter
          </Typography>
        </div>
        <div
          className="h-[50em] -mt-24 md:h-[65em] lg:mt-0 xl:h-[90em] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${herobg})` }}
        ></div>
        <div className="container -mt-36 md:-mt-52 lg:-mt-24 mx-auto grid place-items-center text-center px-4">
          <Typography className="text-white text-lg md:text-4xl font-medium">
            Boost your restaurant’s sales with analytics. <br />
            No additional staff required.
          </Typography>
          <div className="mt-8 grid w-full place-items-start md:justify-center">
            {/* //TODO: Functionality to give access */}
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              <Button
                size="lg"
                className="border border-gold hover:bg-gold hover:text-black text-gold bg-transparent transition duration-500 ease-in-out"
              >
                Request Access
              </Button>
            </div>
          </div>
          <Typography className="my-6 mb-10 text-white text-sm md:text-base lg:text-lg xl:text-xl">
            We will open 10 seats on αlpha release.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
