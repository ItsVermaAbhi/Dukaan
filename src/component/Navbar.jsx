import { NavLeft } from "./NavLeft";
import { NavRight } from "./NavRight";
import { SearchBar } from "./SearchBar";

export function Navbar(){
    return(
        <div className='grid grid-cols-4 gap-3 shadow py-2  bg-white border-2] text-center w-[100vw] lg:w-[85vw]'>
        <div className="pl-7 pt-1">
            <NavLeft  ></NavLeft>
        </div>
        <div className="col-span-2 w-[26vw] ml-[11vw]">
            <SearchBar  text={"Search features, tutorials etc."} color={"bg-gray-100"} border={"border-none"}></SearchBar>
        </div>
        <div className="col-span-1 pr-7">
            <NavRight ></NavRight>
        </div>
       </div>
    )
}