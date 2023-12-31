/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { Fragment } from "react";
import toast from "react-hot-toast";
import type { Toast as ToastObject } from "react-hot-toast";
import type { VariantProps } from "@stitches/react";
import tw, { styled } from "twin.macro";
import Transition from "./Transition";

const ButtonContainer = styled("div", tw`border-l border-gray-200`);

const ToastContainer = styled("div", {
  ...tw`flex w-full max-w-md bg-white rounded border shadow`,

  variants: {
    type: {
      notification: {
        [`&, & ${ButtonContainer}`]: tw`border-gray-200`,
      },
      success: {
        [`&, & ${ButtonContainer}`]: tw`border-green-200`,
        "& h1": tw`text-green-600`,
      },
      error: {
        [`&, & ${ButtonContainer}`]: tw`border-red-200`,
        "& h1": tw`text-red-600`,
      },
    },
  },
});

export type ToastType = Extract<
  VariantProps<typeof ToastContainer>["type"],
  string
>;
type Props = {
  t: ToastObject;
  title: string;
  description: string;
  type?: ToastType;
};

const ToastNotifs = ({
  t,
  title,
  description,
  type = "notification",
}: Props) => (
  <Transition
    as={Fragment}
    show={t.visible}
    appear
    enter={tw`duration-200 ease-out`}
    enterFrom={tw`opacity-0 scale-95`}
    leave={tw`duration-150 ease-in`}
    leaveTo={tw`opacity-0 scale-95`}
  >
    <div>
      <ToastContainer type={type}>
        <div tw="flex-1 flex flex-col px-4 py-3">
          <h1 tw="font-semibold">{title}</h1>
          <p tw="text-sm">{description}</p>
        </div>
        <ButtonContainer>
          <button
            type="button"
            tw="
            w-12 h-full py-3 px-2
            rounded-xl
            flex items-center justify-center
            text-purple-600 text-sm font-medium rounded-r
            hover:(text-purple-600 bg-slate-50)
            focus-visible:(outline-none ring-2 ring-purple-600)
          "
            onClick={() => toast.dismiss(t.id)}
          >
            X
          </button>
        </ButtonContainer>
      </ToastContainer>
    </div>
  </Transition>
);

export default ToastNotifs;
