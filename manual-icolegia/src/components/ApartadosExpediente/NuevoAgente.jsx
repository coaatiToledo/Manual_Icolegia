import React from 'react'

function NuevoAgente({ onVolverClick }) {
    const handleVolver = () => {
    onVolverClick();
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };
  return (
    <section className="mb-12">
      
      <ul className='list-disc list-inside space-y-2 mb-4 mt-10 ml-10'>
        <li className="mb-4 text-2xl">
          El colegiado dispone de una base de datos para sus clientes, propietarios, promotores, 
          representantes, etc. Podrá darlo de alta desde el <strong>Menú Principal &gt; Agentes &gt; Nuevo</strong>.
          <div className='mt-5 ml-20'><img src="/nuevoExpedienteImgs/newAgente1.png" alt="Imagen de ejemplo"  /></div>
        </li>
        <li className="mb-4 text-2xl">
          Deberá cumplimentar los datos obligatorios, marcados con <strong>*</strong>, y pulsar <strong>GUARDAR AGENTE</strong>.
          <div className='mt-5 ml-20'><img className='' src="/nuevoExpedienteImgs/panelAgente.png" alt="panelAgente" /></div>
        </li>
      </ul>
      <button
        className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer mb-4'
        onClick={handleVolver}
      >
        Volver
      </button>
    </section>
  )
}

export default NuevoAgente