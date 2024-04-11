export type announcementInfo = {
  description: string
  buttonInfo: string
}

export type navLinks = {
  label: string
  href: string
}

export type NavigationSection = {
  path: string
  pathName: string
  navLinks: navLinks[]
}
export type IProjects = {
  title: string
  href: string
  image: string
  description: string
}
export type IBlogs = {
  title: string
  image: string
  isSponsored:boolean
  description: string
}
