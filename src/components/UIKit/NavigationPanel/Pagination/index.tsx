interface PaginationProps {
  currentIndex: number;
  totalSlides: number;
  className?: string;
}

const Pagination = ({
  currentIndex,
  totalSlides,
  className,
}: PaginationProps) => {
  return (
    <div
      className={`max-w-[280px] sm:max-w-[240px] mx-auto mt-[24px] h-[2px] bg-[#DADADA] block xl:hidden lg:hidden ${className}`}
    >
      <div
        className="h-[2px] bg-[#6B6B6B]"
        style={{
          width: `${((currentIndex + 1) / totalSlides) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default Pagination;
