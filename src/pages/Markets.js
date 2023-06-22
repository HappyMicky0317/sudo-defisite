import Borrow from "../components/markets/Borrow";
import Search from "../components/markets/Search";
import Supply from "../components/markets/Supply";

export default function Markets() {
  return (
    <div className="text-center w-full grid justify-items-center gap-y-20">
      <div className="grid gap-y-8">
        <b className='text-[#F7ECE1] text-[26px] md:text-[32px] md:max-xl:w-[392px] w-full font-travel-bold'>
          Market: <span className="text-[#5874D5]">Optimism</span>
        </b>

        <div className="grid gap-y-3 text-[20px] md:text-[26px]">
          <p className="">
            Total Value Locked
          </p>
          <b className="text-[#F7ECE1] font-travel-bold">$28,118,388.14</b>
        </div>
      </div>

      <div className="grid gap-y-[60px] xl:gap-y-[50px] w-full">
        <div className="w-full grid xl:grid-flow-col justify-stretch gap-x-[30px] gap-y-[60px]">
          <Supply />
          <Supply />
          {/* <Borrow /> */}
        </div>

        <Search />
      </div>
    </div>
  );
}