"use client";
import { ReactNode } from "react";

import { atomWithReducer } from "jotai/utils";

interface IModalState {
  open: boolean;
  content: ReactNode;
}

const modalState: IModalState = {
  open: false,
  content: null,
};

const modalReducer = (prev: any, action: any) => {
  if (action.type == "open")
    return {
      ...prev,
      open: true,
      content: action.payload,
    };
  if (action.type == "close")
    return {
      ...prev,
      open: false,
      content: null,
    };
};

export const modalReducerAtom = atomWithReducer(modalState, modalReducer);
