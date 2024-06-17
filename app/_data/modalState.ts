"use client";
import { ReactNode } from "react";

import { atomWithReducer } from "jotai/utils";

interface IModalState {
  open: boolean;
  content: ReactNode | null;
}

const modalState: IModalState = {
  open: false,
  content: null,
};

const modalReducer = (prev: any, action: any) => {
  // content is the content of the modal, for ex, a login form
  // this will be passed on reducer action.payload
  if (action.type == "open")
    return {
      open: true,
      content: action.payload,
    };
  if (action.type == "close")
    return {
      open: false,
      content: null,
    };
};

export const modalReducerAtom = atomWithReducer(modalState, modalReducer);
