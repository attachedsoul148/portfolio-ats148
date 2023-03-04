import React from "react"
import { motion } from "framer-motion"
import ExpCard from "./ExpCard"
import { ExperienceType } from "../types"

type Props = {
  experiences: ExperienceType[]
}

const Experience = ({ experiences }: Props) => {
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
      className="h-screen flex flex-col relative items-center justify-center"
    >
      <h3 className="absolute ml-[20px] top-24 tracking-[20px] text-2xl text-gray-500 uppercase">
        Experience
      </h3>

      <div
        className="flex space-x-4 p-4 pt-32 pb-10 scrollbar scrollbar-thumb-[#F7AB0A] scrollbar-h-[10px] 
      overflow-x-scroll snap-mandatory snap-x w-full lg:max-w-6xl scroll-smooth scrollbar-track-gray-400/20"
      >
        {experiences.map((exp) => (
          <ExpCard key={exp._id} exp={exp} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
