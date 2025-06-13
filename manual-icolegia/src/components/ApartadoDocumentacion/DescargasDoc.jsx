import React from "react";

function DescargasDoc() {
  return (
    <div>
      <p className="text-2xl ml-15 ">
        Estos documentos se generan con la información que hemos aportado a la
        hora de rellenar la base de datos y no tenemos que indicar ningún otro
        dato. <br />
        Siempre son obligatorios{" "}
        <strong>NOTA DE ENCARGO Y COMUNICACIÓN AL AYUNTAMIENTO</strong>
      </p>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl mt-7">
        <li>
          <strong>paso1:</strong> Baja hasta la sección "Plantilla Documentos".
          <div>
            <img
              src="/GenerarDocImg/apartado2-6img1.png"
              alt="generarDoc"
              className="mt-5 ml-5 mb-5"
            />
          </div>
        </li>
        <li>
          <strong>paso2:</strong> Haz clic en los botones azules a la derecha
          para descargar los documentos.
          <div>
            <img
              src="/GenerarDocImg/apartado2-6img2.png"
              alt="generarDoc"
              className="mt-5 ml-5 mb-5"
            />
          </div>
          <p>
            ⚠️Importante, una vez generado los documentos, el colegiado debe
            <strong>firmarlo digitalmente</strong> en los documentos que le corresponda firmar{" "}
          </p>
        </li>
        
      </ul>
    </div>
  );
}

export default DescargasDoc;
