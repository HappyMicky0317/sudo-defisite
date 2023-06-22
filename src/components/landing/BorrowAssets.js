import SearchBorrow from "./borrow/SearchBorrow";
import BorrowRepay from './borrow/BorrowRepay';

export default function BorrowAssets() {
  return (
    <div className="flex flex-col gap-y-40">
      <div className=" grid gap-y-8 md:gap-y-10">
        <p className="text-[32px] text-[#F7ECE1] text-center font-travel-bold">Supply Assets</p>

        <div className="grid xl:flex gap-x-4 gap-y-10 md:gap-y-[26px]">
          <SearchBorrow />
          <hr className="pb-5 md:pb-[26px] xl:hidden" />
          <BorrowRepay />
        </div>
      </div>
    </div>
  );
}