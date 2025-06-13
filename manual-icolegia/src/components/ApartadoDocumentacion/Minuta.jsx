import React from 'react'

function Minuta() {
  return (
    <div>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
        <li>
          <strong>Paso1:</strong> En Minuta haz clic izquierdo en la flecha de la derecha.
          <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2-3img1.png" alt="generarDoc" />
            </div>
          </li>
          <li>
          <strong>Paso 2: </strong>Cumplimenta los datos y genera la minuta.
           <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2-3img2.png" alt="generarDoc" />
            </div>
          </li>
      </ul>
    </div>
  )
}

export default Minuta