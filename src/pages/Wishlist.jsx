import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addItems } from '../redux/cartSlice'
import { removeFromWishlist, clearWishlist } from '../redux/wishlistSlice'


const WishlistItem = (props) => {

  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id))
  }
  const handlAddToCart = (item) => {

    dispatch(addItems(item))
  }


  return (
    <div className="">

      <div key={props.id} className="w-full max-w-sm bg-white border  border-gray-200 rounded-xl shadow ">
        <div className="w-full flex  items-center justify-center">
          <img className="p-8 rounded-t-lg w-32 h-44" src={props.image} alt={props.title} />
        </div>

        <div className="px-5 pb-5">
          <div className="flex flex-col">
            <h5 className="text-xl font-semibold tracking-tight truncate text-gray-900 " title={props.title}>{props.title}</h5>
          </div>


          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">₹{props.price}</span>

          </div>
          <div className="flex justify-between">
            <button className="text-gray-700 mt-1 border-2 border-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => { handleRemove(props.id) }} >Remove</button>
            <button className="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => { handlAddToCart(props) }} >Add to cart</button>
          </div>
        </div>
      </div>

    </div>

  );
}


export default function Wishlist() {
  const wishlistItems = useSelector(store => store.wishlist)
  const dispatch = useDispatch()
  const handleClearWishlist = () => {

    dispatch(clearWishlist())
  }


  return (
    <div className="">
      {
        wishlistItems.length > 0 ?  <div className="">
            <div className="flex items-baseline w-full lg:w-2/4 justify-between">
             <div className="text-3xl ml-4 font-bold">Wishlist</div>
              <button className='border-red-300 border-2 text-red-800 hover:bg-slate-100 p-2 rounded-md shadow-sm m-4' onClick={handleClearWishlist} >Clear Wishlist</button>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4  bg-slate-100'>
            {
            wishlistItems.map((item) => (
                <WishlistItem key={item.id} {...item} />
            ))
        }
            </div>
          </div>
          : <div className="flex flex-col justify-center items-center">
            <img src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg" className='w-80 mt-7 h-72' alt="empty wishlist" />
            <h1 className='text-2xl font-semibold text-slate-700'>Your wishlist is empty</h1>
          </div>
      }

    </div>
  )
}
