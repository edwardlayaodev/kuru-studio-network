"use client";
import { User } from "firebase/auth";
import { atom } from "jotai";

export const msgAtom = atom("hello world");

export const userAtom = atom<User | null>(null);
