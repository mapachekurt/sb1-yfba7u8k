import PropTypes from "prop-types";
import React from "react";
import { Component } from "../Component/Component";

interface Props {
  variant: "two" | "four" | "three" | "one";
  hover: boolean;
  className: any;
}

export const Component5 = ({
  variant,
  hover,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`h-9 rounded-full relative ${["one", "three", "two"].includes(variant) ? "border border-solid" : ""} ${["one", "three", "two"].includes(variant) ? "border-[#0000001a]" : ""} ${variant === "two" ? "w-[83px]" : (variant === "three") ? "w-[86px]" : variant === "four" ? "w-20" : "w-[78px]"} ${variant === "four" ? "bg-black" : ""} ${className}`}
    >
      <Component
        className={
          variant === "four" ? "!left-2 !top-1.5" : "!left-[9px] !top-[9px]"
        }
        variant={
          variant === "two"
            ? "four"
            : variant === "three"
              ? "five"
              : variant === "four"
                ? "six"
                : "three"
        }
      />
      <div
        className={`top-[3px] h-6 text-center whitespace-nowrap absolute ${variant === "three" ? "font-chatgpt-com-inter-medium" : (variant === "four") ? "font-chatgpt-com-inter-semi-bold" : "[font-family:'Inter-Regular',Helvetica]"} ${variant === "three" ? "w-[43px]" : (variant === "four") ? "w-8" : "w-[39px]"} ${variant === "one" ? "left-[27px]" : (variant === "four") ? "left-9" : "left-[31px]"} ${variant === "three" ? "tracking-[var(--chatgpt-com-inter-medium-letter-spacing)]" : (variant === "four") ? "tracking-[var(--chatgpt-com-inter-semi-bold-letter-spacing)]" : "tracking-[0]"} ${variant === "three" ? "[font-style:var(--chatgpt-com-inter-medium-font-style)]" : (variant === "four") ? "[font-style:var(--chatgpt-com-inter-semi-bold-font-style)]" : ""} ${variant === "two" ? "text-[11.8px]" : (variant === "three") ? "text-[length:var(--chatgpt-com-inter-medium-font-size)]" : variant === "four" ? "text-[length:var(--chatgpt-com-inter-semi-bold-font-size)]" : "text-xs"} ${variant === "four" ? "text-chatgptcomwhite" : "text-chatgptcomscorpion"} ${variant === "three" ? "font-[number:var(--chatgpt-com-inter-medium-font-weight)]" : (variant === "four") ? "font-[number:var(--chatgpt-com-inter-semi-bold-font-weight)]" : "font-normal"} ${variant === "three" ? "leading-[var(--chatgpt-com-inter-medium-line-height)]" : (variant === "four") ? "leading-[var(--chatgpt-com-inter-semi-bold-line-height)]" : "leading-6"}`}
      >
        {variant === "one" && <>Attach</>}

        {variant === "two" && <>Search</>}

        {variant === "three" && <>Reason</>}

        {variant === "four" && <>Voice</>}
      </div>
    </div>
  );
};

Component5.propTypes = {
  variant: PropTypes.oneOf(["two", "four", "three", "one"]),
  hover: PropTypes.bool,
};
