import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginationClick = (pageNumber) => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    setActivePage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <div className='flex items-center justify-center space-x-1'>
      <button
        className={`p-2 ${activePage === 1 && 'cursor-not-allowed'}`}
        onClick={() => handlePaginationClick(activePage - 1)}
        disabled={activePage === 1}
      >
        <ChevronLeftIcon className='h-5 w-5' />
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`px-4 py-2 ${activePage === number ? 'bg-rose-700 text-white' : 'bg-white text-gray-700'}`}
          onClick={() => handlePaginationClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        className={`p-2 ${activePage === pageNumbers.length && 'cursor-not-allowed'}`}
        onClick={() => handlePaginationClick(activePage + 1)}
        disabled={activePage === pageNumbers.length}
      >
        <ChevronRightIcon className='h-5 w-5' />
      </button>
    </div>
  );
};

export default Pagination;
