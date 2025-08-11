import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Vans from "../Components/Vans";
import Home from "../Components/Home";
import { Footer } from "../Components/Footer";  
import './server'
function App(){
  return(
    <BrowserRouter>
    <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
  
}

export default App;