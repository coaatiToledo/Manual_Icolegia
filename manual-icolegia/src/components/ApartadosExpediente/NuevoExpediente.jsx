import React from 'react'

function NuevoExpediente({ onAgenteClick }) {
  return (
    <div>
      <h2 className="text-5xl font-semibold text-blue-700 mb-4 ml-40" >Crear un nuevo expediente digital</h2>
      <p className="mb-4 text-2xl">
        Antes de crear un Nuevo Expediente Digital es recomendable dar de alta los nuevos Agentes (Propietario, promotor, autor de encargo, arquitecto, etc…).
        Pulse en el botón si quiere ver cómo dar de alta un nuevo agente.
      </p>

      <button
        className='bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 cursor-pointer text-lg mb-10'
        onClick={onAgenteClick}
      >
        Agente
      </button>

      <p className='mb-4 text-2xl'> Una vez tengamos el Agente creado, desde el <strong>Menú Principal &gt; Expedientes &gt; Nuevo Expediente Digital</strong>.</p>
      <div className='mt-5 ml-25'><img src="/nuevoExpedienteImgs/nuevoExp.png" alt="" /></div>
      <p className="mb-4 text-2xl mt-1">
        Se abre el asistente para introducir los datos necesarios. Para pasar al siguiente paso hay que pulsar en 
        <strong> SIGUIENTE</strong>. <br /> No es necesario pulsar guardar en cada punto, aunque es recomendable hacerlo por si 
        caduca la sesión. <br />
        Los campos marcados con <strong>*</strong> son obligatorios.
      </p>
         <section>
       
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Paso 1   Gestión solicitada:</strong> Selecciona la opción deseada y pulsa <strong>Siguiente</strong>.</li>
          <li><strong>Paso 2   Datos del trabajo:</strong> Completa tipo de trabajo y emplazamiento.</li>
          <li><strong>Paso 3   Colegiados:</strong> Introduce datos de técnicos, porcentajes, seguros y doble condición si aplica.</li>
          <li><strong>Paso 4   Agentes:</strong> Introduce datos de propietario, cliente y autor del proyecto.</li>
          <li><strong>Paso 5   Estadística:</strong> Introduce clase de promotor y superficies (sin decimales).</li>
          <li><strong>Paso 6   Otras gestiones:</strong> Para solicitar gestión de honorarios.</li>
          <li><strong>Paso 7   Observaciones:</strong> Notas adicionales que no se puedan incluir en otros apartados.</li>
        </ul>     
        <p className="mb-4">
          ⚠️ Si falta algún dato obligatorio, se mostrará un aviso en un panel rojo indicando qué punto debes corregir.
        </p>
      </section>
    </div>
  )
}

export default NuevoExpediente