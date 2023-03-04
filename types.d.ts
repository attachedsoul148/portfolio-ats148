interface SanityDataType {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface ImageType {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface PageInfoType extends SanityDataType {
  _type: "pageInfo"
  aboutPic: ImageType
  address: string
  bgInfo: string
  email: string
  heroImage: ImageType
  name: string
  phoneNumber: string
  role: number
  socials: SocialType[]
}

export interface SocialType extends SanityDataType {
  _type: "social"
  link: string
  title: string
}

export interface SkillType extends SanityDataType {
  _type: "skill"
  tier: string
  title: string
  image: ImageType
}

export interface ExperienceType extends SanityDataType {
  _type: "experience"
  company: string
  dateStarted: string
  dateFinished: string
  isCurrentPlaceOfWork: boolean
  jobImage: ImageType
  jobTitle: string
  responsibilities: string[]
  technologies: SkillType[]
}

export interface ProjectType extends SanityDataType {
  _type: "project"
  description: string
  title: string
  linkToBuild? : string
  image : ImageType
  technologies: SkillType[]
}
