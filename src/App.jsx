import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";
import GetStarted from "./components/GetStarted";
import ContactUs from "./components/ContactUs";
import OurOtherProducts from "./components/OurOtherProducts";
import LogOut from "./components/LogOut";
import AboutUs from "./components/LogOut";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourotherproducts" element={<OurOtherProducts />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
