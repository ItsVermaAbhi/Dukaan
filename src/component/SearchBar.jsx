import {FaSearch} from 'react-icons/fa'

export function SearchBar({text, color, border}){
    return(
        <div className={`flex  ${color}  ${border} rounded-lg h-[12]  items-ceter justify-center px-3 py-2`}>
      
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-sm text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          <input type="text" className='bg-transparent border-none outline-none placeholder:text-gray-400 text-sm w-full px-2' placeholder={text} />

        </div>
    )
}