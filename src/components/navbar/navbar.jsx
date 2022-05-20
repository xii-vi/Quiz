export const Navbar = ()=>{
    return(
        <nav className="flex justify-between item-center p-4">
            <div className="text-5xl pl-6">Quiz</div>
            <div className="self-center rounded-md border-solid border-2 border-black py-2 px-4">
                <input className="outline-none" type="text" placeholder="Search" />
                <button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></button>
            </div>
            <div className="self-center pr-6">
                <button className="rounded-md px-4 py-2 bg-indigo-500 mr-4 text-slate-50">Login</button>
                <button className="rounded-md"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg></button>
            </div>
        </nav>
    )
}