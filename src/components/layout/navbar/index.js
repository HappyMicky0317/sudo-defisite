import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './navbar.css';

import ConnectWallet from "./ConnectWallet";
import Divider from './Divider.js';

import LogoImg from '../../../assets/Logo.png';

const navlinks = ['Home', 'Markets', 'Portfolio', 'Stake', 'Claim', 'Fundraising'];

function LinkItem({label}) {
  return (
    <div className="self-center" id={label.toLowerCase() + '-link'}>
      <NavLink to={label === 'Home' ? '' : label.toLowerCase()}>{label}</NavLink>
    </div>
  );
}

function Tab() {
  return (
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.9998 2H1.99976" stroke="#F7ECE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.9998 13H1.99976" stroke="#F7ECE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.9998 24H1.99976" stroke="#F7ECE1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export default function Navbar() {
  const [ activeItem, setActiveItem ] = useState('Home');
  const [ showNav, setShowNav ] = useState(false);

  // const location = useLocation();
  // let currentURL = location.pathname;
  // currentURL = currentURL.slice(1);
  // if(currentURL === '') currentURL = 'home';
  // useEffect(() => {
  //   document.getElementById(currentURL + '-link').style.fontFamily = 'travel-bold';
  // }, []);


  return (  
    <nav className="relative bg-[#1012124D] text-[#F7ECE1] text-[20px] w-full text-center">
      <div className="flex md:justify-between xl:justify-around xs:max-md:items-stretch px-4 py-4 md:px-6 xl:px-10 md:py-5">
        <div className="hidden md:block self-center">
          <img src={LogoImg} alt='LOGO' />
          {/* <h1 className="text-[#5874D4] text-[40px] leading-[40px]">SUDOKU</h1>
          <div className="text-[19px] font-mont">Finance page</div> */}
        </div>

        {
          navlinks.map((links, idx) => 
            <>
              <Divider />
              <div
                className="self-center hidden xl:block"
                id={links.toLowerCase() + '-link'}
                key={idx}
              >
                <NavLink className={({ isActive }) => (isActive ? "font-[1000]" : "")} onClick={() => setActiveItem(links)} to={links === 'Home' ? '' : links.toLowerCase()}>{links}</NavLink>
              </div>
              {/* <LinkItem label={links} /> */}
            </>
          )
        }

        <Divider />
        <div className="flex justify-between md:justify-end gap-8 max-xl:w-full">
          <ConnectWallet />
          <button className="block xl:hidden"
            onClick={() => setShowNav(!showNav)}
          >
            <Tab />
          </button>
        </div>
      </div>
      
      {
        !showNav ? '' : 
        <div className="absolute grid w-full bg-[#101212CC]">
          {
            navlinks.map((links, idx) => 
              <div
                className="self-center"
                key={idx}
                id={links.toLowerCase() + '-link'}
                onClick={() => setShowNav(!showNav)}
              >
                <NavLink to={links === 'Home' ? '' : links.toLowerCase()}>{links}</NavLink>
              </div>
            )
          }
        </div>
      }
    </nav>
  );
}