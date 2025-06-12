import React from "react";

function GenerarDocumentacion() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        2.Generación de documentos
      </h2>
      <h3 className="text-2xl font-semibold mb-4 ml-5">
        2.1 Solicitud de Gestión de Gastos de Tramitación
      </h3>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl">
        <li>
          <strong>Paso 1:</strong> haz clic izquierdo en la flecha de la derecha
          para acceder a las opciones de solicitud de gestión de gastos
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2Img1.png" alt="apartado2Img1" />
          </div>
          <ul>
            <li></li>
          </ul>
        </li>
        <li>
          <strong>Paso 2: </strong> Desplázate hacia abajo con la rueda del
          ratón hasta encontrar las plantillas de documentos{" "}
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/paso1.png" alt="generarDoc" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default GenerarDocumentacion;
