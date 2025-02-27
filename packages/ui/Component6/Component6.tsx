import PropTypes from "prop-types";
import React from "react";
import { Component } from "../Component/Component";

interface Props {
  variant: "two" | "three" | "four" | "one" | "five" | "six";
  hover: boolean;
  className: any;
}

export const Component6 = ({
  variant,
  hover,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-[#0000001a] h-[42px] rounded-full relative ${variant === "one" ? "w-[84px]" : (variant === "two") ? "w-[127px]" : ["five", "three"].includes(variant) ? "w-[148px]" : variant === "four" ? "w-[117px]" : ""} ${variant === "six" ? "inline-flex" : ""} ${variant === "six" ? "items-center" : ""} ${variant === "six" ? "pt-[7.5px] pb-[10.5px] px-[13px]" : ""} ${className}`}
    >
      {["five", "four", "one", "three", "two"].includes(variant) && (
        <>
          <Component
            className="!left-[13px] !top-3"
            variant={
              variant === "two"
                ? "eight"
                : variant === "three"
                  ? "nine"
                  : variant === "four"
                    ? "ten"
                    : variant === "five"
                      ? "eleven"
                      : "seven"
            }
          />
          <div
            className={`left-[39px] top-1.5 text-chatgptcomdove-gray absolute h-6 whitespace-nowrap ${variant === "four" ? "font-chatgpt-com-inter-regular" : "[font-family:'Inter-Regular',Helvetica]"} ${variant === "one" ? "w-[33px]" : (variant === "two") ? "w-[76px]" : variant === "four" ? "w-[65px]" : "w-24"} ${variant === "four" ? "tracking-[var(--chatgpt-com-inter-regular-letter-spacing)]" : "tracking-[0]"} ${variant === "four" ? "[font-style:var(--chatgpt-com-inter-regular-font-style)]" : ""} ${variant === "two" ? "text-[13.2px]" : (variant === "three") ? "text-[13px]" : variant === "four" ? "text-[length:var(--chatgpt-com-inter-regular-font-size)]" : "text-[12.9px]"} ${variant === "four" ? "font-[number:var(--chatgpt-com-inter-regular-font-weight)]" : "font-normal"} ${variant === "four" ? "leading-[var(--chatgpt-com-inter-regular-line-height)]" : "leading-6"}`}
          >
            {variant === "one" && <>Code</>}

            {variant === "two" && <>Make a plan</>}

            {variant === "three" && <>Summarize text</>}

            {variant === "four" && <>Get advice</>}

            {variant === "five" && <>Analyze images</>}
          </div>
        </>
      )}

      {variant === "six" && (
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-chatgptcomdove-gray text-[13.7px] tracking-[0] leading-6 whitespace-nowrap">
          More
        </div>
      )}
    </div>
  );
};

Component6.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "four", "one", "five", "six"]),
  hover: PropTypes.bool,
};
