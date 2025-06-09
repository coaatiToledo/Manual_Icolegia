import React from 'react'
import NuevoExpediente from './ApartadosExpediente/NuevoExpediente'
import NuevoAgente from './ApartadosExpediente/NuevoAgente'

function Expediente() {
  const [mostrarAgente, setMostrarAgente] = React.useState(false);

  return (
    <div className="px-4 py-8">
      {!mostrarAgente ? (
        <NuevoExpediente onAgenteClick={() => setMostrarAgente(true)} />
      ) : (
        <NuevoAgente onVolverClick={() => setMostrarAgente(false)} />
      )}
    </div>
  )
}

export default Expediente
