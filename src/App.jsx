import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    // <div>   
    //   <Body />
    // </div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Body />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
