import PropTypes from "prop-types";
import React from "react";
import { Component } from "../Component/Component";

interface Props {
  variant: "one";
  hover: boolean;
  className: any;
}

export const VariantHoverWrapper = ({
  variant,
  hover,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col h-10 items-start p-2 relative rounded-lg ${className}`}
    >
      <Component
        className="!relative !left-[unset] !top-[unset]"
        variant="one"
      />
    </div>
  );
};

VariantHoverWrapper.propTypes = {
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
};
