import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearItems, addItems } from '../redux/cartSlice'

const CartItem = ({ image, id, title, price, description }) => {
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }



  return (

    <tr className="bg-white border-b">
      <th scope="row" className="flex flex-col lg:flex-row px-6 py-4 text-gray-900 ">
        <img className="w-16 h-20 lg:w-32 lg:h-40 rounded-sm" src={image} alt={title} />
        <div className="flex flex-col p-3">

          <div className="text-base font-semibold ">{title}</div>
          <div className="font-normal line-clamp-4 text-gray-500 mt-2">{description}</div>
        </div>
      </th>
      <td className="px-6 py-4 ">
        <p className='text-gray-400'>{price}</p>

      </td>

      <td className="px-6 py-4">
        <button className="font-medium text-red-400 underline" onClick={() => { handleRemove(id) }}>Remove</button>
      </td>
    </tr>


  );
}


function Cart() {
  const cartItems = useSelector(store => store.cart.items)
  const total = useSelector(store => store.cart.total)
  const dispatch = useDispatch()

  const handleClearAll = () => {
    dispatch(clearItems())
  }
  return (
    <div className="">
      { cartItems.length > 0?
      <div className='grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-4 p-4 lg:px-44 '>
        <div className="overflow-auto max-h-[73vh] rounded-lg shadow-md border">
          <div className="flex justify-between items-baseline">
            <h1 className='text-3xl ml-4 font-bold'>Cart</h1>
            <button className='border-red-300 border-2 text-red-800 hover:bg-slate-100 p-2 rounded-md shadow-sm m-4' onClick={handleClearAll}>Clear Cart</button>
          </div>

          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>

                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price(₹)
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))
              }

            </tbody>
          </table>


        </div>
        <div className="bg-white rounded-lg shadow-md border max-h-64">
          <h1 className='text-slate-900 text-xl font-bold p-2'>Price Details</h1>
          <hr />
          <div className="flex pt-5 px-10 justify-between items-baseline">
            <p className='text-gray-500 text-sm font-medium '>Subtotal</p>
            <div className="flex items-baseline"><p className='font-bold text-xl text-gray-900'>{total.toFixed(2)}</p><p className="text-gray-400 ml-1">₹</p>
            </div>
          </div>
          <div className="flex py-2 px-10 justify-between items-baseline">
            <p className='text-gray-500 text-sm font-medium '>Discount</p>
            <div className="flex items-baseline"><p className='font-bold text-xl text-gray-500'>10</p><p className="text-gray-400 ml-1">%</p>
            </div>
          </div>
          <hr />
          <div className="flex py-2 px-10 justify-between items-baseline">
            <p className='text-gray-800 text-sm font-medium '>Grantotal</p>
            <div className="flex items-baseline"><p className='font-bold text-2xl text-gray-900'>{(total - total * 0.1).toFixed(2)}</p><p className="text-gray-800 ml-1">₹</p>
            </div>
          </div>
          <div className="p-2 mx-10 cursor-pointer bg-indigo-500 rounded-md shadow-lg uppercase tracking-wide text-white my-3 text-center">MAKE PAYMENT</div>


        </div>
      </div>:
      <div className="flex flex-col justify-center items-center"><img src="https://img.freepik.com/free-vector/discount-concept-illustration_114360-2301.jpg" alt="Add to cart" className='w-96 mt-7 h-96' /> <h1 className='text-2xl font-semibold text-slate-700'>You cart is empty</h1></div>

      }

    </div>
  )
}

export default Cart