import React, { useState } from "react";
import Incdocumental from "./ApartadoIncidencias/Incdocumental";
import Incendatos from "./ApartadoIncidencias/Incendatos";
function Incidencias() {
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mostrarDocumental, setMostrarDocumental] = useState(false);

  return (
    <div className="px-4 py-8 flex flex-col gap-8 bg-blue-100">
      <h1 className="text-5xl font-semibold text-sky-700 mb-8 ml-45 text-center ">
        Resolución de incidencias
      </h1>

      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-4xl font-semibold">1.Incidencia en los datos</h2>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
          onClick={() => setMostrarDatos((v) => !v)}
        >
          {mostrarDatos ? "Cerrar" : "Ver"}
        </button>
      </div>
      {mostrarDatos && (
        <>
          <Incendatos />
          <button
            className="ml-2 mb-8 px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
            onClick={() => setMostrarDatos(false)}
          >
            Cerrar
          </button>
        </>
      )}

      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-4xl font-semibold">2.Incidencia documental</h2>
        <button
          className="px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-500"
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
      <p className="text-3xl  font-normal">
        Tras la revisión de la documentación por el colegio, si todo es correcto
        se dará tramite al expediente y aparecerá en estado Tramitado
      </p>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl mt-7">
        <li>
          Dirígete a la sección <strong>"Expedientes" </strong>
          <span>&gt;</span> <strong>"Últimos Trámites"</strong>.
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado3img1.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          Haz clic en la nube.
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado3img2.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          En el recuadro azul de la imagen aparecerán los documentos visados con
          el sello del Colegio que podemos descargar.
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado3img3.png" alt="generarDoc" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Incidencias;
