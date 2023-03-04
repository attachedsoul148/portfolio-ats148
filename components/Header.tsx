import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { SocialType } from "../types"

type Props = {
  socials: SocialType[]
}

const Header = ({ socials }: Props) => {
  const router = useRouter()
  return (
    <header className="z-50 bg-[rgb(36,36,36)] w-full sticky -top-[1px]">
      <div className="flex max-w-6xl p-5 justify-between items-center mx-auto">
        <motion.div
          initial={{
            x: -500,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.link}
              bgColor="transparent"
              fgColor="gray"
              className="cursor-pointer"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center"
        >
          <SocialIcon
            onClick={() => router.push("/#contactMe")}
            network="email"
            bgColor="transparent"
            fgColor="gray"
            className="cursor-pointer"
          />
          <p className="uppercase hidden md:inline text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
