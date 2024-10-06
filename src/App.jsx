import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PendingAmountCard, RevenueCard } from './component/RevenueCard'
import { NavLeft } from './component/NavLeft'
import { SearchBar } from './component/SearchBar'
import { NavRight } from './component/NavRight'
import { Navbar } from './component/Navbar'
import { MonthSelector } from './component/MonthSelector'
import { Buttons } from './component/Buttons'
import {Table} from './component/Table'
import { Hamburger } from './component/Hamburger'

function App() {
  const [selected, setSelected] = useState("false")

  return (
    <>
     <div className='flex gap-0'>
      <div className=' lg:block hidden  lg:w-[15%] bg-slate-800 text-white p-3  fixed z-10 h-[100vh] '>
        <Hamburger></Hamburger>
      </div>

      <div className=' lg:w-full lg:ml-[calc(15vw)]'>
      <div className='fixed z-10'>
        <Navbar></Navbar>
      </div>
      <div className='relative top-[60px] z-0 w-[100vw] lg:w-[85vw]'>
          <div className="flex justify-between px-6 mt-4">
            <h2>Overview</h2>
            <MonthSelector></MonthSelector>
          </div>
        <div className='grid grid-col-1 gap-2 px-6 md:grid-cols-2 lg:grid-cols-3 '>
            <RevenueCard  amount={"2,542,564"} orders={"23"} date={"Today, 4 PM"} ></RevenueCard>
            <PendingAmountCard cardName={"Amount Pending" } amount={"92,312.20"} orders={"13"}></PendingAmountCard>
            <PendingAmountCard cardName={"Amount Processed" } amount="23,92,312.20"></PendingAmountCard>
        </div>
        <div className='font-medium px-6 text-lg'>
          <h3>Transactions | This Month</h3>
        </div>
        <div className='flex gap-3 px-6 mt-4'>
          <Buttons text={"Payouts(22)"} color={"bg-gray-300"} textColor={"text-gray-500"} ></Buttons>
          <Buttons text={"Refunds(6)"} color={"bg-sky-700"} textColor={"text-white"}></Buttons>
        </div>

        <div className='flex flex-col justify-between  p-2 mx-6 mt-6 shadow'>
            <div className='flex justify-between p-0'>
            <div className='flex justify-left'><SearchBar text={"ORDER ID or transactions id"} color={"bg-white"} border={"border-2 border-gray-100"}></SearchBar></div>
              <div className='flex gap-3'>
                  <button className='border-2 border-gray-100 outline-none flex gap-1 items-center bg-transparent px-2 py-1'><div className='text-sm'>Sort</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 pt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                  </button>

                  <button className='border-2 border-gray-100 outline-none flex bg-transparent p-2 text-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </button>
              </div>
            </div> 

            <div className=''>
            <Table></Table>
          </div>
        </div>
      </div>

      </div>
     </div>
    

   

     
      
      {/* <div className='flex gap-5 justify-evenly mb-10'>
        <div className='bg-red-500 '>Hello</div>
        <div>MY</div>
        <div>Self</div>
      </div>

      <div className='grid grid-cols-2 mb-5 sm:grid-cols-3 gap-5'>
        <div className='bg-green-400 rounded-md pl-3 col-span-1  sm:col-start-1 col-span-1'>Hello</div>
        <div className='font-sans hover:font-mono'>MY</div>
        <div className=' bg-blue-300'>Self</div>
        <div className='bg-red-300  sm:col-span-2 col-start-2' >Yes</div>
        <div className='bg-yellow-500'>MYnAMEiS</div>
        <div className='bg-purple-400'>LAKHAN</div>
      </div> */}

   
    </>
  )
}

export default App
