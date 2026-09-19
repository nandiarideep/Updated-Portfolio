import { ABOUT_TEXT } from '@constants/index'

const About = () => {
    return (
        <main id='about' className='text-white'>
            <h2 className='mt-10 text-center text-3xl lg:text-8xl'>About Me</h2>
            <div className='flex items-center justify-center'>
                <p className='m-8 max-w-6xl text-3xl lg:text-6xl text-center'>
                    {ABOUT_TEXT.name}
                </p>
            </div>
        </main>
    )
}

export default About