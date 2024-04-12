import { useState } from "react";
import Image from "next/image";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`bg-white xl:py-0 py-4 px-3 max-w-[484px] xl:max-w-[422px] sm:max-w-full md:max-w-full cursor-pointer flex flex-col ${
          !isOpen ? "rounded-lg" : "rounded-t-lg lg:pb-0"
        }`}
      >
        <div
          className="flex items-center justify-between"
          onClick={toggleAccordion}
        >
          <h3 className="text-dark text-[16px] leading-[19.36px] xl:py-[7px] lg:max-w-[332px]">
            {question}
          </h3>
          <Image
            src={"/images/homepage/icons/right-arrow.svg"}
            alt={"Arrow"}
            width={10}
            height={10}
            className={`mx-auto sm:mr-10 shrink-0 transform transition-transform duration-300 ${
              isOpen ? "-rotate-90" : "rotate-90"
            }`}
          />
        </div>
      </div>
      <div
        className={`bg-white overflow-hidden transition-all px-3 rounded-b-lg pb-5 ${
          isOpen ? "max-h-full block" : "max-h-0 hidden"
        }`}
      >
        <div className="bg-white rounded-lg max-w-[484px]">
          <p className="text-t-grey text-[14px] leading-[120%] lg:leading-[16.8px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
