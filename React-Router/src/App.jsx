import {BrowserRouter,Routes,Route,Link, Outlet} from "react-router-dom";
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
import HostVanDetail from "../Components/Host/HostVansDetail";
import HostVanInfo from "../Components/Host/HostVanInfo";
import HostVanPricing from "../Components/Host/HostVanPricing";
import HostVanData from "../Components/Host/HostVanData";
import HostVanPhoto from "../Components/Host/HostVanPhoto";
import NotFound from "../Components/NotFound";

import './server'
function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVanDetail />} />
            <Route path="vans/:id" element={<HostVanInfo />} >
              <Route index element={<HostVanData />} />
              <Route path="pricing" element={<HostVanPricing/>} />
              <Route path="photo" element={<HostVanPhoto/>} />
             </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;