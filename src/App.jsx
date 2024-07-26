/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import { NavBar } from "./Components/Header/NavBar";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Exchange } from "./Pages/Exchanges/Exchange";
import { Coin } from "./Pages/Coins/Coin";
import { CoinDetail } from "./Components/Coindetails/CoinDetail";
import { Error } from "./Components/Error/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/Coins/:id" element={<CoinDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
