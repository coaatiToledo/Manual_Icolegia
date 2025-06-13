import React from "react";

function AdjuntarDoc() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">3. Adjuntar documentación</h2>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
        <li>
          <strong>Paso 1: </strong>Haz clic en el botón "Adjuntar" se encuentra
          casi al principio de la página.
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado3img1.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          <strong>Paso 2: </strong>En la ventana emergente
          <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
            <li>Sube los documentos</li>
            <li>
              • Añade observaciones, si lo deseas, no es obligatorio, pero
              siempre puede ayudar a la hora del trámite del expediente por
              parte del colegio.
            </li>
          </ol>
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado3img2.png" alt="generarDoc" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AdjuntarDoc;
