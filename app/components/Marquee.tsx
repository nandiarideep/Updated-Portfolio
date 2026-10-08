'use client'
import { MARQUEE_TEXT } from '@constants/index'
import { motion } from 'framer-motion'
import { FaCircle } from 'react-icons/fa'

const Marquee = () => {
    const repeatedText = [...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT]

    return (
        <main className='mt-2 w-full overflow-hidden bg-lime-300 text-black lg:py-6'>
            <motion.div
                className='flex w-max items-center whitespace-nowrap'
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    ease: 'linear',
                    duration: 70,
                    repeat: Infinity,
                }}
            >
                {repeatedText.map((item, i) => (
                    <div key={`${item.id}-${i}`} className='flex items-center shrink-0'>
                        <h1 className='py-2 text-3xl font-bold tracking-tighter lg:text-7xl'>
                            {item.name}
                        </h1>
                        {i !== repeatedText.length - 1 && (
                            <FaCircle className='mx-5 text-[1rem] opacity-80' />
                        )}
                    </div>
                ))}
            </motion.div>
        </main>
    )
}

export default Marquee