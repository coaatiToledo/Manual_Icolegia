import React from 'react'

function Header() {
  return (
    <header className="flex flex-col justify-between items-center gap-3 h-100 mb-3  bg-white  ">
     <img src="/logo-icolegia.png" alt="" className='w-70 mt-6  p-3 shadow-2xl shadow-black   rounded-[15%] bg-white'  />
      <p className="mt-5  text-center text-black text-3xl font-bold">
        Bienvenido al manual de usario de <span className='text-4xl'>CoaatieToledo</span>
        <br />pincha en las pestañas de abajo para acceder a los disntintos apartados
      </p>
      
        <nav className='bg-black text-amber-50 w-full flex justify-around mt-2  py-2.5'  >
         <a href="https://www.coaatietoledo.org/ " className='hover:text-blue-600'> www.coaatietoledo.org</a>
        <a href="https://icolegia.coaatietoledo.org:444/" className='hover:text-blue-600'>Icolegia</a>
        <a
          href="https://www.coaatietoledo.org/contacta/"
          className='hover:text-blue-600'
        >
           ✉️ Contacta con nosotros
        </a>
        <p className='hover:text-blue-600 cursor-pointer'>
        📞925-222.818 
      </p>
      </nav>
      
    </header>
  );
}

export default Header;
