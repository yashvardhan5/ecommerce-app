import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);


  return (
    <Link className='text-gray-700 cursor-pointer rounded p-2 flex flex-col h-full' to={`/product/${id}`}>
      <div className='overflow-hidden h-48 flex items-center justify-center'>
        <img className='h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110' src={image[0]} alt='' />
      </div>
      <div className='flex flex-col justify-between flex-grow mt-2'>
        <p className='text-sm font-medium line-clamp-2'>{name}</p>
        <p className='text-sm font-semibold mt-1'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
