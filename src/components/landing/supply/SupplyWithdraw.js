import { useState } from "react";

function SupplyAmount() {
  const [ walletBalance, setWalletBalance ] = useState(0);
  const [ isWalletConnected, setIsWalletConnected ] = useState(false);

  return (
    <div className="grid gap-y-9">
      <div className="grid gap-y-2 xl:gap-y-5">
        <p className="text-[18px] md:text-[20px] font-travel-bold text-center text-[#F7ECE1]">Supply Amount</p>
        {/* Supply Amount */}
        <div className="grid gap-y-6">
          <div className="grid gap-y-4">
            <div className="flex justify-between px-2 py-3 md:px-3 md:py-4 xl:px-6 xl:py-4 border-b border-[#f7ece180]">
              <p className="text-[20px] md:text-[24px] opacity-50 self-center">{walletBalance}</p>
              
              <div className="text-[12px] md:text-[14px] text-right">
                <p className="opacity-50">Wallet Balance</p>
                <p className="font-travel-bold text-[#5874D4]">{walletBalance} WETH</p>
              </div>
            </div>
            { isWalletConnected ? '' :
              <p className="text-[12px] md:text-[14px] text-[#D55858]">Please connect your wallet</p>
            }
          </div>


          {/* Amount bar */}
          <div className="w-full grid gap-y-2">
            <div className="relative">
              <div className="w-full bg-[#f7ece11a] h-1 absolute top-[6px] z-10"></div>
              <div className="flex justify-between">
                <div className="w-[16px] h-[16px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
              </div>
            </div>
            <div className="max-md:text-[12px] flex justify-between">
              <p>0%</p>
              <p className="pl-5">25%</p>
              <p className="pl-5">50%</p>
              <p className="pl-5">75%</p>
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>


      {/* Supply Stats */}
      <div className="grid gap-y-5 text-[#F7ECE1]">
        <p className="text-[18px] md:text-[20px] font-travel-bold text-center">Supply Stats</p>
        <div className="text-[16px] md:text-[20px] grid gap-y-4">
          <div className="flex justify-between">
            <p className="opacity-50">Supply APY</p>
            <p>2.88%</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Supply Balance</p>
            <p>$0.0</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Reward APR</p>
            <p>0.17%</p>
          </div>
        </div>
      </div>

      {/* Borrow Limit */}
      <div className="grid gap-y-5 text-[#F7ECE1]">
        <p className="text-[18px] md:text-[20px] font-travel-bold text-center">Borrow Limit</p>
        <div className="text-[16px] md:text-[20px] grid gap-y-4">
          <div className="flex justify-between">
            <p className="opacity-50">Your Borrow Limit</p>
            <p>$0 &rarr; $0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Borrow Limit Used</p>
            <p>0% &rarr; 0%</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="gap-x-4 grid grid-cols-2 xl:pt-[14px] text-[#F7ECE1] text-[16px] md:text-[20px] opacity-50">
        <button className="px-[18px] py-4 md:px-[30px] md:py-5 border rounded-[85px]">
          <span className="font-travel-bold">1</span>
          &nbsp; Approve
          </button>
        <button className="px-[18px] py-4 md:px-[30px] md:py-5 border rounded-[85px]">
          <span className="font-travel-bold">2</span>
          &nbsp; Supply
          </button>
      </div>
    </div>
  );
}

function BorrowAmount() {
  const [ walletBalance, setWalletBalance ] = useState(0);
  const [ isWalletConnected, setIsWalletConnected ] = useState(false);

  return (
    <div className="grid gap-y-9">
      <div className="grid gap-y-2 xl:gap-y-5">
        <p className="text-[18px] md:text-[20px] font-travel-bold text-center text-[#F7ECE1]">Withdraw Amount</p>
        {/* Supply Amount */}
        <div className="grid gap-y-6">
          <div className="grid gap-y-4">
            <div className="flex justify-between px-2 py-3 md:px-3 md:py-4 xl:px-6 xl:py-4 border-b border-[#f7ece180]">
              <p className="text-[20px] md:text-[24px] opacity-50 self-center">{walletBalance}</p>
              
              <div className="text-[12px] md:text-[14px] text-right">
                <p className="opacity-50">Wallet Balance</p>
                <p className="font-travel-bold text-[#5874D4]">{walletBalance} WETH</p>
              </div>
            </div>
            { isWalletConnected ? '' :
              <p className="text-[12px] md:text-[14px] text-[#D55858]">Please connect your wallet</p>
            }
          </div>


          {/* Amount bar */}
          <div className="w-full grid gap-y-2">
            <div className="relative">
              <div className="w-full bg-[#f7ece11a] h-1 absolute top-[6px] z-10"></div>
              <div className="flex justify-between">
                <div className="w-[16px] h-[16px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
                <div className="w-[10px] h-[10px] bg-[#5874D4] rounded-full self-center z-20"></div>
              </div>
            </div>
            <div className="max-md:text-[12px] flex justify-between">
              <p>0%</p>
              <p className="pl-5">25%</p>
              <p className="pl-5">50%</p>
              <p className="pl-5">75%</p>
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>


      {/* Supply Stats */}
      <div className="grid gap-y-5 text-[#F7ECE1]">
        <p className="text-[18px] md:text-[20px] font-travel-bold text-center">Supply Stats</p>
        <div className="text-[16px] md:text-[20px] grid gap-y-4">
          <div className="flex justify-between">
            <p className="opacity-50">Supply APY</p>
            <p>2.88%</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Supply Balance</p>
            <p>$0.0</p>
          </div>
        </div>
      </div>

      {/* Borrow Limit */}
      <div className="grid gap-y-5 text-[#F7ECE1]">
        <p className="text-[18px] md:text-[20px] font-travel-bold text-center">Borrow Limit</p>
        <div className="text-[16px] md:text-[20px] grid gap-y-4">
          <div className="flex justify-between">
            <p className="opacity-50">Your Borrow Limit</p>
            <p>$0 &rarr; $0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Borrow Limit Used</p>
            <p>0% &rarr; 0%</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid xl:pt-[14px] text-[#F7ECE1] text-[16px] md:text-[20px] opacity-50">
        <button className="px-[18px] py-4 md:px-[30px] md:py-5 border rounded-[85px]">
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default function SupplyWithdraw() {
  const [ flag, setFlag ] = useState(false);

  return (
    <div className="flex flex-col w-full gap-y-9 xl:gap-y-[50px]">
      <div className="text-[28px] grid grid-cols-2 gap-x-4">
        <button 
          className={"py-[10px] border-b " + ( flag ? 'opacity-30' : '') }
          onClick={() => setFlag(false)}
        >Supply</button>
        
        <button 
          className={"py-[10px] border-b " + ( !flag ? 'opacity-30' : '') }
          onClick={() => setFlag(true)}
        >Withdraw</button>
      </div>

      <div className="grid gap-y-9">
        { !flag ?
          <SupplyAmount />
          :
          <BorrowAmount />
        }
      </div>
    </div>
  );
}