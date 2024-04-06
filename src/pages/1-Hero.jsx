import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import herobg from "../assets/hero/hero.png";
import AccessForm from "../components/AccessForm";

function Hero() {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm((cur) => !cur);

  return (
    <>
      <div
        id="hero"
        className="bg-black2 text-lightgold md:min-h-screen rounded-b-3xl md:rounded-b-[4em]"
      >
        <div className="grid">
          <div className="container mt-8 lg:mt-4 hidden lg:mb-8 mx-auto md:grid place-items-center text-center">
            <Typography className="font-semibold text-6xl lg:text-7xl 2xl:text-8xl text-text !leading-snug">
              Emotionally Intelligent <br /> AI Waiter
            </Typography>
          </div>
          <div className="container  my-4 grid gap-y-5 mx-auto md:hidden place-items-center text-center">
            <Typography className="font-semibold text-6xl sm:text-7xl">
              Emotionally
            </Typography>
            <Typography className="font-semibold text-6xl sm:text-7xl">
              Intelligent
            </Typography>
            <Typography className="font-semibold text-5xl sm:text-6xl">
              AI Waiter
            </Typography>
          </div>
          <div
            className="h-[28em] mt-10 md:h-[35em] lg:h-[40em] xl:h-[50em] 2xl:h-[70em] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${herobg})` }}
          ></div>
          <div className="container mt-10 md:mt-16 mx-auto grid place-items-center text-center px-4">
            <Typography className="text-white text-lg md:text-2xl lg:text-4xl font-medium">
              Boost your restaurant’s sales with analytics. <br />
              No additional staff required.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              {/* //TODO: Functionality to give access */}
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Button
                  onClick={handleOpenForm}
                  size="lg"
                  className="border border-lightgold hover:bg-lightgold hover:text-black text-lightgold bg-transparent transition duration-500 ease-in-out"
                >
                  Request Access
                </Button>
              </div>
            </div>
            <Typography className="my-6 mb-10 text-white text-sm md:text-base lg:text-lg 2xl:text-xl">
              We will open 10 seats on αlpha release.
            </Typography>
          </div>
        </div>
      </div>
      <AccessForm
        setOpen={setOpenForm}
        open={openForm}
        handleOpen={handleOpenForm}
      />
    </>
  );
}

export default Hero;
