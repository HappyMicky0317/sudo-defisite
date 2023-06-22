import SearchSupply from "./supply/SearchSupply";
import SupplyWithdraw from "./supply/SupplyWithdraw";

export default function SupplyAssets() {
  return (
    <div className="flex flex-col gap-y-40">
      <div className=" grid gap-y-8 md:gap-y-10">
        <p className="text-[32px] text-[#F7ECE1] text-center font-travel-bold">Supply Assets</p>

        <div className="grid xl:flex gap-x-4 gap-y-10 md:gap-y-[26px]">
          <SearchSupply />
          <hr className="pb-5 md:pb-[26px] xl:hidden" />
          <SupplyWithdraw />
        </div>
      </div>
    </div>
  );
}