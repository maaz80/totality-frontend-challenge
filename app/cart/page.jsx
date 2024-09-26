'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; 

const Cart = () => {
  const { cart, removeFromCart } = useCart(); 

  const totalCount = cart.reduce((count, item) => count + item.quantity, 0);


  return (
    <div className='poppins-regular min-h-screen md:min-h-96'>
      <div className=" w-[99%] m-auto">
        <div className="flex justify-between items-center w-[100%] mt-20 ">
          <h2 className="text-lg font-semibold ml-4">Cart ({totalCount} items)</h2>
        </div>

        {cart.length === 0 ? (
          <h1 className="text-center mt-32 text-xl">Your cart is empty.</h1>
        ) : (
          // Displaying Cart Item 
          <div className="flex w-[100%] flex-wrap justify-around items-center">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div className="rounded shadow-lg bg-white p-2 md:p-4 mx-auto mt-4 w-[170px] md:w-[344px] h-[245px] md:h-[380px] flex flex-col justify-between items-start">
                  <Image
                    src={item.image}
                    alt="Property image"
                    className="object-cover mb-2 md:mb-4 rounded-md w-[170px] md:w-[300px] h-[100px] md:h-[180px]"
                    priority={true}

                  />
                  <div className="font-bold text-[12px] md:text-xl ">{item.title}</div>
                  <div className=" w-[100%]">
                    <div>
                      <p className="text-gray-700 text-[10px] md:text-base mb-1">{item.location}</p>
                      <p className="text-gray-600 text-[10px] md:text-sm mb-2 md:mb-4">{item.bedrooms} bedrooms</p>
                    </div>
                    <div className="flex  items-center justify-between gap-1 md:gap-3">
                      <Link href={`/CartItemDetails/${item.id}`}>
                        <button className=" bg-green-600 text-white text-[8px] md:text-sm rounded-md w-[75px] md:w-[140px] py-2">
                          Booking Details
                        </button>
                      </Link>
                      {/* Remove From Cart Button */}
                      <button onClick={() => removeFromCart(item.id)} className="text-white text-[8px] md:text-sm rounded-md w-[75px] md:w-[140px] py-2 bg-red-600">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;