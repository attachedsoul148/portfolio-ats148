import React from "react"
import { motion } from "framer-motion"

type Props = {}

const Circles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="w-[200px] h-[200px] border border-[#333333] rounded-full absolute animate-ping mt-52"></div>
      <div className="w-[300px] h-[300px] border border-[#333333] rounded-full absolute mt-52"></div>
      <div className="w-[500px] h-[500px] border border-[#333333] rounded-full absolute mt-52"></div>
      <div className="w-[650px] h-[650px] border border-[#F7AB0A] rounded-full absolute animate-pulse mt-52"></div>
      <div className="w-[800px] h-[800px] border border-[#333333] rounded-full absolute mt-52"></div>
    </motion.div>
  )
}

export default Circles
