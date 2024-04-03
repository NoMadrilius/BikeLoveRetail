import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";

const GetOurLatestNewsFirst = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5">
      <h2 className="text-dark-text text-[20px] leading-[24px] font-bold">
        Дізнвайтесь першими про наші новини{" "}
      </h2>
      <div className="flex flex-col gap-3">
        <InputWithPlaceholder placeholder={"Email"} />
        <GradientButton label={"Підписатись"} showIcon={false} />
      </div>
    </section>
  );
};

export default GetOurLatestNewsFirst;
