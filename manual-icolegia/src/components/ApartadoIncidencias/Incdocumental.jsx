import React from "react";

function Incdocumental() {
  return (
    <div>
      <p className="text-2xl ml-15 font-normal">
        Esta ocurre cuando la documentación adjuntada no es correcta o falta
        algún archivo.
      </p>
      <h3 className="text-3xl ml-15 font-bold mt-10">
        Como subsanar una incidencia:
      </h3>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl mt-7">
        <li>
          Despliega la pestaña de <strong>Expediente</strong> y haz clic en el
          apartado de <strong>Requeridos</strong> y repetimos el proceso del
          apartado anterior donde nos descargamos el pdf para ver los documentos
          que nos faltan por enviar
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado2img1.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          Una vez ya vista la incidencia pinchamos en la carpeta o nube si no
          está la carpeta
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado2img2.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          Haz clic en "Adjuntar" para subir los documentos correctos requeridos
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado2img3.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          En <strong>Observaciones</strong>, indica el nombre del documento, en{" "}
          <strong>Archivo</strong>, selecciona el documento a subir y pincha en
          adjuntar
          <div className="mt-5 ml-5 mb-5">
            <img src="./IncidenciasImg/apartado2img4.png" alt="generarDoc" />
          </div>
          <p>
            Cuando le demos al botón <strong>adjuntar</strong>, se enviará automáticamente la
            documentación ya que, en este caso, <strong>NO aparecerá el botón de enviar
            como en el otro tipo de incidencia</strong>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Incdocumental;
