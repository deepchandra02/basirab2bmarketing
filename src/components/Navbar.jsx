/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import AccessForm from "./AccessForm";

function NavItem({ icon, label, to, offset, onClick }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={offset}
      onClick={onClick}
      className="cursor-pointer flex items-center gap-1.5 p-1 font-medium lg:text-xl"
    >
      {icon}
      {label}
    </Link>
  );
}

export function NavbarFilled() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [openForm, setOpenForm] = React.useState(false);
  const handleOpenForm = () => setOpenForm((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      fullWidth
      className="sticky top-0 z-50 px-4 md:px-8 bg-black2 bg-opacity-100 border-none text-lightgold"
    >
      <div className="container mx-auto flex items-center justify-between max-w-full">
        <Link to="hero" smooth={true} duration={1000} offset={-200}>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="h-8 lg:h-10 2xl:h-12" />
            <Typography className="ml-1 lg:ml-2 text-lg lg:text-2xl font-semibold cursor-pointer">
              Basira
            </Typography>
          </div>
        </Link>
        <div className="hidden lg:flex gap-8">
          <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-4">
            <NavItem label="Process" to="process" offset={-70} />
            <NavItem label="Features" to="features" offset={-80} />
            <NavItem label="Guest" to="guest" offset={-70} />
          </ul>
          {/* //TODO: Functionality to give access */}
          <Button
            onClick={handleOpenForm}
            className="h-10 border border-lightgold bg-lightgold text-black hover:text-lightgold hover:bg-transparent transition duration-500 ease-in-out animate-pulse hover:animate-none"
          >
            Request Access
          </Button>
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-4">
          <NavItem
            label="Process"
            to="process"
            offset={-220}
            onClick={() => setOpen(false)}
          />
          <NavItem
            label="Features"
            to="features"
            offset={-250}
            onClick={() => setOpen(false)}
          />
          <NavItem
            label="Guest"
            to="guest"
            offset={-220}
            onClick={() => setOpen(false)}
          />
        </ul>
        {/* //TODO: Functionality to give access */}
        <Button
          onClick={handleOpenForm}
          className="border border-lightgold bg-lightgold text-black hover:text-lightgold hover:bg-transparent lg:inline-block transition duration-500 ease-in-out animate-pulse hover:animate-none"
        >
          Request Access
        </Button>
      </Collapse>

      <AccessForm
        setOpen={setOpenForm}
        open={openForm}
        handleOpen={handleOpenForm}
      />
    </Navbar>
  );
}

export default NavbarFilled;
