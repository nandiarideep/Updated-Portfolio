'use client'
import { MARQUEE_TEXT } from '@constants/index'
import { motion } from 'framer-motion'

const Marquee: React.FC = () => {
    const repeatedText = [...MARQUEE_TEXT, ...MARQUEE_TEXT] // duplicate for seamless loop

    return (
        <main className='mt-2 w-full bg-lime-300 text-black lg:py-6 overflow-hidden'>
            <motion.div
                className='flex whitespace-nowrap'
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    ease: 'linear',
                    duration: 20,
                    repeat: Infinity,
                }}
            >
                {repeatedText.map((item, i) => (
                    <h1
                        key={i}
                        className='py-2 text-3xl font-bold tracking-tighter lg:text-7xl mr-2'
                    >
                        {item.name},
                    </h1>
                ))}
            </motion.div>
        </main>
    )
}

export default Marquee