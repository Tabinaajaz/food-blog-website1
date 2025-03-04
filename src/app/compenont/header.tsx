
export default function Header(){ 
  return(


<header className="text-gray-600 body-font bg-slate-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-red-300 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl font-bold">Foodies</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-900 font-bold md:text-2xl">HOME</a>
      <a href="/about" className="mr-5 hover:text-gray-900 md:text-2xl font-bold">ABOUT</a>
      <a href="/list" className="mr-5 hover:text-gray-900 md:text-2xl font-bold">List</a>
    
    </nav>
    </div>
</header>
  )};