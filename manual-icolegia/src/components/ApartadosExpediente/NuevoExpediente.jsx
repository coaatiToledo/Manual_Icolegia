import React from "react";

function NuevoExpediente({ onAgenteClick }) {
  const initialScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-sky-700 mb-4 ml-40 text-center">
        Crear un nuevo expediente digital 
      </h2>
      <p className="mb-4 text-2xl">
        Antes de crear un Nuevo Expediente Digital es recomendable dar de alta
        los nuevos Agentes (Propietario, promotor, autor de encargo, arquitecto,
        etc…). Pulse en el botón si quiere ver cómo dar de alta un nuevo agente.
      </p>

      <button
        className="bg-sky-700 text-white px-5 py-2 rounded-lg hover:bg-sky-500 cursor-pointer text-lg mb-10"
        onClick={onAgenteClick}
      >
        Agente
      </button>

      <p className="mb-4 text-2xl">
        Una vez tengamos el Agente creado, desde el
        <strong> Menú Principal &gt; Expedientes &gt; Nuevo Expediente Digital</strong>.
      </p>
      <div className="mt-5 ml-25 mb-10">
        <img src="/nuevoExpedienteImgs/nuevoExp.png" alt="" loading="lazy" />
      </div>

      <p className="mb-4 text-2xl mt-1">
        &nbsp; Se abre el asistente para introducir los datos necesarios. Para
        pasar al siguiente paso hay que pulsar en <strong>SIGUIENTE</strong>.<br />
        NO es necesario pulsar <strong>GUARDAR</strong> en cada punto, aunque es recomendable guardar
        el expediente, no dejarlo hasta el final, por si se caduca el tiempo de
        sesión tras X tiempo inactivo. &nbsp;Los campos marcados con <strong>*</strong> son obligatorios.
      </p>

      <section className="mt-20">
        <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl">
          <li>
            <strong>Paso 1 Gestión solicitada:</strong> En este paso se debe
            seleccionar la opción necesaria para gestionar el Expediente,
            después <strong>SIGUIENTE</strong>.
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso1.png" alt="paso1" loading="lazy" />
            </div>
          </li>

          <li>
            <strong>Paso 2 Datos del trabajo:</strong> Completa tipo de trabajo y emplazamiento después SIGUIENTE.
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso2.png" alt="paso2" loading="lazy" />
            </div>
          </li>

          <li>
            <strong>Paso 3 Colegiados:</strong> Seleccionar y escribir el porcentaje después <strong>SIGUIENTE</strong>.
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso3.png" alt="paso3" loading="lazy" />
            </div>
            <p>
              En el punto 1 de <strong>COLEGIADOS</strong>... después Aceptar.
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img1paso3.png" alt="paso3-punto1" loading="lazy" />
            </div>
            <p>
              En el punto 2 de <strong>COLEGIADOS</strong>... Después Aceptar. <strong>(4)</strong>
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img2paso3.png" alt="" loading="lazy" />
            </div>
            <p>
              La suma de todos los porcentajes no puede superar el 100 %.
              En el punto 3 de <strong>COLEGIADOS</strong> es para eliminar colegiados.
            </p>
          </li>

          <li>
            <strong>Paso 4 Agentes: PROPIETARIO/PROMOTOR:</strong>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso4.png" alt="paso4" loading="lazy" />
            </div>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img1paso4.png" alt="img1paso4" loading="lazy" />
            </div>
            <p>
              <strong>CLIENTE:</strong> ... <strong>NUEVO +</strong>.
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img2paso4.png" alt="img2paso4" loading="lazy" />
            </div>
            <p>
              <strong>AUTOR DEL PROYECTO Y DIRECTOR DE OBRA:</strong> ...
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img3paso4.png" alt="img4paso4" loading="lazy" />
            </div>
            <p>
              En el <strong>botón rojo de aspas</strong> es posible eliminar el propietario/cliente o autor.
            </p>
          </li>

          <li>
            <strong>Paso 5 Estadística:</strong>
            <p>
              ... <strong>La suma de la superficie total construida debe ser igual...</strong>
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso5.png" alt="paso5" loading="lazy" />
            </div>
          </li>

          <li>
            <strong>Paso 6 Otras gestiones:</strong>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso6.png" alt="paso6" loading="lazy" />
            </div>
          </li>

          <li>
            <strong>Paso 7 Observaciones:</strong>
            <div className="mt-5 mb-5">
              <img src="nuevoExpedienteImgs/paso7.png" alt="paso7" loading="lazy" />
            </div>
            <p>
              <strong>GUARDAR. SE ACONSEJA GUARDAR ANTERIORMENTE TAMBIÉN.</strong>
            </p>
            <p className="mb-4">
              ⚠️ EN CASO DE FALTAR ALGÚN DATO... IR AL PUNTO INDICADO Y RESOLVER EL ERROR.
            </p>
            <div className="mt-5 mb-5">
              <img src="nuevoExpedienteImgs/img1paso7.png" alt="Paso7img1" loading="lazy" />
            </div>
          </li>
        </ul>

        <button
          className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-500 cursor-pointer mb-4"
          onClick={initialScroll}
        >
          Volver al inicio
        </button>
      </section>
    </div>
  );
}

export default NuevoExpediente;

