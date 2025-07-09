import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
 
//-------------------------------------This is for the about us page content-------------------------------------------- */}
const About = () => {
  return (
    <div>

      <div className=' text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className=' w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At Zyphor, we believe shopping should be effortless, exciting, and reliable. Whether you're looking for the latest tech gadgets, everyday essentials, or exclusive lifestyle products, Zyphor is committed to delivering a seamless shopping experience with competitive prices and fast, secure delivery.</p>
        <p>Built with customer satisfaction at its core, Zyphor is more than just an e-commerce platform — it's a community of passionate buyers and sellers. We are constantly evolving to meet your needs, offering new products, exceptional service, and a secure environment where you can shop with confidence. Join thousands of happy customers who trust Zyphor to simplify their shopping journey every day.</p>
        <b className='text-gray-800'>Our Misson</b>
        <p>At Zyphor, our mission is to make online shopping simple, accessible, and trustworthy for everyone. We strive to provide a wide range of quality products, backed by excellent customer service, fast delivery, and a hassle-free shopping experience. We are committed to building a platform where convenience meets reliability, ensuring every purchase brings satisfaction and value to our customers.</p>
        </div>
      </div>
{/*------------------------------------Why choose us section on about us page---------------------------------------------- */}
      <div className=' text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>

        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>With our user-friendly interface and hassle-free ordering process,shopping has never been easier.</p>
        </div>

        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way,ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
