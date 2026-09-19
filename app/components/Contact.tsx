import { CONTACT, SOCIAL_LINKS } from '@constants/index'

const Contact = () => {
    return (
        <main id='contact'>
            <div className='mx-auto max-w-6xl text-white'>
                <p className='my-10 text-center text-3xl lg:text-8xl'>
                    Get in Touch
                </p>
                <p className='p-4 text-center text-xl'>{CONTACT.text}</p>
                <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl'>{CONTACT.email}</p>
                <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl'>{CONTACT.phone}</p>
            </div>
            <div className='mt-20 flex items-center justify-center gap-8'>
                {SOCIAL_LINKS.map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className='text-2xl text-gray-300 transition-colors hover:text-lime-300'>
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className='mb-20 mt-8 text-center text-gray-400'>&copy; 2026. All rights reserved.</p>
        </main>
    )
}

export default Contact