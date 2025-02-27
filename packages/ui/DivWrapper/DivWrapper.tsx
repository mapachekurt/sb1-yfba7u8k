import PropTypes from "prop-types";
import React from "react";
import { Component } from "../Component/Component";

interface Props {
  variant: "one";
  hover: boolean;
  className: any;
}

export const DivWrapper = ({
  variant,
  hover,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[117px] h-10 rounded-lg overflow-hidden ${className}`}
    >
      <div className="absolute w-[71px] h-7 top-1 left-3 [font-family:'Inter-Regular',Helvetica] font-normal text-chatgptcomscorpion text-[16.2px] text-center tracking-[0] leading-7 whitespace-nowrap">
        ChatGPT
      </div>

      <Component className="!left-[87px] !top-[11px]" variant="two" />
    </div>
  );
};

DivWrapper.propTypes = {
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
};
