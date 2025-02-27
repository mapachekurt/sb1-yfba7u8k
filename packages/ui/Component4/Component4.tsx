import PropTypes from "prop-types";
import React from "react";

interface Props {
  variant: "two" | "one";
  hover: boolean;
  className: any;
}

export const Component4 = ({
  variant,
  hover,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`min-h-[38px] inline-flex items-center px-[15px] py-[9px] rounded-full justify-center relative ${variant === "two" ? "border border-solid" : ""} ${variant === "two" ? "border-[#00000026]" : ""} ${variant === "two" ? "bg-white" : "bg-[#0d0d0d]"} ${className}`}
    >
      <div
        className={`[font-family:'Inter-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] font-normal text-center whitespace-nowrap leading-5 relative ${variant === "two" ? "text-[13.5px]" : "text-[13.6px]"} ${variant === "two" ? "text-chatgptcomcod-gray" : "text-chatgptcomwhite"}`}
      >
        {variant === "one" && <>Log in</>}

        {variant === "two" && <>Sign up</>}
      </div>
    </div>
  );
};

Component4.propTypes = {
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
};
