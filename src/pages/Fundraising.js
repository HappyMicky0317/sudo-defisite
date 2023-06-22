import USDCimg from '../assets/coin/usdc.png'

export default function Fundraising() {
  return (
    <div className="text-center w-full grid justify-items-center gap-y-20">
      <div className="grid gap-y-8 md:gap-y-20 text-[#F7ECE1] w-full">
        <b className='text-[26px] text-[26px] md:text-[32px] font-travel-bold justify-self-center'>
          Funds Will Be Used For Audit
        </b>

        <div className="flex justify-between max-xl:flex-col gap-y-6 md:gap-y-8 text-[20px] md:text-[26px]">
          <div className='grid gap-y-4'>
            <p>Event starts on</p>
            <p className="text-[#5874D5] font-travel-bold">18 Mar 2023, 00:00 UTC</p>
          </div>
          <div className='grid gap-y-4'>
            <p>Total Deposit</p>
            <div className="flex justify-self-center gap-x-2 text-[#5874D5] font-travel-bold">
              <img src={USDCimg} alt="USDC" className='w-9 h-9' />
              <span className='self-center'>50,000</span>
            </div>
          </div>
          <div className='grid gap-y-4'>
            <p>Event ends on</p>
            <p className="text-[#5874D5] font-travel-bold">25 Mar 2023, 00:00 UTC</p>
          </div>
        </div>

        <p className="text-[20px] md:text-[26px] px-6">Depositors will get sSONNE with 7.5% discount.</p>

        <div className="grid gap-y-[50px] justify-self-center w-[343px] md:w-[720px] xl:w-[520px] text-left">
          <div className="flex justify-between font-travel-bold max-md:text-[18px] text-[20px] px-6">
            <p className="self-center">Deposit USDC</p>
            <div className="text-right">
              <p>Deposited:</p>
              <p className="text-[#5874D5]">0.0 USDC</p>
            </div>
          </div>

          
          <div className="grid gap-y-3 px-6 border-b">
            <p className="font-travel-bold max-md:text-[20px]">Unstake</p>
            
            <div className="flex justify-between py-4">
              <p className="opacity-50 text-[20px] md:text-[24px] self-center">0.00</p>
              <div className="text-right text-[12px] md:text-[14px]">
                <p className="opacity-50">Balance</p>
                <p className="text-[#5874D5] font-travel-bold">0.0 USDC</p>
              </div>
            </div>
          </div>

          <button className="py-4 md:py-5 rounded-[85px] border text-[16px] md:text-[20px]">The Event Has Already Ended</button>
        </div>

      </div>
    </div>
  );
}