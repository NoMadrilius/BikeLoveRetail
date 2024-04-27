import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";

const GetOurLatestNewsFirst = ({
  className,
  textColor,
  buttonStyles = "",
}: {
  className?: string;
  textColor?: string;
  buttonStyles?: string;
}) => {
  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5 ${className}`}
    >
      <h2
        className={`text-dark-text text-[20px] leading-[24px] font-bold font-robot-c ${textColor}`}
      >
        Дізнавайтесь першими про наші новини
      </h2>
      <div className="flex flex-col gap-3">
        <InputWithPlaceholder placeholder={"Email"} />
        <GradientButton
          label={"Підписатись"}
          showIcon={false}
          className={`justify-center `}
          bgColor={`${buttonStyles}`}
        />
      </div>
    </section>
  );
};

export default GetOurLatestNewsFirst;
