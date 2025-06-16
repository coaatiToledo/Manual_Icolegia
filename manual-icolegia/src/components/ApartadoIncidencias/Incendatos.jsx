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
      <h3 className="text-3xl ml-15 font-bold mt-10">
        Como subsanar una incidencia:
      </h3>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl mt-7">
        <li>
          Despliega la pestaña de <strong>Expediente</strong> y haz clic en el apartado de {" "}
          <strong>Requeridos</strong>, para ver la incidencia con el informe de incidencia
           <div className="mt-5 ml-5 mb-5">
              <img src="./IncidenciasImg/apartado1img1.png" alt="generarDoc" />
            </div>
        </li>
        <li>
          Identifica el expediente por su código digital, pincha en el icono amarillo para ver la incidencia
          <div className="mt-5 ml-5 mb-5 px-5">
              <img src="./IncidenciasImg/apartado1img2.png" alt="generarDoc" />
            </div>
        </li>

        <li>
          Descarga el PDF con el detalle de la incidencia haciendo clic en Incidencias.pdf 
          <div className="mt-5 ml-5 mb-5 px-5   ">
              <img src="./IncidenciasImg/apartado1img3.png" alt="generarDoc" />
              <img src="./IncidenciasImg/apartado1img4.png" alt="" className="mt-7.5" />
            </div>
        </li>
        <li>
          Haz clic en el <strong>lápiz</strong> del expediente para modificar los datos necesarios.
           <div className="mt-5 ml-5 mb-5 px-5">
              <img src="./IncidenciasImg/apartado1img5.png" alt="generarDoc" />
            </div>
        </li>
        <li>
         Ve al apartado donde están los datos a modificar y Guarda los cambios  
         <div className="mt-5 ml-5 mb-5 px-5">
              <img src="./IncidenciasImg/apartado1img6.png" alt="generarDoc" />
            </div>
        </li>
        <li>
          Vuelve a generar los documentos requeridos 
          <div className="mt-5 ml-5 mb-5 px-5">
              <img src="./IncidenciasImg/apartado1img7.png" alt="generarDoc" />
            </div>
        </li>
        <li>
          	Adjunta los documentos igual que la primera vez 
             <div className="mt-5 ml-5 mb-5 px-5">
              <img src="./IncidenciasImg/apartado1img8.png" alt="generarDoc" />
              <img src="./IncidenciasImg/apartado1img9.png" alt="generarDoc" className="mt-9" />
            </div>
        </li>
        <li>
          Volvemos a enviar en el botón verde del avión
          <div className="mt-5 ml-5 mb-5 px-5">
              <img src="./IncidenciasImg/apartado1img10.png" alt="generarDoc" />
            </div>
        </li>
      </ul>
    </div>
  );
}

export default Incendatos;
