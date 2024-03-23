import './App.css';
import NavbarFilled from "./components/Navbar";
import Hero from "./pages/1-Hero";
import Process from './pages/2-Process';
import Features from './pages/3-Features';
import Guest from './pages/4-Guest';

function App() {
  return (
    <div className='bg-body'>
      <NavbarFilled />
      <Hero />
      <Process />
      <Features />
      <Guest />
    </div>
  );
}

export default App;
