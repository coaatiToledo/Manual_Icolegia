import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white  px-4  mt-10  py-8">
      <nav className="flex  justify-around w-full">
        <a href="https://www.coaatietoledo.org/ " className='hover:text-blue-600'>Enlace coaatietoledo</a>
        <a href="https://icolegia.coaatietoledo.org:444/" className='hover:text-blue-600'>Enlace AppIcolegia</a>
        <a
          href="mailto:administracion@coaatietoledo.org"
          className='hover:text-blue-600'
        >
           ✉️ administracion@coaatietoledo.org
        </a>
        <p className='hover:text-blue-600 cursor-pointer'>
        📞925-222.818 
      </p>

      </nav>
    </footer>
  );
}

export default Footer;
