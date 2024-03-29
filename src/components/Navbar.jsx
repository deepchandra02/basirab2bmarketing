/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
// import {
//   Square3Stack3DIcon,
//   UserCircleIcon,
//   PuzzlePieceIcon,
//   CodeBracketSquareIcon,
// } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

function NavItem({ icon, label }) {
  return (
    <a href="#">
      <Typography className="flex items-center gap-1.5 p-1 font-medium lg:text-xl">
        {icon}
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-4">
      <NavItem
        //TODO: Add icon
        // icon={<Square3Stack3DIcon className="h-5 w-5" />}
        label="Process"
      />
      <NavItem
        //TODO: Add icon
        // icon={<UserCircleIcon className="h-5 w-5" />}
        label="Features"
      />
      <NavItem
        //TODO: Add icon
        // icon={<PuzzlePieceIcon className="h-5 w-5" />}
        label="Guest"
      />
    </ul>
  );
}

export function NavbarFilled() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      fullWidth
      className="sticky top-0 z-50 px-4 md:px-8 bg-black2 bg-opacity-100 border-none text-gold"
    >
      <div className="container mx-auto flex items-center justify-between max-w-full">
        <div
          // TODO: Add homepage link
          className="flex gap-2 items-center"
        >
          <img src={logo} alt="logo" className="h-8 lg:h-10 xl:h-12" />
          <Typography
            href="#"
            className="ml-1 lg:ml-2 text-lg lg:text-2xl font-semibold cursor-pointer"
          >
            Basira
          </Typography>
        </div>

        <div className="hidden lg:flex gap-8">
          <NavList />
          {/* //TODO: Functionality to give access */}
          <Button className="h-10 border border-gold bg-gold text-black hover:text-gold hover:bg-transparent transition duration-500 ease-in-out animate-pulse hover:animate-none">
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
        <NavList />
        {/* //TODO: Functionality to give access */}
        <Button className="border border-gold bg-gold text-black hover:text-gold hover:bg-transparent lg:inline-block transition duration-500 ease-in-out animate-pulse hover:animate-none">
          Request Access
        </Button>
      </Collapse>
    </Navbar>
  );
}

export default NavbarFilled;
