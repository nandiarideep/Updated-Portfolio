import { Experiences, AboutText, LinkType, MarqueeType, ProjectType, ContactType, SocialLinkType } from "../types";
import { FaGithub, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export const EXPERIENCES: Experiences[] = [
    {
        id: 'hexalytics',
        company: 'Hexalytics',
        location: 'Chennai, Tamil Nadu',
        year: 'Jan 2026 - Sep 2026',
        role: 'Associate Data Visualization Enthusiast',
        description: 'Developed & collaborated across 3 different client projects, contributing to frontend development, feature implementation, API integration, debugging, and maintenance using React, Next.js, TypeScript, and modern UI libraries, Developed and delivered 6+ application screens and key features, while also resolving issues across multiple existing modules, Raised and contributed to 200+ Pull Requests covering new feature development, bug fixes, UI enhancements, API integrations, and code improvements, while collaborating with the team through code reviews and testing.',
        image: '/hex.jpg',
    },
    {
        id: 'eve',
        company: 'Eve Technologies',
        location: 'Kolkata, West Bengal',
        year: 'Sep 2024 - Dec 2025',
        role: 'Frontend Developer',
        description: 'Designed and developed a Saas-based React HRMS dashboard, improving HR data accessibility for blue-collar operations, Integrated REST APIs in collaboration with backend teams, Integrated REST APIs in collaboration with backend teams, improving data reliability and reducing integration issues, improving data reliability and reducing integration issues, Migrated three production applications (FOS, HRHO, WEBMASTER) from Angular to React, improving performance andreducing technical debt.',
        image: '/eve.jpg',
    },
    {
        id: 'navsoft',
        company: 'Navsoft',
        location: 'Kolkata, West Bengal',
        year: 'Jan 2024 - Feb 2024',
        role: 'Frontend Developer Intern',
        description: 'Worked on Python fundamentals, data structures, and efficient coding practices, Gained hands-on experience with Flask for web application development.',
        image: '/nav.png',
    },
    {
        id: 'imeet',
        company: 'iMeet Technologies',
        location: 'Mathura, Uttar Pradesh',
        year: 'Jun 2023 - Sep 2023',
        role: 'Frontend Developer Intern',
        description: 'Got privy to the Html, CSS, JavaScript & React fundamentals, Developed a responsive e-commerce website using React, Implemented state management using Zustand for efficient data handling.',
        image: '/ime.jpg',
    }
]

export const ABOUT_TEXT: AboutText = {
    id: "about",
    name: (
        <>
            Hello! I’m Arideep, a passionate software developer and gaming content
            creator with a knack for crafting engaging digital experiences. With a
            strong foundation in{" "}
            <span className="bg-lime-300 px-1.5 py-0.5 text-black mx-1 inline-block rounded-sm">
                JavaScript, React, and Next.js
            </span>
            , I enjoy building dynamic web applications that combine functionality
            with clean, modern design.

            <br />
            <br />

            Currently, I’m taking the next step in my development journey by
            expanding into{" "}
            <span className="bg-lime-300 px-1.5 py-0.5 text-black mx-1 inline-block rounded-sm">
                full-stack development
            </span>
            . I’m actively learning and working with{" "}
            <span className="bg-lime-300 px-1.5 py-0.5 text-black mx-1 inline-block rounded-sm">
                Node.js, Express.js, MongoDB, and Mongoose
            </span>
            , along with other backend technologies to strengthen my understanding of
            building complete, scalable applications — from designing user
            interfaces to developing APIs, managing databases, and handling
            server-side logic.

            <br />
            <br />

            Beyond development, I’m also a gaming YouTuber, where I share gameplay,
            insights, and creative content with a growing audience. My journey is
            driven by curiosity and a constant desire to learn—whether it’s exploring
            new frameworks, improving user experiences, understanding backend
            architecture, or leveling up my content creation skills.

            <br />
            <br />

            When I’m not coding or gaming, you’ll find me experimenting with new
            technologies, building projects, refining my craft, or exploring
            exciting ideas.{" "}
            <span className="bg-lime-300 px-1.5 py-0.5 text-black mx-1 inline-block rounded-sm">
                I’m always looking for opportunities to learn, build, and grow as a
                developer.
            </span>{" "}
            Let’s connect and create something amazing together!
        </>
    ),
};

export const LINKS: LinkType[] = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
]

export const MARQUEE_TEXT: MarqueeType[] = [
    { id: 'react', name: 'React' },
    { id: 'nextjs', name: 'Next.js' },
    { id: 'redux', name: 'Redux' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'tailwindcss', name: 'Tailwind CSS' },
    { id: 'shadcn', name: 'ShadCN' },
    { id: 'materialui', name: 'Material UI' },
    { id: 'nodejs', name: 'Node' },
    { id: 'express', name: 'Express' },
    { id: 'mongodb', name: 'MongoDB' },
    { id: 'firebase', name: 'Firebase' },
    { id: 'postman', name: 'Postman' },
    { id: 'jira', name: 'Jira' }
]

export const PROJECTS_DATA: ProjectType[] = [
    { id: 'project1', name: 'Trek Manthan', link: 'https://github.com/nandiarideep/Trek-Manthan', image: '/project1.webp', description: 'A fullstack responsive travel website & an insights dashboard built with React and Next.js.' },
    { id: 'project2', name: 'Codebase', link: 'https://github.com/nandiarideep/Codebase-React', image: '/project2.webp', description: 'A modern codebase management tool built with React and Vite.' },
    { id: 'project3', name: 'Taskify', link: '', image: '/project4.webp', description: 'A fullstack task management application built with React and Vite' },
    // { id: 'project4', name: 'Project 4', link: 'https://example.com/project4', image: '/project4.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // { id: 'project5', name: 'Project 5', link: 'https://example.com/project5', image: '/project5.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
]

export const CONTACT: ContactType = {
    id: 'contact',
    text: 'I am always excited and open to new opportunities and collaborations. Whether you have a specific project in mind or just want to connect, Id love to hear from you. Feel free to reach out to discuss how we can work together to create something amazing.',
    phone: '+ 91 - 7595932236',
    email: 'nandiarideep@gmail.com'
}

export const SOCIAL_LINKS: SocialLinkType[] = [
    { id: 'github', icon: <FaGithub />, href: 'https://github.com/nandiarideep' },
    { id: 'linkedin', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/arideep-nandi/' },
    { id: 'youtube', icon: <FaYoutube />, href: 'https://www.youtube.com/@nandybhai97' },
    { id: 'facebook', icon: <FaFacebook />, href: 'https://www.facebook.com/arideep.nandi' },
    { id: 'instagram', icon: <FaInstagram />, href: 'https://instagram.com/arideep12345' },
]