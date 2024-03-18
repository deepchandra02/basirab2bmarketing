import './App.css';
import NavbarFilled from "./components/Navbar";
import Hero from "./pages/1-Hero";
import Description from './pages/2-Description';
import Features from './pages/3-Features';
import Guest from './pages/4-Guest';

function App() {
  return (
    <>
      <NavbarFilled />
      <Hero />
      <Description />
      <Features />
      <Guest />
    </>
  );
}

export default App;
