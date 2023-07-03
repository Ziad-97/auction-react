import './App.css';
import LandingPage1 from "./LandingPage1";
import LoginRegister from "./LoginRegister";
import AuctionList from "./AuctionList";

import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/sign-in-register" element={<LoginRegister />} />
            <Route path="/auction-list" element={<AuctionList />} />
        </Routes>
      </div>
    </Router>




  );
}

export default App