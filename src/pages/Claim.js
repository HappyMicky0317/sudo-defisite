import SudokuImg from '../assets/sudoku.png'

export default function Claim() {
  return (
    <div className="text-center w-full grid justify-items-center">
      <b className='font-travel-bold text-[#F7ECE1] text-[26px] md:text-[32px] md:max-xl:w-[392px] w-full'>Pending SONNE claims are shown below</b>

      <div className="grid xl:grid-flow-col justify-items-stretch gap-x-[30px] gap-y-20 pt-20 w-full">
        <div className="grid justify-items-center gap-y-10">
          <img src={SudokuImg} alt='SUDOKU' />
          <b className='text-[26px] md:text-[32px] text-[#F7ECE1] font-travel-bold'>LGE</b>

          <div className="grid gap-4">
            <p className='text-[20px] md:text-[24px]'>Total Claim</p>
            <div className="flex text-[26px] md:text-[32px] gap-x-8">
              <b className='self-center text-[#F7ECE1]'>0</b>
              <div className='flex gap-3'>
                <img src={SudokuImg} alt='SUDOKU' className='w-[27px] h-[35px]' />
                <b className='self-center text-[#F7ECE1] font-travel-bold'>SONNE</b>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <p className='text-[20px] md:text-[24px]'>Est. Available</p>
            <div className="flex text-[26px] md:text-[32px] gap-x-8">
              <b className='self-center text-[#F7ECE1]'>0</b>
              <div className='flex gap-3'>
                <img src={SudokuImg} alt='SUDOKU' className='w-[27px] h-[35px]' />
                <b className='self-center text-[#F7ECE1] font-travel-bold'>SONNE</b>
              </div>
            </div>
          </div>

          <button className='w-[146px] h-[51px] md:w-[200px] md:h-16 border rounded-[85px] text-[16px] md:text-[20px]'>Claim SONNE</button>

        </div>

        <div className="grid justify-items-center gap-y-[40px]">
          <img src={SudokuImg} alt='SUDOKU' />
          <b className='text-[26px] md:text-[32px] text-[#F7ECE1] font-travel-bold'>LGE Bonus</b>

          <div className="grid gap-4">
            <p className='text-[20px] md:text-[24px]'>Total Claim</p>
            <div className="flex text-[26px] md:text-[32px] gap-x-8">
              <b className='self-center text-[#F7ECE1]'>0</b>
              <div className='flex gap-3'>
                <img src={SudokuImg} alt='SUDOKU' className='w-[27px] h-[35px]' />
                <b className='self-center text-[#F7ECE1] font-travel-bold'>SONNE</b>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <p className='text-[20px] md:text-[24px]'>Est. Available</p>
            <div className="flex text-[26px] md:text-[32px] gap-x-8">
              <b className='self-center text-[#F7ECE1]'>0</b>
              <div className='flex gap-3'>
                <img src={SudokuImg} alt='SUDOKU' className='w-[27px] h-[35px]' />
                <b className='self-center text-[#F7ECE1] font-travel-bold'>SONNE</b>
              </div>
            </div>
          </div>

          <button className='w-[146px] h-[51px] md:w-[200px] md:h-16 border rounded-[85px] text-[16px] md:text-[20px]'>Claim SONNE</button>

        </div>
      </div>
    </div>
  );
}