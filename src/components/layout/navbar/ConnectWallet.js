import { useContext, useEffect, useState } from "react";
import ConnectMetamask from "../../../utils/connectMetamask";


export default function ConnectWallet(props) {
  // const wallet = useContext();
  const [address, setAddress] = useState('');

  useEffect(() => {
    const effect = async () => {
      if(!address) {
        const addr = await ConnectMetamask();
        if(addr) setAddress(addr);
      }
    }
    effect();
    console.log(address);
  }, []);

  const walletConnect = async () => {
    if(!address) {
      const addr = await ConnectMetamask();
      if(addr) setAddress(addr);
    }
  }

  return (
    <button className="flex justify-center self-center gap-3 md:gap-4 text-[16px] md:text-[20px] w-[173px] h-[51px] md:w-[232px] md:h-[64px] btn-wallet"
      onClick={walletConnect}
    >
      <p className="self-center">
        {
          address ? address : 
          "Connect Wallet"
        }
      </p>
      
      <svg
        className="self-center"
        width="8"
        height="22"
        viewBox="0 0 8 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.49988 1C4.49988 0.723858 4.27602 0.5 3.99988 0.5C3.72374 0.5 3.49988 0.723858 3.49988 1H4.49988ZM3.64632 21.3536C3.84159 21.5488 4.15817 21.5488 4.35343 21.3536L7.53541 18.1716C7.73067 17.9763 7.73067 17.6597 7.53541 17.4645C7.34015 17.2692 7.02357 17.2692 6.82831 17.4645L3.99988 20.2929L1.17145 17.4645C0.976189 17.2692 0.659606 17.2692 0.464344 17.4645C0.269082 17.6597 0.269082 17.9763 0.464344 18.1716L3.64632 21.3536ZM3.49988 1V21H4.49988V1H3.49988Z"
          fill="#F7ECE1"/>
      </svg>
    </button>
  );
}