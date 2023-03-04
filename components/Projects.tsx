import React from "react"
import { motion } from "framer-motion"
import { ProjectType } from "../types"
import { urlFor } from "../sanity"

type Props = {
  projects: ProjectType[]
}

const Projects = ({ projects }: Props) => {
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
      className="h-screen relative flex justify-center items-center"
    >
      <h3 className="absolute ml-[20px] top-24 tracking-[20px] text-2xl text-gray-500 uppercase">
        Projects
      </h3>
      <div className="bg-[#F7AB0A]/40 w-full h-[400px] -skew-y-12 absolute top-[25%]" />
      <div
        className="overflow-x-scroll flex w-full scrollbar
        z-10
        snap-x snap-mandatory py-20 scroll-smooth
       scrollbar-hide"
      >
        {projects.map((prj, i) => (
          <div
            key={prj._id}
            className="flex flex-col pt-20 items-center space-y-5 snap-center w-screen flex-shrink-0"
          >
            <img
              src={urlFor(prj.image).url()}
              className="object-cover w-[300px] h-[180px] md:w-[500px] md:h-[300px] rounded-lg"
            />
            <div className="flex flex-col text-center space-y-5 px-4">
              <h4 className="font-semibold sm:text-3xl text-2xl">
                <span className="uppercase underline decoration-[#F7AB0A]">
                  Case of study {i + 1} of 4:
                </span>{" "}
                {prj.title}
              </h4>
              <p className="xsm:text-lg text-md max-w-xl">
                {prj.description}{" "}
                {prj.technologies?.map((tech, i) => {
                  if (i < prj.technologies.length - 1) {
                    return `${tech.title}, `
                  }
                  return `${tech.title}.`
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
