
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'






const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false);



    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <NavLink
                    to='/'
                    aria-label='Verifying The Intelligence'
                    title='Verifying The Intelligence'
                    className='inline-flex items-center'
                >
                    <img className='w-10' src="data:image/png;base64,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" alt="" />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Verifying The Intelligence
                    </span>
                </NavLink >
                <ul className='flex items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/home'
                            aria-label='Home'
                            title='Home'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Home
                        </NavLink >
                    </li>
                    <li onClick={() => setDropDown(prev => !prev)} className='flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer  '>
                        Topics  <ChevronDoubleDownIcon className="h-5 w-5 mt-1 ml-1 text-black" />

                    </li>
                    <div className=' relative'>
                        {
                            dropDown && <ul className=' bg-gray-600  p-5 absolute bottom-0 top-6 h-fit left-[-50px] z-10'>
                                <li className='hover:bg-gray-900 text-white'><NavLink to='/topics/1'>React</NavLink ></li>
                                <li className='hover:bg-gray-900  text-white'><NavLink to='/topics/2'>JavaScript</NavLink ></li>
                                <li className='hover:bg-gray-900  text-white'><NavLink to='/topics/4'>CSS</NavLink ></li>
                                <li className='hover:bg-gray-900  text-white'><NavLink to='/topics/5'>Git</NavLink ></li>
                            </ul>
                        }
                    </div>

                    <li>
                        <NavLink
                            to='/statistics'
                            aria-label='Statistics'
                            title='statisticstatistics'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Statistics
                        </NavLink >
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            aria-label='Blog'
                            title='Blog'
                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Blog
                        </NavLink >
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <NavLink
                                            to='/'
                                            aria-label='Company'
                                            title='Company'
                                            className='inline-flex items-center'
                                        >
                                            <img className='w-10' src="data:image/png;base64,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" alt="" />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Verifying The Intelligence
                                            </span>
                                        </NavLink >
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink
                                                to='/home'
                                                aria-label='Home'
                                                title='Home'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Home
                                            </NavLink >
                                        </li>
                                        <li onClick={() => setDropDown(prev => !prev)} className='flex font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer justify-center'>
                                            Topics <ChevronDoubleDownIcon className="h-5 w-5 mt-1 ml-1 text-black" />

                                        </li>
                                        <li>
                                            {
                                                dropDown && <ul className=' bg-gray-600  h-fit left-50 z-10'>
                                                    <li className='hover:bg-gray-900 text-white'><NavLink to='/topics/1'>React</NavLink ></li>
                                                    <li className='hover:bg-gray-900  text-white'><NavLink to='/topics/2'>JavaScript</NavLink ></li>
                                                    <li className='hover:bg-gray-900  text-white'><NavLink to='/topics/4'>CSS</NavLink ></li>
                                                    <li className='hover:bg-gray-900  text-white'><NavLink to='/topics/5'>Git</NavLink ></li>
                                                </ul>
                                            }
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/statistics'
                                                aria-label='Statistics'
                                                title='Statistics'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Statistics
                                            </NavLink >
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/blog'
                                                aria-label='Blog'
                                                title='Blog'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                            >
                                                Blog
                                            </NavLink >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header