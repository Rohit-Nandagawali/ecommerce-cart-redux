import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from "../redux/cartSlice"
import { addWishlist } from "../redux/wishlistSlice"
import { BiSolidHeart } from "react-icons/bi"


function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItems(item))

    }
    const handleAddToWishlist = (item) => {
        
        dispatch(addWishlist(item))
    }

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4 bg-slate-100'>
            {
                products.map((item) => (

                    <div key={item.id} className="w-full max-w-sm bg-white border hover:scale-105 hover:shadow-xl duration-100 border-gray-200 rounded-xl shadow ">
                        <div className="flex justify-end py-2 text-2xl px-2" onClick={() => { handleAddToWishlist(item) }}><button className='text-red-500 bg-slate-200 rounded-lg p-2' >
                            
                            <BiSolidHeart />
                        </button>
                        </div>
                        <div className="w-full flex  items-center justify-center">
                            <img className="p-8 rounded-t-lg w-38 h-44" src={item.image} alt={item.title} />
                        </div>

                        <div className="px-5 pb-5">
                            <div className="flex flex-col">
                                <h5 className="text-xl font-semibold tracking-tight truncate text-gray-900 " title={item.title}>{item.title}</h5>
                            </div>


                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900">₹{item.price}</span>
                                <button className="text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleAddItem(item)} >Add to cart</button>
                            </div>
                        </div>
                    </div>



                ))
            }
        </div>
    )
}

export default Home