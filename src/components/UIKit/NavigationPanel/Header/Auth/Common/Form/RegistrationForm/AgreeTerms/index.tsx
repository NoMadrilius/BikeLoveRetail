import Link from "next/link";
import React from "react";

const AgreeTerms = () => {
  return (
    <div className="text-center">
      <p className="text-dark text-[14px] leading-[120%]">
        Реєструючись, ви погоджуєтесь з умовами{" "}
      </p>
      <Link className="text-blue-link text-[14px] leading-[120%]" href={"#"}>
        Положення про обробку персональних даних
      </Link>
    </div>
  );
};

export default AgreeTerms;
