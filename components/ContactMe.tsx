import React from "react"
import { motion } from "framer-motion"
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"
import { useForm } from "react-hook-form"
import { PageInfoType } from "../types"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {
  pageInfo: PageInfoType
}

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const onSubmit = handleSubmit((formData) => {
    window.location.href = `mailto:chizassawurdesanchi@gmail.com?subject=${formData.subject}&body=Hi , my name is ${formData.name}. {formData.message}`
    reset()
  })

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
      className="h-screen flex flex-col relative items-center justify-center space-y-5"
    >
      <h3 className="absolute ml-[20px] top-24 tracking-[20px] text-2xl text-gray-500 uppercase text-center">
        Contact me
      </h3>

      <div className="flex flex-col pt-[60px] gap-4">
        <h1 className="text-lg xsm:text-xl sm:text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]">Let's talk.</span>
        </h1>

        <div className="flex flex-col space-y-2 items-center">
          <div className="flex space-x-5 items-center">
            <DevicePhoneMobileIcon className="contactIc" />
            <p className="text-md sm:text-lg">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex space-x-5 items-center">
            <EnvelopeIcon className="contactIc" />
            <p className="text-md sm:text-lg">{pageInfo.email}</p>
          </div>
          <div className="flex space-x-5 items-center">
            <MapPinIcon className="contactIc" />
            <p className="text-md sm:text-lg">{pageInfo.address}</p>
          </div>
        </div>

        <form className="flex flex-col space-y-1" onSubmit={onSubmit}>
          <div className="flex space-x-1">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput flex-1"
            />
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="Email"
              className="contactInput flex-1"
            />
          </div>

          <input
            type="text"
            {...register("subject", { required: true })}
            className="contactInput"
            placeholder="Subject"
          />

          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput resize-none"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-[#F7AB0A] font-semibold text-md 
        sm:text-lg py-2 sm:py-4 cursor-pointer rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactMe
