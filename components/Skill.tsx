import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SkillType } from "../types"
import { urlFor } from "../sanity"

type Props = {
  directionLeft?: boolean
  skill: SkillType
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="relative group">
      <motion.img
        initial={{
          x: directionLeft ? 100 : -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        src={urlFor(skill.image).url()}
        className="w-16 h-16 sm:w-24 sm:h-24 xl:w-28 xl:h-28 cursor-pointer group-hover:grayscale 
        transition-all duration-200 border border-gray-500 rounded-full object-cover"
      />
      <div
        className="bg-white/40 opacity-0 group-hover:opacity-100 cursor-pointer
      transition-all duration-200
      absolute w-full h-full rounded-full top-0 flex items-center justify-center"
      >
        <p className="text-3xl text-black font-bold">{skill.tier}</p>
      </div>
    </div>
  )
}

export default Skill
