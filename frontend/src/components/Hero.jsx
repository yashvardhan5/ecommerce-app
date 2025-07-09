import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {

    const handleScroll = () => {
        const element = document.getElementById("bestsellers");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <div className='flex flex-col sm:flex-row border border-gray-400 '>
            {/*----------------------------------hero Left Side the main page--------------------------------------------------------------------*/}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p onClick={handleScroll} className='font-semibold text-sm md:text-base hover:cursor-pointer'>Shop Now</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/*----------------------------------hero right side on main page--------------------------------------------------------------------*/}

            <div className='w-full sm:w-1/2'>
                <img className='w-full h-full object-cover' src={assets.Hero_new} alt='' />
            </div>
        </div>
    )
}

export default Hero
