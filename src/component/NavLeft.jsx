
import { useState } from 'react'
import menu from '../images/bx-menu.svg'
import { Hamburger } from './Hamburger';

export function NavLeft(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex gap-2 items-center">
            <div className='flex'>
                <div className='block lg:hidden  pt-2 ' onClick={()=> setIsOpen(!isOpen)} >
                <img className='w-[27px] absolute top-3 pt-0  sm:size-auto' src={menu} alt="" />
                </div>
                <div style={{transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out"}} className={`block z-12 flex absolute top-[-12px] ${isOpen? "left-[-12px]": "left-[-1200px]"} transform transition-transform text-white p-3 h-[110vh]  lg:hidden` }>
                <div className=' bg-slate-800 w-[200px] p-4 '><Hamburger></Hamburger></div>
                <div className='bg-white w-[85vw] opacity-50' onClick={()=> {
                    if(isOpen){setIsOpen(!isOpen)}
                    }}></div>
                </div>
                <div className='ml-7'>Payout</div>
            </div>
            <div className="flex gap-1 items-center text-nowrap text-[10px]">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.1" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <p className="md:block hidden ">How it works</p>
            </div>
        </div>
    )
}