import React from "react";

function ZonaGenerarDoc() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        1. Acceso a la Zona de generar documentación
      </h2>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl">
        <li>
          <strong>Paso 1:</strong> Una vez los datos se guarden sin ningún
          error, haz clic en el ícono de la nube situado arriba a la izquierda.
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/zonagenerardoc.png" alt="generarDoc" loading="lazy"/>
          </div>
        </li>
        <li>
          <strong>Paso 2: </strong> Desplázate hacia abajo con la rueda del
          ratón hasta encontrar las plantillas de documentos{" "}
           <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/paso1.png" alt="generarDoc" loading="lazy"/>
          </div>
        </li>
      </ul>
     
    </div>
  );
}

export default ZonaGenerarDoc;
