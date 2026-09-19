export type Experiences = {
    id: string
    company: string
    location: string
    year: number | string
    role: string
    description: string
    image: string
}

export type AboutText = {
    id: string
    name: string
}

export type LinkType = {
    id: string
    name: string
}

export type MarqueeType = {
    id: string
    name: string
}

export type ProjectType = {
    id: string
    name: string
    image: string
    link: string
    description: string
}

export type ContactType = {
    id: string
    text: string,
    email: string,
    phone: string
}

export type SocialLinkType = {
    id: string
    icon: React.ReactNode
    href: string
}