import React from 'react'
import ZonaGenerarDoc from './ApartadoDocumentacion/ZonaGenerarDoc'
import GenerarDocumentacion from './ApartadoDocumentacion/GenerarDocumentacion'
import AdjuntarDoc from './ApartadoDocumentacion/AdjuntarDoc'

function Documentacion() {
  const initialScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="  px-4 py-8 flex flex-col gap-8 bg-blue-100">
      <h1 className="text-5xl font-semibold text-sky-700 mb-8 ml-45 text-center">Generar y Enviar Documentación</h1>
        <ZonaGenerarDoc />
        <GenerarDocumentacion />
        <AdjuntarDoc />
         <button
          className="bg-sky-700 text-white px-2 py-2 rounded-lg hover:bg-sky-500 cursor-pointer mb-4 w-35"
          onClick={initialScroll}
        >
          {" "}
          Volver al inicio{" "}
        </button>
    </div>
  )
}

export default Documentacion

