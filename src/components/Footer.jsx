import React from "react";
import { Typography } from "@material-tailwind/react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="text-darkgold container mx-auto !w-full max-w-[1170px] min-h-96 md:min-h-60 flex flex-col md:flex-row items-start justify-between rounded-t-2xl bg-[#F3F2ED] mt-8 px-6 md:px-16 py-8 md:pb-12 ">
      <div>
        <a href="https://basira.life" className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-7 lg:h-8 2xl:h-10" />
          <Typography className="ml-1 lg:ml-2 text-xl lg:text-2xl font-bold cursor-pointer">
            Basira
          </Typography>
        </a>
      </div>

      <div className="flex flex-col space-y-2 md:hidden">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2"
        >
          <AiFillInstagram className="h-6 w-6" />
          <text className="">Instagram</text>
        </a>
        <a
          href="https://www.linkedin.com/company/podil/about/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2"
        >
          <AiFillLinkedin className="h-6 w-6" />
          <text className="">LinkedIn</text>
        </a>
        <a
          href="mailto:basira.life@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2"
        >
          <SiGmail className="h-5 w-5 ml-[0.15rem]" />
          <text className="">Mail Us</text>
        </a>
      </div>
      <div className="md:hidden">
        <Typography color="gray" className="!text-base">
          Basira is fully compliant with personal data regulations.
          <br /> We never sell or share your data in any form.
        </Typography>
        <Typography color="gray" className="!text-base mt-2">
          © Basira 2024
        </Typography>
      </div>
      <div className="md:flex flex-col justify-between hidden">
        <div className="flex flex-col space-y-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2"
          >
            <AiFillInstagram className="h-6 w-6" />
            <text className="">Instagram</text>
          </a>
          <a
            href="https://www.linkedin.com/company/podil/about/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2"
          >
            <AiFillLinkedin className="h-6 w-6" />
            <text className="">LinkedIn</text>
          </a>
          <a
            href="mailto:basira.life@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2"
          >
            <SiGmail className="h-5 w-5 ml-[0.15rem]" />
            <text className="">Mail Us</text>
          </a>
        </div>
        <Typography color="gray" className="!text-base mt-4">
          Basira is fully compliant with personal data regulations.
          <br /> We never sell or share your data in any form.
        </Typography>
        <Typography color="gray" className="!text-base mt-4">
          © Basira 2024
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
