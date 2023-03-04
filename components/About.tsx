import React from "react"
import { motion } from "framer-motion"
import { PageInfoType } from "../types"
import { urlFor } from "../sanity"

type Props = {
  pageInfo: PageInfoType
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col md:flex-row justify-center
       items-center px-5 md:space-x-10 space-y-5 md:spacee-y-0 pt-[100px] sm:pt-[0px]"
    >
      <h3 className="absolute ml-[20px] top-24 tracking-[20px] text-2xl text-gray-500 uppercase">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo.aboutPic).url()}
        className="w-32 h-32 xsm:w-48 xsm:h-48 rounded-full md:w-64 md:h-64
         md:rounded-lg lg:w-[300px] lg:h-[360px] object-cover object-top"
      />
      <div className="flex flex-col max-w-2xl text-center space-y-4 md:text-left">
        <h2 className="md:text-3xl font-medium xsm:text-2xl text-xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h2>
        <p className="text-sm sm:text-md leading-6">{pageInfo.bgInfo}</p>
      </div>
    </motion.div>
  )
}

export default About
