import Image from 'next/image'
import img from '@public/me2.jpeg'
import { LuImport } from 'react-icons/lu'

const Hero = () => {
    return (
        <main className='flex flex-col items-center justify-center'>
            <h1 className='mt-10 overflow-hidden text-[10vw] font-semibold uppercase leading-none text-white'>
                <span className='hover:text-lime-300 transition-colors duration-100'>Arideep</span>
                <br />
                <span className='hover:text-lime-300 transition-colors duration-100'>Nandi</span>
            </h1>
            <div className='mt-8'>
                <a
                    href="/Resume.pdf"
                    target='_blank'
                    rel='noopener noreferrer'
                    download
                    className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400'
                >
                    <span className='font-semibold'>Resume.pdf</span>
                    <LuImport className='ml-2' />
                </a>
            </div>
            <div className='w-full'>
                <Image src={img} alt="Arideep Nandi" className='mt-8 h-96 w-full object-cover' />
            </div>
        </main>
    )
}

export default Hero