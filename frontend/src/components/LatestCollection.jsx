import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const sorted = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
            setLatestProducts(sorted.slice(0, 10));
        }
    }, [products]);

    {/*----------------------------This give the Lastest collection page details-----------------------------------*/ }

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Check out the premium new collection of our products.
                </p>
            </div>
            {/*---------------------------------------Rendering products--------------------------------------------------------------- */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>

            <div className='flex justify-center mt-8'>
                <Link to='/collection'>
                    <button className=' px-6 py-3 border border-gray-800 text-sm md:text-base hover:bg-gray-800 hover:text-white transition-all duration-300'>Show More</button>
                </Link>
            </div>

        </div>
    )
}

export default LatestCollection
