import {Link} from 'react-router-dom';
import  {useState} from 'react';
import {MdOutlineDashboard} from 'react-icons/md';
import {HiXMark, HiChevronRight } from 'react-icons/hi2';

// const menus = [
//     { name: 'dashboard', link: '/', icon: MdOutlineDashboard },
//     { name: 'user', link: '/', icon: AiOutlineUser },
//     { name: 'messages', link: '/', icon: FiMessageSquare },
//     { name: 'analytics', link: '/', icon: TbReportAnalytics },
//     { name: 'File Manager', link: '/', icon: FiFolder },
//     { name: 'Cart', link: '/', icon: FiShoppingCart },
//     { name: 'Saved', link: '/', icon: AiOutlineHeart },
//     { name: 'Setting', link: '/', icon: RiSettings4Line },
// ];


const SideBar = () => {
    const [open, setOpen] = useState(true);
    return (
        <aside
            className={` flex flex-col justify-between border-e h-full  ${open ? 'w-72' : 'w-20'} duration-300 px-4`}
        >
            <nav>
                <div className={`py-3 flex ${open ? 'justify-end': 'justify-center'} cursor-pointer text-gray-700`} onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <HiXMark size={26} />:
                            <HiChevronRight size={26} />
                    }
                </div>

                <ul className={`${open ? '': 'hidden'} mt-6 space-y-1`}>
                    <li className='flex space-x-5 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'>
                        <MdOutlineDashboard />
                        <Link
                            to={'/'}
                            className='block'
                        >
                            General
                        </Link>
                    </li>

                    <li>
                        <details className='group [&_summary::-webkit-details-marker]:hidden'>
                            <summary
                                className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            >
                                <span className='text-sm font-medium'> Teams </span>

                                <span
                                    className='shrink-0 transition duration-300 group-open:-rotate-180'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <ul className='mt-2 space-y-1 px-4'>
                                <li>
                                    <a
                                        href=''
                                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                    >
                                        Banned Users
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href=''
                                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                    >
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>

            <div className={`${open ? '': 'hidden'} sticky inset-x-0 bottom-0 border-t border-gray-100`}>
                <Link to={'.'} className='flex items-center gap-2 p-4 hover:bg-gray-50'>
                    <img
                        alt='User'
                        src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        className='h-10 w-10 rounded-full object-cover'
                    />

                    <div>
                        <p className='text-xs'>
                            <strong className='block font-medium'>Eric Frusciante</strong>

                            <span> eric@frusciante.com </span>
                        </p>
                    </div>
                </Link>
            </div>
        </aside>
    )
};

export default SideBar;
