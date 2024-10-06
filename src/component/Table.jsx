export function Table(){
    const OrderId = ["#281209", "#281210","#281211", "#281212" ]
    const TransactionId = ["TRX123456", "TRX789012", "TRX345678", "TRX901234"]

    return (
        <div>
           
           <table className="w-full mt-2">
            <tr className="bg-gray-100 p-2 ">
                <th className=" p-2 font-normal text-left text-sm">Order ID</th>
                <th className=" font-normal text-sm text-left">Status</th>
                <th className=" font-normal text-sm text-left">Transaction ID</th>
                <th className=" font-normal text-sm text-left">Refund Date</th>
                <th className=" font-normal text-sm text-right" >Order Amount</th>
            </tr>
            <tr className="text-center">
                <td className="text-sky-700 text-xs p-1 text-left">#281209</td>
                <td className="text-xs p-1 text-left">Successfull</td>
                <td className="text-xs p-1 text-left">TRX123456</td>
                <td className="text-xs p-1 text-left">Today, 8:45 PM</td>
                <td className="text-xs p-1 text-left">1,125.0</td>
            </tr>
            <tr className="text-center">
                <td className="text-sky-700 text-xs p-2 text-left">#281210</td>
                <td className="text-xs p-1 text-left">Processing</td>
                <td className="text-xs p-1 text-left">TRX123456</td>
                <td className="text-xs p-1 text-left">Today, 8:45 PM</td>
                <td className="text-xs p-1 text-right">1,125.0</td>
            </tr>
            <tr className="text-center">
                <td className="text-sky-700 text-xs p-1 text-left">#281211</td>
                <td className="text-xs p-1 text-left">Successfull</td>
                <td  className="text-xs p-1 text-left">TRX123456</td>
                <td className="text-xs p-1 text-left">Today, 8:45 PM</td>
                <td className="text-xs p-1 text-right">1,125.0</td>
            </tr>
            <tr className="text-center">
                <td className="text-sky-700 text-xs p-1 text-left">#281212</td>
                <td className="text-xs p-1 text-left">Processing</td>
                <td className="text-xs p-1 text-left">TRX123466</td>
                <td className="text-xs p-1 text-left">Today, 8:45 PM</td>
                <td className="text-xs p-2 text-right p-1">1,125.0</td>
            </tr>
            <tr className="text-center">
                <td className="text-sky-700 text-xs p-1 text-left">#281213</td>
                <td className="text-xs p-1 text-left">Successfull</td>
                <td className="text-xs p-1 text-left">TRX123476</td>
                <td className="text-xs p-1 text-left">Today, 8:45 PM</td>
                <td className="text-xs p-1 text-right">1,125.0</td>
            </tr>

            <tr className="text-center">
                <td className="text-sky-700 text-xs p-2 text-left">#281214</td>
                <td className="text-xs p-1 text-left">Processing</td>
                <td className="text-xs p-1 text-left">TRX123486</td>
                <td className="text-xs p-1 text-left">Today, 8:45 PM</td>
                <td className="text-xs p-1 text-right">1,225.0</td>
            </tr>
           </table>
        </div>
    )
}