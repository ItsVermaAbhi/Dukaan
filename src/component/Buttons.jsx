import React,{useState} from "react"
export function Buttons({text, color, textColor}){
   
    return(
        
    <>
         <div className={` ${color} rounded-full ${textColor}`}>
            <button className="py-[6px]  px-4 text-sm">{text}</button>
        </div>
    </>
        
    )
}