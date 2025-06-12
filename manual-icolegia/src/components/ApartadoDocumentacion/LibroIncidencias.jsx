import React from 'react'

function LibroIncidencias() {
  return (
    <div id="libro-incidencias" className="mt-10">
       
        <p className="text-2xl ml-15 font-bold">
          Se debe haber indicado en el apartado de solitud de gestión de gastos
          en conceptos{" "}
        </p>
        <div className="mt-5 ml-5 mb-5">
          <img src="/GenerarDocImg/apartado2-2img1.png" alt="generarDoc" />
        </div>
        <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
          <li>
            <strong>Paso 1:</strong>En Solicitud Libro de Incidencias haz clic
            izquierdo en la flecha de la derecha
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2-2img2.png" alt="generarDoc" />
            </div>
          </li>
          <li>
            <strong>Paso2: </strong>Cumplimentamos los datos 
              <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
              <li>
               Director de Ejecución de Materiales (obligatorio cumplimentarlo)
              </li>
              <li>
                Director de Obra (obligatorio cumplimentarlo)
              </li>
               <li>
                Fecha (obligatoria para generar el PDF)
              </li>
              <li>
               	En Formato marcamos la opción de En papel (por el momento no hay digital)
              </li>
            </ol>
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2-2img3.png" alt="generarDoc" />
            </div>
          </li>

          <li>
            <strong>Paso3: </strong>Haz clic en "Generar PDF".
             <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2-2img4.png" alt="generarDoc" />
            </div>
          </li>

        </ul>
      </div>
  )
}

export default LibroIncidencias