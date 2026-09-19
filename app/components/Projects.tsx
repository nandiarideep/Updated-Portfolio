import { PROJECTS_DATA } from '@constants/index'
import Image from 'next/image'

const Projects = () => {
    return (
        <main className='p-8' id='projects'>
            <h2 className='mb-10 text-center text-3xl lg:text-8xl'>My Work</h2>
            <div className='columns-1 gap-10 md:columns-2 lg:columns-3'>
                {PROJECTS_DATA.map((project) => (
                    <a key={project.id} href={project.link} target='_blank' rel='noopener noreferrer' className='block hover:scale-102 transition-transform duration-300'>
                        <div className='relative mb-4 overflow-hidden rounded-lg'>
                            <Image src={project.image} alt={project.name} width={400} height={300} className='h-auto w-full object-cover' />
                            <div className='absolute bottom-0 left-0 right-0 m-8 p-8 text-white backdrop-blur-md'>
                                <h3 className='text-lg 3xl'>{project.name}</h3>
                                <p className='max-w-xs text-lg'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    )
}

export default Projects