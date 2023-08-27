import { useState } from 'react';
import logo from '../assets/1_invgate-logo.png';
import globe from '../assets/globe.svg';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='py-4 z-20 sticky top-0  w-full bg-white'>
            <nav>
                <div className='my-container flex justify-between items-center '>
                    <img
                        className='mr-8'
                        src={logo}
                        alt=''
                    />
                    <div className='block lg:hidden '>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
                        >
                            <svg
                                className={`fill-current h-6 w-6 ${
                                    isOpen ? 'hidden' : 'block'
                                }`}
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                            </svg>
                            <svg
                                className={`fill-current h-6 w-6 ${
                                    isOpen ? 'block' : 'hidden'
                                }`}
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`flex gap-8 justify-between absolute left-0 right-0 top-16 shadow-md rounded shadow-gray-400 bg-white lg:shadow-none w-full  ${
                            isOpen ? 'block' : 'hidden'
                        } p-4 lg:p-0 lg:bg-inherit  items-center flex-col lg:flex-row lg:flex lg:static`}
                    >
                        <div className='flex flex-col lg:flex-row gap-4 items-center'>
                            <ul className='flex flex-col lg:flex-row gap-4'>
                                <li>
                                    <a href='#'>Products</a>
                                </li>
                                <li>
                                    <a href='#'>Solutions</a>
                                </li>
                                <li>
                                    <a href='#'>Pricing</a>
                                </li>
                                <li>
                                    <a href='#'>Resources</a>
                                </li>
                                <li>
                                    <a href='#'>Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 '>
                            <a href='#'>Contact us</a>
                            <button>Subscribe</button>
                            <a href='#'>
                                <img
                                    className='text-gray-400'
                                    src={globe}
                                    alt=''
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
