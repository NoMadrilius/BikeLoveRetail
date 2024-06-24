import GradientButton from "@/components/UIKit/Buttons/GradientButton";

const SearchResultItem = ({
  title,
  quantity,
  searchResults = false,
  onClick,
}: {
  title: string;
  quantity: string;
  searchResults?: boolean;
  onClick?: () => void;
}) => {


  return (
    <div
      className={`flex items-center justify-between bg-white grow w-full p-3 border-b border-category-border group ${
        !searchResults ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <button className="font-semibold leadin-[19px] text-dark font-inter group-hover:text-link-pink">
        {title}
      </button>
      <div>
        <GradientButton
          label={quantity}
          bgColor={!searchResults ? "bg-white" : ""}
          showIcon={false}
          className={`${!searchResults ? "!p-0" : "!p-1"}`}
          textstyles={`w-max text-center  ${
            !searchResults
              ? "text-dark border border-category-border p-1 group-hover:bg-[#FA6989] rounded-lg group-hover:text-white group-hover:border-[#FA6989]"
              : "hover:text-black"
          }`}
        />
      </div>
    </div>
  );
};

export default SearchResultItem;
