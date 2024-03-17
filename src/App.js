import { Button } from "@material-tailwind/react";
import './App.css';
import NavbarFilled from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavbarFilled />
      <Hero />
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <Button>Button</Button>
    </>
  );
}

export default App;
