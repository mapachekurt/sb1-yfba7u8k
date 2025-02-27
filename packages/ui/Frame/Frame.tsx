"use client";

import React from "react";
import { Component4 } from "../Component4/Component4";
import { Component5 } from "../Component5/Component5";
import { Component6 } from "../Component6/Component6";
import { DivWrapper } from "../DivWrapper/DivWrapper";
import { VariantHoverWrapper } from "../VariantHoverWrapper/VariantHoverWrapper";

export const Frame = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-chatgptcomwhite-white">
      <header className="relative w-full h-14 bg-chatgptcomwhite flex items-center px-4">
        <div className="flex items-center">
          <VariantHoverWrapper
            className="!flex-[0_0_auto]"
            hover={false}
            variant="one"
          />
          <DivWrapper className="!w-[116.56px]" hover={false} variant="one" />
        </div>
        <div className="absolute right-4 flex gap-4">
          <Component4 className="!top-[9px]" hover={false} variant="one" />
          <Component4 className="!top-[9px]" hover={false} variant="two" />
        </div>
      </header>

      <main className="flex flex-col items-center w-full max-w-screen-md px-4">
        <h1 className="text-chatgptcomcod-gray text-center text-2xl font-semibold mt-16">
          What can I help with?
        </h1>

        <div className="relative w-full max-w-lg mt-6">
          <div className="flex items-center justify-between bg-white rounded-3xl border border-gray-200 shadow-md p-3">
            <div className="flex gap-2">
              <Component5 hover={false} variant="one" />
              <Component5 hover={false} variant="two" />
              <Component5 hover={false} variant="three" />
            </div>
            <Component5 hover={false} variant="four" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Component6 className="!w-[84.44px]" hover={false} variant="one" />
          <Component6 className="!w-[127.44px]" hover={false} variant="two" />
          <Component6 className="!w-[147.59px]" hover={false} variant="three" />
          <Component6 className="!w-[116.77px]" hover={false} variant="four" />
          <Component6 className="!w-[147.81px]" hover={false} variant="five" />
          <Component6 className="!w-[147.81px]" hover={false} variant="six" />
        </div>

        <footer className="text-center text-sm text-gray-500 mt-10">
          By messaging mapache, you agree to our{" "}
          <a href="#" className="text-black underline">
            Terms
          </a>{" "}
          and have read our{" "}
          <a href="#" className="text-black underline">
            Privacy Policy
          </a>
          .
        </footer>
      </main>
    </div>
  );
};
