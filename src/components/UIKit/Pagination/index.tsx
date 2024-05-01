import React, { useState } from "react";
import { LeftIconSVG, RightIconSVG } from "../SVGIcons";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 14;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    paginationItems.push(
      <div
        key={1}
        className={`size-6 cursor-pointer ${
          currentPage === 1
            ? "text-white"
            : "text-dark-text hover:bg-[#C1C1C133] rounded-lg"
        } font-inter leading-[19.36px] flex items-center justify-center rounded ${
          currentPage === 1
            ? "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]"
            : "bg-transparent"
        }`}
        onClick={() => setCurrentPage(1)}
      >
        1
      </div>
    );

    if (currentPage > 4) {
      paginationItems.push(<div key="text-black">...</div>);
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 2, currentPage + 1);
      i++
    ) {
      paginationItems.push(
        <div
          key={i}
          className={`size-6 cursor-pointer ${
            currentPage === i
              ? "text-white"
              : "text-dark-text hover:bg-[#C1C1C133] rounded-lg"
          } font-inter leading-[19.36px] flex items-center justify-center rounded ${
            currentPage === i
              ? "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]"
              : "bg-transparent"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }

    if (currentPage < totalPages - 3) {
      paginationItems.push(<div key="text-black">...</div>);
    }

    for (let i = Math.max(totalPages - 1, 2); i <= totalPages; i++) {
      paginationItems.push(
        <div
          key={i}
          className={`size-6 cursor-pointer ${
            currentPage === i
              ? "text-white"
              : "text-dark-text hover:bg-[#C1C1C133] rounded-lg"
          } font-inter leading-[19.36px] flex items-center justify-center rounded ${
            currentPage === i
              ? "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989]"
              : "bg-transparent"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex items-center gap-1 mx-auto">
      <div
        className="p-2 hover:bg-[#C1C1C133] rounded-lg cursor-pointer"
        onClick={handlePreviousPage}
      >
        <LeftIconSVG />
      </div>
      <div className="flex items-center">{renderPaginationItems()}</div>
      <div
        className="p-2 hover:bg-[#C1C1C133] rounded-lg cursor-pointer"
        onClick={handleNextPage}
      >
        <RightIconSVG />
      </div>
    </div>
  );
};

export default Pagination;
