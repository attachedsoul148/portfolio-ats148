import type { GetStaticProps, NextPage } from "next"
import { groq } from "next-sanity"
import Head from "next/head"
import Link from "next/link"
import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { client } from "../sanity"
import {
  ExperienceType,
  PageInfoType,
  ProjectType,
  SkillType,
  SocialType,
} from "../types"

interface Props {
  skills: SkillType[]
  experiences: ExperienceType[]
  pageInfo: PageInfoType
  socials: SocialType[]
  projects: ProjectType[]
}

const Home: NextPage<Props> = ({
  skills = [],
  socials = [],
  projects = [],
  pageInfo = {} as PageInfoType,
  experiences = [],
}) => {
  return (
    <div
      className="text-white 
    bg-[rgb(36,36,36)] scrollbar scrollbar-track-gray-400/20
         scrollbar-thumb-[#F7AB0A] scrollbar-w-[10px] scrollbar-h-[10px]
    snap-y h-screen snap-mandatory overflow-x-hidden overflow-y-auto z-0 scroll-smooth"
    >
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contactMe" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <div className="sticky p-2 bottom-0 w-full flex justify-center">
        <Link href="#hero">
          <img
            src="/bleach.jpg"
            className="w-10 h-10 rounded-full object-cover grayscale
       hover:grayscale-0 transition-all duration-50 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const expQuery = groq`
*[_type == 'experience']{
    ...,
    technologies[]->
  }
`
  const pageInfoQuery = groq`
*[_type == 'pageInfo'][0]{
  ...,
  socials[]->
}
`
  const projQuery = groq`
*[_type == 'project']{
    ...,
    technologies[]->
  }
`
  const skillsQuery = groq`
*[_type == 'skill']
`
  const socQuery = groq`
*[_type == 'social']
`

  const socials: SocialType[] = await client.fetch(socQuery)
  const pageInfo: PageInfoType = await client.fetch(pageInfoQuery)
  const skills: SkillType[] = await client.fetch(skillsQuery)
  const experiences: ExperienceType[] = await client.fetch(expQuery)
  const projects: ProjectType[] = await client.fetch(projQuery)

  return {
    props: {
      experiences,
      pageInfo,
      skills,
      socials,
      projects,
    },
    revalidate: 15,
  }
}
