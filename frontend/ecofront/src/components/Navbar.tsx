import React, { useEffect, useState } from 'react'
import { BsLightbulb, BsBasketFill,BsMoonStarsFill } from 'react-icons/bs'

const Navbar = () => {

  const [color,setColor] = useState(false);
  useEffect(()=>{
    const root: HTMLElement = document.getElementById('root') as HTMLElement;
    if(color){
      root.style.backgroundColor = "black";
      root.style.color = "#EBEBEB";

    }else{
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  },[color])

  return (
    <div className="flex items-center justify-between px-3 h-24">
      <div className="text-2xl font-bold tracking-wider">Logo</div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder='Ara' className="border p-3 outline-none rounded-lg" />
        <div onClick={()=>setColor(!color)} >
          {
            color ? <BsMoonStarsFill size={25} className="cursor-pointer" /> : <BsLightbulb size={25} className="cursor-pointer" /> 
          }
          
        </div>

        <div className='relative'>
          <BsBasketFill size={25} className="cursor-pointer" />
          <span className="absolute -top-1 -right-1 px-1 bg-red-600 text-white rounded-full text-sm">3</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar;