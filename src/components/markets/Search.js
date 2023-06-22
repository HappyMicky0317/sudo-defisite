import { useState } from 'react';
import SearchSVG from '../../assets/svg/search.svg';
import WETHimg from '../../assets/coin/weth.png';
import TableItem from './TableItem';

export default function Search() {
  const [ searchVal, setSearchVal ] = useState('');

  return (
    <div className=" grid gap-y-8 md:gap-y-[50px]">
      <form className="justify-between flex gap-x-4">
        <button type="submit"
          className="p-[19px] bg-[#5874D5] grid place-items-center"
        >
          <img src={SearchSVG} alt='Search' />
        </button>

        <input className='px-6 py-4 w-full h-[62px] text-[#5874D5] text-[24px] bg-transparent border-y border-[#5874D4] '
          value={searchVal}
          placeholder='Search'
          onChange={e => setSearchVal(e.target.value)}
        />
      </form>

      <div className='relative overflow-hidden'>
        <div className='overflow-auto'>
          <table className="overflow-x-auto grid gap-y-7 text-right border-t min-w-[800px] md:min-w-[1290px]">
            <thead>
              <tr className="grid grid-flow-col justify-stretch text-[16px] md:text-[24px] pt-7 border-t px-3 md:px-6">
                <th className='text-left'>Asset</th>
                <th>Liquidity</th>
                <th>Total Supply</th>
                <th>Supply Apy</th>
                <th>Total Borrow</th>
                <th>Borrow Apy</th>
              </tr>
            </thead>
            
            <tbody className='border-t'>
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}