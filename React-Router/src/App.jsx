import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Vans from "../Components/Vans";
import Home from "../Components/Home";
import { Footer } from "../Components/Footer";  
import VanDetails from "../Components/VanDetails";
import Layout from "../Components/Layout";
import Host from "../Components/Host";
import Dashboard from "../Components/Host/Dashboard"
import Income from "../Components/Host/Income";
import Reviews from "../Components/Host/Reviews";

import './server'
function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;