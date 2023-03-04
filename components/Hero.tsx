import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { urlFor } from "../sanity"
import { PageInfoType } from "../types"
import Circles from "./Circles"

type Props = {
  pageInfo: PageInfoType
}

const Hero = ({ pageInfo }: Props) => {
  const [text, _] = useTypewriter({
    words: [
      `My name is ${pageInfo.name}`,
      "Man-who-loves-dota.tsx",
      "But-want-a-job-more.ts",
      "<HochuRobotu /> ",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
      <Circles />
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 z-10">
          <Image
            src={urlFor(pageInfo.heroImage).url()}
            alt="me"
            fill
            className="rounded-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col z-10 items-center space-y-3">
          <h2 className="text-gray-500 text-sm tracking-[10px] md:tracking-[15px] uppercase">
            {pageInfo.role}
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="font-medium">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="flex items-center">
            <Link href="#about">
              <button className="heroBtn">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroBtn">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroBtn">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroBtn">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
