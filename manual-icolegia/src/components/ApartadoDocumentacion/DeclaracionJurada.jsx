import React from "react";

function DeclaracionJurada() {
  return (
    <div>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
        <li>
          <strong>Paso1:</strong> En Declaración Jurada haz clic izquierdo en la
          flecha de la derecha
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-5img1.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          <strong>Paso 2: </strong>indica los documentos en los que no se tienen
          la firma de la propiedad y declaramos que obra en nuestro poder, por
          ello se presenta esta declaración jurada
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-5img2.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          <strong>Paso 3:</strong> Introduce la fecha y genera el archivo.
          <p>⚠️ Si no introduces la fecha, el sistema generará un error.</p>
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-5img3.png" alt="generarDoc" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DeclaracionJurada;
