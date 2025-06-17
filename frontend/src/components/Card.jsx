import React from 'react'
import { Star } from 'lucide-react'

const Card = ({img, name, price, rate}) => {
  return (
   <div className=" m-3 shadow-lg  min-h-80 max-w-70 rounded-2xl flex flex-col hover:shadow-xl">
        <div className="p-2">
          <img className="w-80 h-50 rounded-2xl" src={img} alt="" />
        </div>

          <p className=" p-2 font-semibold text-[20px]">
           {name}
          </p>
          <div className="flex p-2 gap-1 justify-between">
            <p className="price text-gray-600 font-bold">{price}</p>

            <p className="rating flex gap-1 font-semibold text-amber-400">{<Star color='orange' size={22} />}{rate}</p>
          </div>
        
      </div>
  )
}

export default Card
