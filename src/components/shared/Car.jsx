import React from 'react'
import {RiCloseLine,RiDeleteBinLine} from "react-icons/ri"; 

const Car = (props) => {
    const { showOrder, setShowOrder } = props;
  return (
    <div className= {`fixed top-0 bg-[#1f1d2b] w-full lg:right-0 lg:w-96 h-full 
    transition-all z-50 ${
      showOrder ? "rigth-0" : "-right-full"
      }`}>
      <div className="relative pt-16 lg:pt-0 text-gray-300 p-8 h-full">
      <RiCloseLine onClick={() => setShowOrder(false)} 
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
      <h1 className="text-2xl my-4">Orders #156235</h1>
       {/*Tags*/}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine In</button>
        <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>
        <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
      </div>
      {/*Pedido>*/}
      <div>
        <div className="grid grid-cols-6 mb-4">
          <h5 className="col-span-4">Item</h5>
          <h5 className="text-center">Qty</h5>
          <h5>Price</h5>
       </div>
          {/*Products*/}
          <div className="h-[450px] md:h-[750px] lg:h-[580px] overflow-y-scroll">
          <div className="bg-[#262837] p-4 rounded-xl mb-4"> 
            <div className="grid grid-cols-6 items-center mb-4">
                {/*Products Descriptions*/}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="salads.png" alt="" className="w-16 h-16 object-cover" />
                    <div><h5 className="text-xl">Spaicy Seaso...</h5>
                      <p className="text-xs text-gray-500" >$2,29</p>
                    </div>
                </div>
                 {/*Qty*/}
                 <div  className="text-center">
                  <span>2</span>

                 </div>
                 {/*Price*/}
                 <div  className="text-center">
                  <span>$4.58
                    </span>
                  </div>
                </div>
                 {/*Note*/}
                 <div className="grid grid-cols-6 items-center gap-2 ">
                  <form className="col-span-5">
                      <input
                      type="text" 
                      className="bg-[#1f1d2b] py-1 px-4 rounded-lg w-full outline-none text-xl"
                      placeholder="Order Note..." />
                  </form>
                  <div className="col-span-1  text-center">
                    <button className="border border-red-500 p-2 rounded-lg right">
                  <RiDeleteBinLine className="text-red-500 text-xl"/>
                  </button>
                   </div>

                 </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4"> 
              <div className="grid grid-cols-6 items-center mb-4">
                  {/*Products Descriptions*/}
                  <div className="col-span-4 flex items-center gap-2">
                    <img src="salads.png" alt="" className="w-16 h-16 object-cover" />
                      <div><h5 className="text-xl">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-500" >$2,29</p>
                      </div>
                  </div>
                  {/*Qty*/}
                  <div  className="text-center">
                    <span>2</span>

                  </div>
                  {/*Price*/}
                  <div  className="text-center">
                    <span>$4.58
                      </span>
                    </div>
                  </div>
                  {/*Note*/}
                  <div className="grid grid-cols-6 items-center gap-2 ">
                    <form className="col-span-5">
                        <input
                        type="text" 
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg w-full outline-none text-xl"
                        placeholder="Order Note..." />
                    </form>
                    <div className="col-span-1  text-center">
                      <button className="border border-red-500 p-2 rounded-lg right">
                    <RiDeleteBinLine className="text-red-500 text-xl"/>
                    </button>
                    </div>

                  </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4"> 
              <div className="grid grid-cols-6 items-center mb-4">
                  {/*Products Descriptions*/}
                  <div className="col-span-4 flex items-center gap-2">
                    <img src="salads.png" alt="" className="w-16 h-16 object-cover" />
                      <div><h5 className="text-xl">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-500" >$2,29</p>
                      </div>
                  </div>
                  {/*Qty*/}
                  <div  className="text-center">
                    <span>2</span>

                  </div>
                  {/*Price*/}
                  <div  className="text-center">
                    <span>$4.58
                      </span>
                    </div>
                  </div>
                  {/*Note*/}
                  <div className="grid grid-cols-6 items-center gap-2 ">
                    <form className="col-span-5">
                        <input
                        type="text" 
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg w-full outline-none text-xl"
                        placeholder="Order Note..." />
                    </form>
                    <div className="col-span-1  text-center">
                      <button className="border border-red-500 p-2 rounded-lg right">
                    <RiDeleteBinLine className="text-red-500 text-xl"/>
                    </button>
                    </div>

                  </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4"> 
              <div className="grid grid-cols-6 items-center mb-4">
                  {/*Products Descriptions*/}
                  <div className="col-span-4 flex items-center gap-2">
                    <img src="salads.png" alt="" className="w-16 h-16 object-cover" />
                      <div><h5 className="text-xl">Spaicy Seaso...</h5>
                        <p className="text-xs text-gray-500" >$2,29</p>
                      </div>
                  </div>
                  {/*Qty*/}
                  <div  className="text-center">
                    <span>2</span>

                  </div>
                  {/*Price*/}
                  <div  className="text-center">
                    <span>$4.58
                      </span>
                    </div>
                  </div>
                  {/*Note*/}
                  <div className="grid grid-cols-6 items-center gap-2 ">
                    <form className="col-span-5">
                        <input
                        type="text" 
                        className="bg-[#1f1d2b] py-1 px-4 rounded-lg w-full outline-none text-xl"
                        placeholder="Order Note..." />
                    </form>
                    <div className="col-span-1  text-center">
                      <button className="border border-red-500 p-2 rounded-lg right">
                    <RiDeleteBinLine className="text-red-500 text-xl"/>
                    </button>
                    </div>

                  </div>
          </div>
          <div className="bg-[#262837] p-4 rounded-xl mb-4"> 
            <div className="grid grid-cols-6 items-center mb-4">
                {/*Products Descriptions*/}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="salads.png" alt="" className="w-16 h-16 object-cover" />
                    <div><h5 className="text-xl">Spaicy Seaso...</h5>
                      <p className="text-xs text-gray-500" >$2,29</p>
                    </div>
                </div>
                 {/*Qty*/}
                 <div  className="text-center">
                  <span>2</span>

                 </div>
                 {/*Price*/}
                 <div  className="text-center">
                  <span>$4.58
                    </span>
                  </div>
                </div>
                 {/*Note*/}
                 <div className="grid grid-cols-6 items-center gap-2 ">
                  <form className="col-span-5">
                      <input
                      type="text" 
                      className="bg-[#1f1d2b] py-1 px-4 rounded-lg w-full outline-none text-xl"
                      placeholder="Order Note..." />
                  </form>
                  <div className="col-span-1  text-center">
                    <button className="border border-red-500 p-2 rounded-lg right">
                  <RiDeleteBinLine className="text-red-500 text-xl"/>
                  </button>
                   </div>

                 </div>
          </div>
      </div> </div>
      {/*Payments>*/}
      <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Discount</span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-400">Subtotal</span>
          <span>$201.03</span>
        </div>
        <div>
          <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
            Continue to payment
          </button>
         
        </div>
       </div>
     </div>
    </div>
  )
}

export default Car