import React from "react";

function SolicitudVisado() {
  return (
    <div>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
        <li>
          <strong>Paso 1:</strong> En Solicitud Visado haz clic izquierdo en la
          flecha de la derecha.
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-4img1.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          <strong>Paso 2:</strong> Introduce la fecha y marca las intervenciones
          para los que solicitas el visado
          <p>
            ⚠️ Si no introduces la fecha, no se descargará el archivo.
          </p>
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-4img2.png" alt="generarDoc" />
          </div>
        </li>
        <li>
          <strong>Paso 3:</strong>Marcamos la opción deceada y genera la solicitud de Visado Voluntario
          <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
            <li>
              Si hay cliente, selecciona "Generar solicitud de cliente". 
              <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-4img3.png" alt="generarDoc" />
          </div>
            </li>

            <li>
              Si no hay cliente, selecciona "Generar solicitud de proveedor".
               <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado2-4img4.png" alt="generarDoc" />
          </div>
            </li>

          </ol>
        </li>
      </ul>
    </div>
  );
}

export default SolicitudVisado;
