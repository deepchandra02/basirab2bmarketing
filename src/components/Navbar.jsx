/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  PuzzlePieceIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

function NavItem({ icon, label }) {
  return (
    <a href="#">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="flex items-center gap-1.5 p-1 font-normal"
      >
        {icon}
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem
        icon={<Square3Stack3DIcon className="h-5 w-5" />}
        label="Pages"
      />
      <NavItem icon={<UserCircleIcon className="h-5 w-5" />} label="Account" />
      <NavItem icon={<PuzzlePieceIcon className="h-5 w-5" />} label="Blocks" />
      <NavItem
        icon={<CodeBracketSquareIcon className="h-5 w-5" />}
        label="Docs"
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
    <Navbar fullWidth className="bg-navbar">
      <div className="container mx-auto flex items-center justify-between">
        <div
          // TODO: Add homepage link
          className="flex gap-2 items-center"
        >
          <img src={logo} alt="logo" className="h-8 lg:h-16" />
          <Typography
            href="#"
            className="mr-4 text-xs lg:text-2xl font-semibold cursor-pointer text-[#B5E887]"
          >
            Basira
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button color="white" size="sm" className="hidden lg:inline-block">
          Buy Now
        </Button>
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
        <Button color="white" size="sm" fullWidth className="mb-2">
          Buy Now
        </Button>
      </Collapse>
    </Navbar>
  );
}

export default NavbarFilled;
