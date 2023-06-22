import { useEffect, useState, createContext, useContext } from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import './App.css';

import Navbar from './components/layout/navbar';

import Landing from './pages/Landing';
import Markets from './pages/Markets';
import Portfolio from './pages/Portfolio';
import Stake from './pages/Stake';
import Claim from './pages/Claim';
import Fundraising from './pages/Fundraising';
import Footer from './components/layout/footer';

const SudokuCtx = createContext();

export default function App() {
  const [ wallet, setWallet ] = useState('');
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => setWallet(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  }, []);

  return (
    <SudokuCtx.Provider value={wallet}>
      <div className='App font-[400] font-travel'>
        <BrowserRouter>
          <Navbar />
          
          <main className="pt-[60px] xs:px-4 md:pt-20 md:px-6 xl:pt-[100px] xl:px-[75px] pb-[100px] md:pb-[160px]">
            <Routes>
              <Route exact path="/" element={<Landing />}/>
              <Route path="/markets" element={<Markets />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/stake" element={<Stake />}/>
              <Route path="/claim" element={<Claim />}/>
              <Route path="/fundraising" element={<Fundraising />}/>
            </Routes>
          </main>

          <Footer />

        </BrowserRouter>
      </div>
    </SudokuCtx.Provider>
  )
}