"use client";
import { useAtom } from "jotai";
import { msgAtom } from "../_data/atoms";
import { useState } from "react";
import { modalReducerAtom } from "../_data/modalState";
import Atom from "@atom";

export default function JotaiExamplePage() {
  const [msg, setMsg] = useAtom(msgAtom);
  const [input, setInput] = useState("");
  const [modal, dispatch] = useAtom(modalReducerAtom);

  const open = () => {
    // open a modal, payload will be the content of the modal
    dispatch({ type: "open", payload: <h1>TEST: This is a Modal</h1> });
  };

  return (
    <div>
      <h1>{msg}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMsg(input);
        }}
      >
        <input
          className="border"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
      <Atom.Button onClick={open}>Test Open Modal</Atom.Button>
    </div>
  );
}
