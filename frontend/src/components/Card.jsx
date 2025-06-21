import { Ban, BlocksIcon, Star } from 'lucide-react'
import React from 'react'

const Card = ({ name, price, category, inStock, rating, image }) => (

  <div className='drop-shadow-lg rounded-xl bg-white flex flex-col items-start m-4 w-full max-w-60 bg p-4 hover:shadow-xl transition-all duration-500 hover:cursor-pointer'>
    {/* Image */}
    <div className={`bg-cover bg-gray-200 bg-center rounded-lg border-4 border-gray-100 h-36 w-full mb-2`} style={{ backgroundImage: `url(${image})` }}>
      <div className=' text-xs font-semibold bg-amber-300/50 p-1 px-2 rounded-md w-fit m-1.5 '>
        {category}
      </div>

    </div>

    {/* Product Title */}
    <div className='text-m'>
      {name}
    </div>

    {/* Price and Reviews */}
    <div className='flex flex-row justify-between w-full pt-2'>
      <div className='font-bold text-sm '>
        GHS {price}
      </div>

      <span className='flex align-middle items-center gap-x-1 font-semibold text-sm'>
        {rating}
        <Star color='gold' fill='gold' size={12} />

      </span>
    </div>

    {/* Out of Stock Banner */}
    {(!inStock) ?(

      <div className='absolute top-0 left-0 w-full h-full bg-linear-to-t from-gray-200/80 to-gray-50/30'>
      <div className='flex flex-col justify-center align-middle items-center w-full h-full'>
        <div className='flex flex-col items-center'>

          <Ban size={100} color='#ec003f' opacity={0.9} p />
          <div className='text-lg font-bold text-rose-600'>
            
          Out of Stock
          </div>
        </div>
      </ div>
    </div>
      ):<></>
    }
  </div>


)

export default Card
