import React, { useState } from "react";
import SolicitudGastos from "./SolicitudGastos";
import LibroIncidencias from "./LibroIncidencias";
import Minuta from "./Minuta";
import SolicitudVisado from "./SolicitudVisado";
import DeclaracionJurada from "./DeclaracionJurada";
import DescargaDoc from "./DescargasDoc";

function GenerarDocumentacion() {
  const [mostrarGastos, setMostrarGastos] = useState(false);
  const [mostrarLibro, setMostrarLibro] = useState(false);
  const [mostrarminuta, setMostrarMinuta] = useState(false);
  const [mostrarsolicitudvisado, setMostrarvisado] = useState(false);
  const [mostrarsdeclaracionjurada, setMostrardeclaracion] = useState(false);
  const [mostrarsdeDescargaDoc, setMostrarDescargaDoc] = useState(false);

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
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrarGastos((v) => !v)}
        >
          {mostrarGastos ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarGastos && (
        <>
          <SolicitudGastos />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
            onClick={() => setMostrarGastos(false)}
          >
            Cerrar
          </button>
        </>
      )}

      {/* Libro de incidencias */}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">
          2.2 Solicitud de Libro de Incidencias (
          <span className="text-sky-700">
            si se quiere el libro de incidencias es obligatorio presentarlo
          </span>
          )
        </h3>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrarLibro((v) => !v)}
        >
          {mostrarLibro ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarLibro && (
        <>
          <LibroIncidencias />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
            onClick={() => setMostrarLibro(false)}
          >
            Cerrar
          </button>
        </>
      )}

      {/* Minuta*/}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">
          2.3 Minuta (
          <span className="text-sky-700">
            si se quieren cobrar los honorarios a través del colegio es
            obligatorio presentarlo.
          </span>
          )
        </h3>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrarMinuta((v) => !v)}
        >
          {mostrarminuta ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarminuta && (
        <>
          <Minuta />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
            onClick={() => setMostrarMinuta(false)}
          >
            Cerrar
          </button>
        </>
      )}

      {/* Solicitud de Visado */}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">2.4 Solicitud de Visado</h3>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrarvisado((v) => !v)}
        >
          {mostrarsolicitudvisado ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarsolicitudvisado && (
        <>
          <SolicitudVisado />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setMostrarvisado(false)}
          >
            Cerrar
          </button>
        </>
      )}

      {/* Declaración Jurada */}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">2.5 Declaración Jurada</h3>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrardeclaracion((v) => !v)}
        >
          {mostrarsdeclaracionjurada ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarsdeclaracionjurada && (
        <>
          <DeclaracionJurada />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
            onClick={() => setMostrardeclaracion(false)}
          >
            Cerrar
          </button>
        </>
      )}

      {/* Descarga de Documentos */}
      <div className="flex items-center mb-4 ml-5 gap-4">
        <h3 className="text-3xl font-semibold m-0">
          2.6 Descarga de Documentos autocompletados(
          <span className="text-sky-700">
            Nota de Encargo, Comunicación al Ayuntamiento, Contrato, Novación…
          </span>
          )
        </h3>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrarDescargaDoc((v) => !v)}
        >
          {mostrarsdeDescargaDoc ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarsdeDescargaDoc && (
        <>
          <DescargaDoc />
          <button
            className="ml-5 mb-8 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
            onClick={() => setMostrarDescargaDoc(false)}
          >
            Cerrar
          </button>
        </>
      )}
    </div>
  );
}

export default GenerarDocumentacion;
