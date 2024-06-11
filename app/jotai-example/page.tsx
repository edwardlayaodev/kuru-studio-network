"use client";
import { useAtom } from "jotai";
import { msgAtom } from "../_data/atoms";
import { useState } from "react";

export default function JotaiExamplePage() {
  const [msg, setMsg] = useAtom(msgAtom);
  const [input, setInput] = useState("");

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
    </div>
  );
}
