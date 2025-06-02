import React from 'react'

function Expediente() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      

      {/* Sección 1 */}
      <section className="mb-12">
        <h2 className="text-5xl font-semibold text-blue-700 mb-4">1. Crear un nuevo agente Digital</h2>
        <p className="mb-4 text-2xl">
          Antes de crear un Nuevo Expediente Digital es recomendable dar de alta los nuevos Agentes 
          (Propietario, promotor, autor de encargo, arquitecto, etc…).
        </p>
        <ul className='list-disc list-inside space-y-2 mb-4'>
          <li className="mb-4 text-2xl">
              El colegiado dispone de una base de datos para sus clientes, propietarios, promotores, 
              representantes, etc. Podrá darlo de alta desde el <strong>Menú Principal &gt; Agentes &gt; Nuevo</strong>.
              <div><img src="newAgente1.png" alt="Imagen de ejemplo" className="inline-block w-64 h-auto ml-2" /></div>
          </li>

          <li className="mb-4 text-2xl">
            Deberá cumplimentar los datos obligatorios, marcados con <strong>*</strong>, y pulsar <strong>GUARDAR AGENTE</strong>.
          </li>


        </ul>
      </section>

      {/* Sección 2 */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">2. Crear un nuevo expediente digital</h2>
        <p className="mb-4">
          Desde el <strong>Menú Principal &gt; Expedientes &gt; Nuevo Expediente Digital</strong>. 
          Los campos marcados con <strong>*</strong> son obligatorios.
        </p>
        <p className="mb-4">
          Se abre el asistente para introducir los datos necesarios. Para pasar al siguiente paso hay que pulsar en 
          <strong> SIGUIENTE</strong>. No es necesario pulsar guardar en cada punto, aunque es recomendable hacerlo por si 
          caduca la sesión.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Paso 1 – Gestión solicitada:</strong> Selecciona la opción deseada y pulsa <strong>Siguiente</strong>.</li>
          <li><strong>Paso 2 – Datos del trabajo:</strong> Completa tipo de trabajo y emplazamiento.</li>
          <li><strong>Paso 3 – Colegiados:</strong> Introduce datos de técnicos, porcentajes, seguros y doble condición si aplica.</li>
          <li><strong>Paso 4 – Agentes:</strong> Introduce datos de propietario, cliente y autor del proyecto.</li>
          <li><strong>Paso 5 – Estadística:</strong> Introduce clase de promotor y superficies (sin decimales).</li>
          <li><strong>Paso 6 – Otras gestiones:</strong> Para solicitar gestión de honorarios.</li>
          <li><strong>Paso 7 – Observaciones:</strong> Notas adicionales que no se puedan incluir en otros apartados.</li>
        </ul>
        <p className="mb-4">
          ⚠️ Si falta algún dato obligatorio, se mostrará un aviso en un panel rojo indicando qué punto debes corregir.
        </p>
      </section>
    </div>
  )
}

export default Expediente
