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
