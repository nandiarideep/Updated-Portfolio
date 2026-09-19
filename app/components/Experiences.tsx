import { EXPERIENCES } from '@constants/index'
import Image from 'next/image'

const Experiences = () => {
    return (
        <main id='experience'>
            <h2 className='my-10 text-center text-3xl lg:text-8xl'>Work Experience</h2>
            <div className='mx-auto max-w-6xl'>
                {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className='mb-20 mx-8'>
                        <section className='flex items-start gap-4'>
                            <Image src={exp.image} alt="Company" width={40} height={40} className='h-10 w-10 object-cover rounded-lg' />
                            <div className='flex-1'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='font-medium lg:text-2xl'>{exp.company} <span className='lg:block md:block hidden text-lime-300 lg:text-xl'>- {exp.location}</span></h2>
                                    <p className='lg:text-xl'>{exp.year}</p>
                                </div>
                                <p className='py-4 tracking-wide lg:text-xl'>{exp.role}</p>
                                <p className='font-sans text-gray-400 font-semibold'>{exp.description}</p>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Experiences