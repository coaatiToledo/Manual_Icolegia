import React from "react";

function Incendatos() {
  return (
    <div>
      <p className="text-2xl ml-15 font-normal">
        Esta ocurre cuando se ha introducido algún dato erróneo en la Base de
        Datos. Una vez revisado el expediente, si existen incidencias, el
        sistema enviará una notificación por correo electrónico, con las
        incidencias detectadas para que estas sean subsanadas.{" "}
      </p>
      <h3 className="text-4xl ml-15 font-bold mt-10">
        Como subsanar una incidencia:
      </h3>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl">
        <li>
          Despliega la pestaña de <strong>Expediente</strong> y haz clic en el apartado de
          <strong>Requeridos</strong>, para ver la incidencia con el informe de incidencia
           <div className="mt-5 ml-5 mb-5">
              <img src="./IncidenciasImg/apartado1img1.png" alt="generarDoc" />
            </div>
        </li>

      </ul>
    </div>
  );
}

export default Incendatos;
