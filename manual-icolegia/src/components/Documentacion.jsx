import React from 'react'
import ZonaGenerarDoc from './ApartadoDocumentacion/ZonaGenerarDoc'
import GenerarDocumentacion from './ApartadoDocumentacion/GenerarDocumentacion'
import AdjuntarDoc from './ApartadoDocumentacion/AdjuntarDoc'

function Documentacion() {
  return (
    <div className="  px-4 py-8 flex flex-col gap-8">
      <h1 className="text-5xl font-semibold text-blue-700 mb-8 ml-45 ">Manual de Uso - Documentación</h1>
        <ZonaGenerarDoc />
        <GenerarDocumentacion />
        <AdjuntarDoc />
    </div>
  )
}

export default Documentacion

