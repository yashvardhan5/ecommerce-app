import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <Link to='/'>
                        <img src={assets.Zyphor_fancy} className='mb-5 w-32' alt='' />
                        <p className='w-full md:w-2/3 text-gray-600'>
                            Zyphor — Where Style Meets Convenience.
                        </p>
                    </Link>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li><Link to='/' className='hover:underline' >Home</Link></li>
                        <li><Link to='/about' className=' hover:underline'>About us</Link></li>
                        <li><Link to='/orders' className=' hover:underline'>Orders</Link></li>
                        <li><Link to='/privacy-policy' className=' hover:underline'>Privacy policy</Link></li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+911234567890</li>
                        <li>admin@zyphor.com</li>

                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Zyphor.com - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
