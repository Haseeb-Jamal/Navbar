import Navbar from "./Navbar"
import './App.css';
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import Lend from "./pages/Lend";

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
      case "/pricing":
        component = <Pricing />
        break
        case "/about":
        component = <About />
        break
        case "/lend":
        component = <Lend />
        break
     }

  return (
    <>  
  <Navbar />
  <div className="container"> {component}</div>
 
  </>)
}

export default App;
