import React from 'react'
import ZonaGenerarDoc from './ApartadoDocumentacion/ZonaGenerarDoc'
import GenerarDocumentacion from './ApartadoDocumentacion/GenerarDocumentacion'

function Documentacion() {
  return (
    <div className="  px-4 py-8">
      <h1 className="text-5xl font-semibold text-blue-700 mb-8 ml-45 ">Manual de Uso - Documentación</h1>
        <ZonaGenerarDoc />
        <GenerarDocumentacion />

  
      <section className="mt-10">

        {/* Subapartado 3.2 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">4.2 Solicitud de Libro de Incidencias</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Selecciona la opción de solicitud.</li>
            <li>Introduce director de obra, de ejecución y fecha.</li>
            <li>Selecciona formato "En papel" y haz clic en "Generar PDF".</li>
          </ul>
        </div>

        {/* Subapartado 3.3 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">4.3 Minuta</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Accede al apartado Minuta.</li>
            <li>Introduce los datos y genera el documento.</li>
          </ul>
        </div>

        {/* Subapartado 3.4 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">4.4 Solicitud de Visado</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Indica fecha y marca las intervenciones.</li>
            <li>Selecciona "Generar solicitud del cliente" o "del promotor" según aplique.</li>
          </ul>
        </div>

        {/* Subapartado 3.5 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">4.5 Declaración Jurada</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Accede a la opción y declara los documentos sin firma.</li>
            <li>Introduce la fecha y genera el archivo.</li>
          </ul>
        </div>

        {/* Subapartado 3.6 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">4.6 Descarga de documentos autocompletados</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ve a "Plantilla Documentos" y haz clic en los botones azules para descargar.</li>
            <li>Recuerda firmar digitalmente los documentos que lo requieran.</li>
          </ul>
        </div>
      </section>

      {/* Sección 5 */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">5. Adjuntar documentación</h2>
        <ol className="list-decimal list-inside text-gray-800 space-y-3">
          <li>
            Haz clic en el botón <strong>"Adjuntar"</strong>, ubicado al principio de la página del expediente.
          </li>
          <li>
            En la ventana emergente, selecciona y sube los documentos requeridos. Puedes añadir observaciones opcionales.
            <p className="text-sm text-gray-600 mt-1">⚠️ Asegúrate de que cada archivo tenga un nombre distinto para evitar errores.</p>
          </li>
          <li>
            Los documentos se suben de 5 en 5. Adjunta los primeros y repite el proceso si hay más.
          </li>
          <li>
            Si no ves correctamente los documentos subidos, ajusta el zoom con <kbd>Ctrl</kbd> + rueda del ratón.
          </li>
          <li>
            Una vez cargados todos los documentos necesarios, el botón con el icono de avión se pondrá verde. Haz clic para enviar.
          </li>
          <li>
            Confirma el envío en la ventana emergente. El expediente pasará a estado <strong>"En trámite"</strong> y será visible en <strong>Expediente &gt; Borradores</strong>.
          </li>
        </ol>
        <p className="text-sm text-gray-600 mt-4">
          ⚠️ Algunos documentos aparecen como recomendados pero son obligatorios según el tipo de intervención.
        </p>
      </section>
    </div>
  )
}

export default Documentacion

