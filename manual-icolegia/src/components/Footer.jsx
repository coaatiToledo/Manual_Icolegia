import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white  px-4  mt-10 flex justify-center items-center py-8">
      <nav className="flex  justify-around w-4xl">
        <a href="https://www.coaatietoledo.org/">Enlace coaatietoledo</a>
        <a href="https://icolegia.coaatietoledo.org:444/">Enlace AppIcolegia</a>
        <a
          href="mailto:administracion@coaatietoledo.org"
          className=""
        >
           ✉️ administracion@coaatietoledo.org
        </a>
        <p className="">
        📞925-222.818 
      </p>

      </nav>
    </footer>
  );
}

export default Footer;
