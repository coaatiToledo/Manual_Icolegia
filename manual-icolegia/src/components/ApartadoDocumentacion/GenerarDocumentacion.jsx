import React, { useState } from "react";
import SolicitudGastos from "./SolicitudGastos";
import LibroIncidencias from "./LibroIncidencias";

function GenerarDocumentacion() {
  const [mostrarGastos, setMostrarGastos] = useState(false);
  const [mostrarLibro, setMostrarLibro] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        2.Generación de documentos
      </h2>

      {/* Gastos */}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">
          2.1 Solicitud de Gestión de Gastos de Tramitación
        </h3>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setMostrarGastos((v) => !v)}
        >
          {mostrarGastos ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarGastos && (
        <>
          <SolicitudGastos />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setMostrarGastos(false)}
          >
            Cerrar
          </button>
        </>
      )}

      {/* Libro de incidencias */}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">
          2.3 Solicitud de Libro de Incidencias (
          <span className="text-blue-500">
            si se quiere el libro de incidencias es obligatorio presentarlo
          </span>
          )
        </h3>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setMostrarLibro((v) => !v)}
        >
          {mostrarLibro ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarLibro && (
        <>
          <LibroIncidencias />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setMostrarLibro(false)}
          >
            Cerrar
          </button>
        </>
      )}
    </div>
  );
}

export default GenerarDocumentacion;
