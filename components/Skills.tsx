import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { SkillType } from "../types"

type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
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
      className="min-h-screen relative flex flex-col items-center justify-center space-y-10"
    >
      <h3 className="absolute ml-[20px] top-24 tracking-[20px] text-2xl text-gray-500 uppercase">
        Skills
      </h3>
      <h3 className="absolute ml-[3px] top-[100px] tracking-[3px] text-sm text-center text-gray-500 uppercase px-2">
        Hover over a skill to see my profieciency tier according to my scale
      </h3>

      <div className="grid grid-cols-4 xl:grid-cols-5 gap-2 xl:gap-3 pt-20 sm:pt-0">
        {skills.map((skill, i) => (
          <Skill
            skill={skill}
            key={skill._id}
            directionLeft={i > skills.length / 2}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
