import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Yan Christofer",
      "Lifetime-Learner.tsx",
      "<Resourceful />",
      ".achiever",
    ],
    loop: true,
    delaySpeed: 1800,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.wired.com/photos/5cbe4d8fbad1452e4c6ce4b3/125:94/w_2375,h_1786,c_limit/ElonMusk-tranpso-final-1130611572.jpg"
        alt="lol"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
