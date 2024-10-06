import logo from '../images/delivery.svg' 
import product from '../images/product.png'
import marketing from '../images/marketing.png'
import analytics from '../images/analytics.png'
import discount from '../images/discount.png'
import appearence from '../images/appearence.png'
import audience from '../images/audience.png'
import plugins from '../images/plugins.png'

export function Hamburger(){
    return(
        <div>
            <div className="flex justify-between items-center mt-1">
                <div className="flex items-center gap-3">
                    <div >
                        <img className="rounded-lg w-9" src="https://dashboard-clone-dukaan.vercel.app/_next/static/media/nishyan.760570e2.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[13px] font-medium">Nishyan</p>
                        <p className="text-[10px] underline opacity-70">Visit Store</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                
            </div>
            <div className="flex flex-col items-left gap-3 mt-4  text-xs">
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <a href="">Home</a>
                </div>
                

                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    <a href="">Orders</a>
                </div>
                <div className="flex gap-2 items-center ">
                    <img className='filter grayscale invert size-6 pt-[0px]' src={product} alt="" />
                <a href="">Products </a>
                </div>
                <div className="flex gap-2 items-center">
                    <img className='size-6'  src={logo} alt="" />
                <a href="">Delivery</a>
                </div>
                <div className="flex gap-2 items-center">
                    <img className='filter grayscale invert size-6' src={marketing} alt="" />
                <a href="">Marketing</a>
                </div>
                <div className="flex gap-2 items-center"> 
                <img className='filter grayscale invert size-6' src={analytics} alt="" />
                        <a href="">Analytics</a>
                </div>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                    <a href="">Payouts</a>
                </div>
                <div className="flex gap-2 items-center">
                <img className='filter grayscale invert size-6' src={discount} alt="" />
                <a href="">Discounts</a>
                </div>
                <div className="flex gap-2 items-center"> 
                <img className='filter grayscale invert size-6' src={audience} alt="" />
                    <a href="">Audience</a>
                </div>
                <div className="flex gap-2 items-center">
                <img className='filter grayscale invert size-6' src={appearence} alt="" />
                <a href="">Appearence</a>
                </div>
                <div className="flex gap-2 items-center">
                <img className='filter grayscale invert size-6' src={plugins} alt="" />
                <a href="">Plugins</a>
                </div>

                
               
                
                
                
                
               
               
                
                
            </div>
            
        </div>
    )
}