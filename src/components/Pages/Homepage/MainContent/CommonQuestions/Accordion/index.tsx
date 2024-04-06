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
    <div className="bg-white py-4 px-3 rounded-lg max-w-[484px] sm:max-w-full cursor-pointer flex flex-col">
      <div
        className="flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <h3 className="text-dark text-lg leading-[19px]">{question}</h3>
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Arrow"}
          width={10}
          height={10}
          className={`mx-auto sm:mr-10 transform transition-transform duration-300 ${
            isOpen ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all mt-2 ${
          isOpen ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <div className="bg-white rounded-lg max-w-[484px]">
          <p className="text-t-grey text-[14px] leading-[120%]">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
