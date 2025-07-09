import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart, token } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const navigate = useNavigate();



  // Inside Product component
  const [previewDescription, setPreviewDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');

  useEffect(() => {
    if (productData?.description) {
      const desc = productData.description;
      setPreviewDescription(desc.length > 150 ? desc.substring(0, 150) + "..." : desc);
      setFullDescription(desc);
    }
  }, [productData]);







  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });


  }, [productId, products])

  return productData ? (
    <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*-----------------Product Data details showcase/UI----------------------- */}
      <div className=' flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*----------------Product image showcase---------------------- */}
        <div className=' flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`thumbnail-${index}`}
                  onClick={() => setImage(item)}
                  onMouseEnter={() => setImage(item)}
                  onMouseLeave={() => setImage(productData.image.includes(image) ? image : productData.image[0])}
                  className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border-2 rounded-md p-0.5 transition-all duration-200 ${image === item ? 'border-orange-500' : 'border-gray-300'} hover:border-orange-500`} />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/*------------Product Info---------------------- */}
        <div className=' flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            {/* <p className='pl-2'>(122)</p> */}
          </div>
          {/*--------------The sizes part of the items----------------- */}
          <p className=' mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 whitespace-pre-line'>
            {previewDescription}
          </p>
          <a href="#description" className="text-black text-sm mt-3 inline-flex items-center gap-1 font-medium hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Read more
          </a>


          <div className=' flex flex-col gap-4 my-8'>
            <p>Select.Size</p>
            <div className=' flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={` border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          {/*---------------------ADD TO CART FUNCTIONALITY--------------------------- */}

          <button
            onClick={() => {
              if (!token) {
                toast.info("Please log in to add items to your cart.");
                navigate('/login');
                return;
              }
              addToCart(productData._id, size);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}  className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>

            ADD TO CART
          </button>


          <hr className=' mt-8 sm:w-4/5' />
          <div className=' text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is avaliable on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*-------------------------Description and review section------------------------- */}
      <div id="description" className=' mt-20'>
        <div className=' flex'>
          <b className=' border px-5 py-3 text-sm'>Description</b>

        </div>
        {/*---------------------Description box details-------------------------------*/}
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 whitespace-pre-line'>
          <p>{fullDescription}</p>
        </div>

      </div>

      {/*----------------------------------Display related products section------------------------------ */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div >
  ) : <div className=' opacity-0'></div>
}

export default Product
