'use client'
import { AnimatePresence, motion } from 'framer-motion'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { LINKS } from '@constants/index'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = (): void => {
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const containerVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: {
            opacity: 1, y: '0%',
            transition: { staggerChildren: 0.1 },
        },
    }

    const linkvariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <>
            <nav className='fixed right-0 z-30 top-0 p-4'>
                <button onClick={toggleMenu} className='rounded-md p-2'>
                    {isOpen ? (
                        <FaTimes className='w-6 h-6 text-white cursor-pointer hover:text-lime-300' />
                    ) : (
                        <FaBars className='w-6 h-6 text-white cursor-pointer hover:text-lime-300' />
                    )}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className='fixed inset-0 bg-black text-white bg-opacity-50 flex items-center justify-center z-20'
                    >
                        <ul className='space-y-6 text-3xl'>
                            {LINKS.map((link) => (
                                <motion.li 
                                    key={link.id}
                                    variants={linkvariants}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={toggleMenu}
                                        className='text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl'
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar