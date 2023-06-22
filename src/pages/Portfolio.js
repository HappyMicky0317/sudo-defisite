import { useState } from "react";
import ConnectWallet from "../components/layout/navbar/ConnectWallet";

export default function Portfolio() {
  const [ walletAddr, setWalletAddr ] = useState('');

  const afterConnected = () => {
    return (
      <div className="grid gap-y-20">
        <b className='text-[#F7ECE1] text-[26px] md:text-[32px] md:max-xl:w-[392px] w-full font-travel-bold'>
          Market: <span className="text-[#5874D5]">Optimism</span>
        </b>

        <div className="grid gap-y-40">
          <div className="grid gap-y-10">
            <div className="px-6 gap-x-6 flex justify-between text-[32px]">
              <div className="grid gap-y-4 text-left">
                <p className="">Your Supply Balance</p>
                <p className="font-travel-bold">$0.00</p>
              </div>
              <div className="grid gap-y-4 text-right">
                <p className="">Net Apy</p>
                <p className="font-travel-bold">0.00%</p>
              </div>
            </div>
            <div className="gap-y-7"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center w-full grid justify-items-center gap-y-20">
      { 
        // !walletAddr.length ?
        // <div className="w-full grid gap-y-10 justify-items-center">
        //   <b className='text-[#F7ECE1] text-[26px] md:text-[32px] md:max-xl:w-[392px] w-full font-travel-bold'>
        //     Connect Wallet to Get Info
        //   </b>

        //   <ConnectWallet onClick={() => {setWalletAddr("wallet address"); console.log(walletAddr)}} />
        // </div>
        // :
        <div className="w-full grid gap-y-20">
          <b className='w-full text-[#F7ECE1] text-[26px] md:text-[32px] font-travel-bold'>
            <div>
              Portfolio: <span className="text-[#5874D5]">Optimism</span>
            </div>
          </b>
  
          <div className="w-full grid gap-y-40">
            <div className="w-full grid gap-y-10">
              <div className="px-2 md:px-6 gap-x-6 flex justify-between text-[20px] md:text-[24px] text-[#F7ECE1]">
                <div className="w-full grid gap-y-2 md:gap-y-4 text-left">
                  <p className="">Your Supply Balance</p>
                  <p className="font-travel-bold">$0.00</p>
                </div>
                <div className="w-full grid gap-y-2 md:gap-y-4 text-right">
                  <p className="">Net Apy</p>
                  <p className="font-travel-bold">0.00%</p>
                </div>
              </div>
              <div className="grid gap-y-7">
                <div className='relative overflow-hidden'>
                  <div className='overflow-auto'>
                    <table className="overflow-x-auto grid gap-y-7 text-right border-t border-b max-md:w-[500px]">
                      <thead>
                        <tr className="flex justify-between text-[16px] md:text-[24px] py-7 gap-x-7 px-3 md:px-6">
                          <th className="text-left">Supplied Assets</th>
                          <th className="self-center">Apy/ Earned</th>
                          <th className="self-center">Reward Apy</th>
                          <th className="self-center">Balance</th>
                          <th className="self-center">Collateral</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div className="text-[#F7ECE1] text-center text-[20px]">You have no supplied assets</div>
              </div>
            </div>
            
            <div className="w-full grid gap-y-10">
              <div className="px-2 md:px-6 gap-x-6 flex justify-between text-[20px] md:text-[24px] text-[#F7ECE1]">
                <div className="w-full grid gap-y-2 md:gap-y-4 text-left">
                  <p className="">Your Borrow Balance</p>
                  <p className="font-travel-bold">$0.00</p>
                </div>
                <div className="w-full grid gap-y-2 md:gap-y-4 text-right">
                  <p className="">your Borrow Limit</p>
                  <p className="font-travel-bold">0.00%</p>
                </div>
              </div>
              <div className="grid gap-y-7">
                <div className='relative overflow-hidden'>
                  <div className='overflow-auto'>
                    <table className="overflow-x-auto grid gap-y-7 text-right border-t border-b max-md:w-[500px]">
                      <thead>
                        <tr className="flex justify-between text-[16px] md:text-[24px] py-7 gap-x-7 px-3 md:px-6">
                          <th className="text-left">Borrowed Assets</th>
                          <th className="self-center">Apy/ Accrued</th>
                          <th className="self-center">Reward Apy</th>
                          <th className="self-center">Balance</th>
                          <th className="self-center">Borrow Limit</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div className="text-[#F7ECE1] text-center text-[20px]">You have no borrowed assets</div>
              </div>
            </div>

            <div className="w-full grid gap-y-10">
              <div className="flex justify-between pl-2 md:pl-6 text-[#F7ECE1]">
                <div className="grid gap-y-6 text-left text-[20px] md:text-[32px]">
                  <p>Claimable</p>
                  <p className="font-travel-bold">0 SONNE</p>
                </div>
                <button className="border rounded-[85px] px-[18px] py-4 md:px-[30px] md:py-5 self-center text-[16px] md:text-[20px]">Claim All</button>
              </div>

              <div className="grid gap-y-7">
                <div className="flex justify-between text-[16px] md:text-[24px] px-3 md:px-6 border-t border-b py-7">
                  <p>Claimable Assets</p>
                  <p>Amount</p>
                  <p>USD Value</p>
                </div>

                <div className="text-[#F7ECE1] text-center text-[20px]">There are no rewards to claim</div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}