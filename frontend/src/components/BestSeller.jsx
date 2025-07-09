import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);


    useEffect(() => {
        const bestProduct = products.filter(item => item.bestseller).sort((a, b) => new Date(b.date) - new Date(a.date));
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])

    return (
        <div id='bestsellers' className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'Best'} text2={'Seller'} />
                <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>Find out our best selling products</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>


        </div>
    )
}

export default BestSeller
