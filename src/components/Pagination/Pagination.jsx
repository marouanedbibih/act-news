import React from "react";
import {
    TbPlayerTrackNextFilled,
    TbPlayerTrackPrevFilled,
  } from "react-icons/tb";

function Pagination({
  currentPage,
  totalPages,
  onChangePage,
  onPreviousPage,
  onNextPage,
  carouselPages,
}) {
  return (
    <div className="w-64 h-10 flex justify-center items-center space-x-4">
      <button
        className={`w-[90px] h-10 px-4 py-2.5  rounded-lg justify-center items-center gap-2 inline-flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]  ${
          currentPage === 1
            ? "bg-gray-800 hover:bg-gray-700 active:bg-gray-900"
            : "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700"
        }`}
        onClick={onPreviousPage}
      >
        <TbPlayerTrackPrevFilled />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        // Calculate the start and end pages for the carousel
        let startPage = currentPage - Math.floor(carouselPages / 2);
        let endPage = startPage + carouselPages - 1;

        // Ensure pages stay within bounds
        if (startPage < 1) {
          startPage = 1;
          endPage = startPage + carouselPages - 1;
        }
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - carouselPages + 1;
        }

        // Display buttons within the carousel range
        if (index + 1 >= startPage && index + 1 <= endPage) {
          return (
            <button
              key={index}
              className={`w-[39px] h-10 px-4 py-2.5  rounded-lg justify-center items-center gap-2 inline-flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]  ${
                currentPage === index + 1
                  ? "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700"
                  : "bg-gray-800 hover:bg-gray-700 active:bg-gray-900"
              }`}
              onClick={() => onChangePage(index + 1)}
            >
              {index + 1}
            </button>
          );
        }
        return null; // Return null for buttons outside the carousel range
      })}
      <button
        className={`w-[90px] h-10 px-4 py-2.5  rounded-lg justify-center items-center gap-2 inline-flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]  ${
          currentPage === totalPages
            ? "bg-gray-800 hover:bg-gray-700 active:bg-gray-900"
            : "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700"
        }`}
        onClick={onNextPage}
      >
        <TbPlayerTrackNextFilled />
      </button>
    </div>
  );
}

export default Pagination;
