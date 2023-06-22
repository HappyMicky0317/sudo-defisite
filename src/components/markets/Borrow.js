import USDCimg from '../../assets/coin/usdc.png';
import USDTimg from '../../assets/coin/usdt.png';
import DAIimg from '../../assets/coin/dai.png';

export default function Borrow() {
  return (
    <div className="grid gap-y-10 text-left">
      <div className="text-[32px] text-[#F7ECE1] grid gap-4 px-6">
        <p>Total Borrow</p>
        <b className="font-travel-bold">$79,963,106.60</b>
      </div>

      <div className="grid gap-y-7">
        <div className="grid gap-y-7">
          <hr className="bg-[#F7ECE1]" />
          <p className="px-6 text-[24px]">Top 3 Markets</p>
        </div>

        <div className="grid gap-y-7 text-[20px] text-[#F7ECE1]">
          <hr className="bg-[#f7ece14d]" />
          <div className="grid-cols-[110px_minmax(calc(100%-122px),_1fr)_0px] grid gap-x-3">
            <div className='flex gap-x-3 w-[110px]'>
              <img src={USDCimg} alt='USDC' className='w-9 h-9' />
              <p className="self-center">USDC</p>
            </div>
            
            <div className='justify-self-stretch flex gap-x-3'>
              <div className='w-full self-center h-1 bg-[#f7ece11a]'>
                <div className='h-1 bg-[#5874D4]' style={{width: '17.6%'}}></div>
              </div>

              <div className='w-[72px]'>17.60%</div>
            </div>
          </div>
        </div>

        <div className="grid gap-y-7 text-[20px] text-[#F7ECE1]">
          <hr className="bg-[#f7ece14d]" />
          <div className="grid-cols-[110px_minmax(calc(100%-122px),_1fr)_0px] grid gap-x-3">
            <div className='flex gap-x-3 w-[110px]'>
              <img src={USDTimg} alt='USDT' className='w-9 h-9' />
              <p className="self-center">USDT</p>
            </div>
            
            <div className='justify-self-stretch flex gap-x-3'>
              <div className='w-full self-center h-1 bg-[#f7ece11a]'>
                <div className='h-1 bg-[#5874D4]' style={{width: '17.6%'}}></div>
              </div>

              <div className='w-[72px]'>17.60%</div>
            </div>
          </div>
        </div>

        <div className="grid gap-y-7 text-[20px] text-[#F7ECE1]">
          <hr className="bg-[#f7ece14d]" />
          <div className="grid-cols-[110px_minmax(calc(100%-122px),_1fr)_0px] grid gap-x-3">
            <div className='flex gap-x-3 w-[110px]'>
              <img src={DAIimg} alt='DAI' className='w-9 h-9' />
              <p className="self-center">DAI</p>
            </div>
            
            <div className='justify-self-stretch flex gap-x-3'>
              <div className='w-full self-center h-1 bg-[#f7ece11a]'>
                <div className='h-1 bg-[#5874D4]' style={{width: '17.6%'}}></div>
              </div>

              <div className='w-[72px]'>17.60%</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}