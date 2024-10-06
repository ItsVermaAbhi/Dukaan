 // class="size-4"
export function RevenueCard({amount, orders, date}){
    return(
        <div className="shadow-md rounded-md bg-sky-700 my-5 ">
            <div className="bg-sky-700 rounded-md text-white pt-4 pl-4 pr-4 hover:bg-sky-800">
                    <div className="flex gap-2 mb-3 text-sm items-center">
                        <div>Next Payout</div>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>

                    </div>
                    
                    <div className="flex justify-between items-center  pb-3">
                        <div className="text-3xl font-medium">₹ {amount}</div>
                        <div className="flex items-center text-sm">
                                <div className="underline text-base text-sm font-medium items-center">{orders} Orders</div>
                                <div className="pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor"  class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                    </div>
                     
                    </div>
            </div>
           {date?
            <div className="bg-sky-800 flex justify-between rounded-md text-white pt-2 pl-4 pb-2 pr-4 text-sm">
            <div>Next Payment Date:</div>
            <div>{date}</div>
        </div>: null}
        </div>
    )
}

export function PendingAmountCard({amount, orders, cardName}){
    return(
        <div>
            <div className="shadow-md my-5 ml-1 rounded-md  pt-4 pl-4 pr-4">
                <div className="flex gap-2 mb-3 text-sm items-center">
                    <div>{cardName}</div>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                </div>
                <div className="flex justify-between items-center  pb-3">
                    <div className="text-2xl font-medium">₹ {amount}</div>
                    {orders? <div className="flex items-center text-sm text-sky-800">
                                <div className="underline text-base text-sm font-medium items-center">{orders} Orders</div>
                                <div className="pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor"  class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                    </div>: null}
                </div>
            </div>
        </div>
    )
}