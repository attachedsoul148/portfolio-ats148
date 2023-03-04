import React, { useRef } from "react"
import { motion } from "framer-motion"
import { ExperienceType } from "../types"
import { urlFor } from "../sanity"

type Props = {
  exp: ExperienceType
}

const ExpCard = ({ exp }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      onClick={(e) => ref.current?.scrollIntoView()}
      className="snap-center px-10 py-5 flex flex-col space-y-2 rounded-lg w-[350px] sm:w-[500px] 
      md:w-[600px] xl:w-[900px] flex-shrink-0
     cursor-pointer bg-[#292929] opacity-40
     hover:opacity-100 transition-opacity duration-200"
    >
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(exp.jobImage).url()}
        className="w-[100px] h-[100px] sm:w-32 sm:h-32 rounded-full object-cover mx-auto"
      />

      <h1 className="text-xl md:text-3xl">{exp.jobTitle}</h1>

      <h2 className="font-bold text-md md:text-xl">{exp.company}</h2>

      <div className="flex space-x-2">
        {exp.technologies.map((tech) => (
          <img
            src={urlFor(tech.image).url()}
            key={tech._id}
            alt="tech"
            className="w-10 h-10 rounded-full"
          />
        ))}
      </div>

      <p className="text-sm md:text-md text-gray-500 uppercase">
        {exp.dateStarted} - {exp.dateFinished}
      </p>

      <ul className="list-disc ml-5 space-y-3 text-sm md:text-md">
        {exp.responsibilities.map((resp) => (
          <li key={resp}>{resp}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExpCard
