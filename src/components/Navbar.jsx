import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { BiHomeAlt2, BiHeart, BiCartAlt } from "react-icons/bi"

function Navbar() {
    // subscribe to store.item
    const cartItems = useSelector(store => store.cart.items)
    const wishlistItems = useSelector(store => store.wishlist)
    console.log(cartItems);
    return (
        <nav className="bg-indigo-500 shadow-lg ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 gap-2">

                <Link to="/" className='text-white font-semibold text-3xl  mr-6'>
                    <BiHomeAlt2 />
                </Link>
                <Link to="/wishlist" className='text-white font-semibold flex relative items-center text-3xl  mr-6'>
                    <BiHeart />
                    <div className="text-xs absolute bg-white text-indigo-800 rounded-full py-[0.15rem] px-1 shadow-md -top-1 -right-2 mr-0">
                        {wishlistItems.length}
                    </div>
                </Link>
                <Link to="/cart" className='text-white font-semibold flex relative items-center text-3xl'>
                    <BiCartAlt />
                    <div className="text-xs absolute bg-white text-indigo-800  animate-bounce rounded-full py-[0.15rem] px-1 shadow-md -top-1 -right-2 mr-0">
                    {cartItems.length}
                    </div>
                </Link>
                

            </div>
        </nav>

    )
}

export default Navbar