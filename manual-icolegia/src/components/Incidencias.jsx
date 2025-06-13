import React, { useState } from 'react'
import Incdocumental from './ApartadoIncidencias/Incdocumental'
import Incendatos from './ApartadoIncidencias/Incendatos'
function Incidencias() {
  const [mostrarDatos, setMostrarDatos] = useState(false)
  const [mostrarDocumental, setMostrarDocumental] = useState(false)

  return (
    <div>
      <h1 className="text-5xl font-semibold text-blue-700 mb-8 ml-45 ">
        Resolución de incidencias
      </h1>

      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-5xl font-semibold">1.Incidencia en los datos</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setMostrarDatos((v) => !v)}
        >
          {mostrarDatos ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarDatos && (
        <>
          <Incendatos />
          <button
            className="ml-2 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setMostrarDatos(false)}
          >
            Cerrar
          </button>
        </>
      )}

      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-4xl font-semibold">2.Incidencia documental</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setMostrarDocumental((v) => !v)}
        >
          {mostrarDocumental ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarDocumental && (
        <>
          <Incdocumental />
          <button
            className="ml-2 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setMostrarDocumental(false)}
          >
            Cerrar
          </button>
        </>
      )}
    </div>
  )
}

export default Incidencias