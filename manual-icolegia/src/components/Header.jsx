import React from 'react'

function Header() {
  return (
    <header className="flex flex-col items-center justify-around py-8 bg-gray-500 h-80 mb-3">
      <img
        src="logoIcolegia.png"
        alt="Descripción de la imagen"
        className="  object-cover rounded-full shadow-md    "
      />
      <p className="mt-5  text-center text-white text-3xl">
        Bienvenido al manual de usario de <span className='text-4xl'>CoaatieToledo</span>
        <br />pincha en las pestañas de abajo para acceder a los dintintos apartados
      </p>
    </header>
  );
}

export default Header;
