import WETHimg from '../../../assets/coin/weth.png';
import SUDOKUimg from '../../../assets/sudoku.png';

export default function TableItem() {
  return (
        <tr className="grid grid-cols-4 gap-y-7 text-[14px] md:text-[20px] px-2 md:px-6 py-5 md:py-[34px] text-[#F7ECE1] border-t border-[#f7ece180]">
          {/* <hr className="bg-[#F7ECE1]" /> */}
          <th className='text-left flex gap-x-3'>
            <img src={WETHimg} alt="WETH" className='self-center w-6 h-6 md:w-9 md:h-9' />
            <p className='self-center'>WETH</p>
          </th>
          <th className='self-center'>2.88%</th>
          <th className='justify-self-end self-center flex gap-x-1'>
            <p className='self-center'>0.17%</p>
            <img src={SUDOKUimg} alt="SUDOKU" className='self-center w-3 h-4' />
          </th>
          <th className='self-center'>0.00 WETH</th>
        </tr>
  );
}