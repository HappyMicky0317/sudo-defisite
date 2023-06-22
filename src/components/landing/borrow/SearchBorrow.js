import { useState } from 'react';

import TableItem from './TableItem';

import SearchSVG from '../../../assets/svg/search.svg';

export default function SearchBorrow() {
  const [ searchVal, setSearchVal ] = useState('');

  return (
    <div className='flex flex-col gap-y-[50px] pr-4 xl:border-r border-[#d9d9d91a]'>
      <form className="justify-between flex gap-x-4 md:min-w-[720px] xl:min-w-[740px]">
        <button type="submit"
          className="p-[19px] bg-[#5874D5] grid place-items-center"
        >
          <img src={SearchSVG} alt='Search' />
        </button>

        <input className='px-6 py-4 w-full h-[62px] text-[#5874D5] text-[20px] md:text-[24px] bg-transparent border-y border-[#5874D4] '
          value={searchVal}
          placeholder='Search'
          onChange={e => setSearchVal(e.target.value)}
        />
      </form>

      <table className="grid gap-y-7 text-right border-t border-[#f7ece180]">
        <thead>
          <tr className="grid grid-cols-4 text-[16px] md:text-[24px] pt-5 md:pt-7 border-t border-[#f7ece180] px-2 md:px-6">
            <th className='text-left self-center'>Asset</th>
            <th>Borrow Apy</th>
            <th>Reward APR</th>
            <th className='self-center'>Liquidity</th>
          </tr>
        </thead>
        
        <tbody className='border-t border-[#f7ece180]'>
          <TableItem />
          <TableItem />
          <TableItem />
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>
    </div>
  );
}