import { useState } from "react";
import { RiMenu3Line,
        RiUser3Line,
        RiAddLine,
        RiLightbulbLine,
        RiCloseLine,
        RiArrowDownSLine,
       
      } from "react-icons/ri";

      
        //Components
  import Siderbar from "./components/shared/Siderbar"
  import Car from "./components/shared/Car";
  import Header from "./components/shared/Header";
  import Card from "./components/shared/Card";

function App() {
 const[showMenu, setShowMenu] = useState(false);
 const[showOrder, setShowOrder] = useState(false);

 const toggleMenu = () => {
  setShowMenu(!showMenu);
  setShowOrder(false);
  
 }
 const toggleOrders = () => {
  setShowOrder(!showOrder);
  setShowMenu(false);
 }
  
  return (
    <div className="bg-[#262837] w-full min-h-screen">
     <Siderbar showMenu={showMenu} />
     
    {/*Menu movil*/}
    <nav className="bg-[#1f1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button className="p-2">
        <RiUser3Line />
        </button>
        <button className="p-2">  
        <RiLightbulbLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
        <RiAddLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine/>: <RiMenu3Line /> }
        </button>
    </nav>
    <main className="lg:pl-28 lg:pr-96 pb-20">
      <div className="md:p-8 p-4">
        {/*Header */}
          <Header />
        {/*Title Content */}
            <div className="flex items-center justify-between mb-16 ">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />Dine in
              </button>
           </div>
        {/*Content */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/*Card */}
            <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />  
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
             <Card img="salads.png"
              description="Speacy Seasoned seafood nodles"
              price ="2.29"
              inventory="20"
             />   
              
      
        </div>

        </div>
      {/*Car*/}
      < Car showOrder={showOrder} setShowOrder={setShowOrder} />
    </main>
    </div>
  )
}

export default App
