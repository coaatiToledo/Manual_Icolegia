import React from "react";

function NuevoExpediente({ onAgenteClick }) {
    const initialScroll = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
  return (
    <div>
      <h2 className="text-5xl font-semibold text-blue-700 mb-4 ml-40">
        Crear un nuevo expediente digital
      </h2>
      <p className="mb-4 text-2xl">
        Antes de crear un Nuevo Expediente Digital es recomendable dar de alta
        los nuevos Agentes (Propietario, promotor, autor de encargo, arquitecto,
        etc…). Pulse en el botón si quiere ver cómo dar de alta un nuevo agente.
      </p>

      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 cursor-pointer text-lg mb-10"
        onClick={onAgenteClick}
      >
        Agente
      </button>

      <p className="mb-4 text-2xl">
        {" "}
        Una vez tengamos el Agente creado, desde el{" "}
        <strong>
          Menú Principal &gt; Expedientes &gt; Nuevo Expediente Digital
        </strong>
        .
      </p>
      <div className="mt-5 ml-25 mb-10">
        <img src="/nuevoExpedienteImgs/nuevoExp.png" alt="" />
      </div>
      <p className="mb-4 text-2xl mt-1">
        &nbsp; Se abre el asistente para introducir los datos necesarios. Para
        pasar al siguiente paso hay que pulsar en
        <strong> SIGUIENTE</strong>. <br /> NO es necesario pulsar{" "}
        <strong> GUARDAR</strong> en cada punto, aunque es recomendable guardar
        el expediente, no dejarlo hasta el final, por si se caduca el tiempo de
        sesión tras X tiempo inactivo. &nbsp;Los campos marcados con{" "}
        <strong>*</strong> son obligatorios.
      </p>
      <section className="mt-20">
        <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-2xl">
          <li>
            <strong>Paso 1 Gestión solicitada:</strong> En este paso se debe
            seleccionar la opción necesaria para gestionar el Expediente,
            después <strong>SIGUIENTE</strong>.
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso1.png" alt="paso1" />
            </div>
          </li>
          <li>
            <strong>Paso 2 Datos del trabajo:</strong> Completa tipo de trabajo
            y emplazamiento despues SIGUIENTE.
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso2.png" alt="paso2" />
            </div>
          </li>
          <li>
            <strong>Paso 3 Colegiados:</strong> Seleccionar y escribir el
            porcentaje y seguro de responsabilidad civil de los técnicos
            intervinientes, después <strong>SIGUIENTE.</strong>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso3.png" alt="paso3" />
            </div>
            <p>
              En el punto 1 de <strong>COLEGIADOS</strong>, se modifica el
              porcentaje de ejecución del colegiado y se escribe el nombre de su
              aseguradora de SRC. Si ejerce como Doble Condición, es decir, como
              Arquitecto Técnico y Arquitecto, debe activar dicha casilla.
              Después Aceptar.
            </p>
            <div className="mt-5 mb-5">
              <img
                src="/nuevoExpedienteImgs/img1paso3.png"
                alt="paso3-punto1"
              />
            </div>
            <p>
              En el punto 2 de <strong>COLEGIADOS</strong>, se inserta el otro
              técnico{" "}
              <strong>
                (debe estar previamente dado de alta como colegiado o
                acreditado, lo deberá encontrar en la lista)
              </strong>{" "}
              con el que comparte el trabajo,<strong> en el botón 1</strong>,
              puede filtrar por nombre en el campo <strong>BUSCAR</strong> si no
              lo encuentra, además, también deberá añadir el porcentaje{" "}
              <strong>(3)</strong> y el nombre de su aseguradora{" "}
              <strong>(2)</strong>. Si ejerce como Doble Condición, es decir,
              como Arquitecto Técnico y Arquitecto, debe activar dicha casilla.
              Después Aceptar. <strong>(4)</strong>
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img2paso3.png" alt="" />
            </div>
            <p>
              La suma de todos los porcentajes no puede superar el 100 %. <br />{" "}
              <br />
              En el punto 3 de <strong>COLEGIADOS</strong> es para eliminar
              colegiados de la intervención.
            </p>
          </li>
          <li>
            <strong>Paso 4 Agentes:PROPIETARIO/PROMOTOR:</strong> <br />
            Seleccionar el <strong>punto 1</strong> y escribir el porcentaje de
            los propietarios-promotores de la obra en la ventana siguiente. El
            dato del propietario es obligatorio. Si no está dado de alta
            previamente se puede insertar desde aquí.
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso4.png" alt="paso4" />
            </div>
            <p>
              En el <strong>punto 1</strong> de la imagen inferior, escribir el
              porcentaje en el que el propietario interviene, puede filtrar por
              nombre en el campo BUSCAR si no lo encuentra, en el caso de ser
              necesario facturar los gastos de registro/visado al propietario o
              al cliente, activar el campo Facturar <strong>punto 2</strong> y
              el <strong>punto 3</strong> ACEPTAR para guardar cambios
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/img1paso4.png" alt="img1paso4" />
            </div>
            <p>
              <strong>CLIENTE:</strong> RELLENAR SÓLO EN EL CASO DE SER DISTINTO
              DEL PROPIETARIO/PROMOTOR. En el caso de ser necesario facturar los
              gastos de registro/visado al propietario o al cliente, añadir al
              cliente y activar el campo Fact, igual para el propietario. Si no
              está dado de alta previamente se puede insertar desde aquí, en el
              botón <strong>NUEVO +</strong>. Es el mismo procedimiento que al
              insertar un propietario.
            </p>
            <div className="mt-5 mb-5">
              <img
                src="/nuevoExpedienteImgs/img2paso4.png"
                alt="img2paso4    "
              />
            </div>
            <p>
              <strong>AUTOR DEL PROYECTO:</strong> Seleccionar el autor del
              proyecto. Si no está dado de alta previamente se puede insertar
              desde aquí, desde el botón <strong>NUEVO +</strong>.
              <div className="mt-5 mb-5">
                <img src="/nuevoExpedienteImgs/img3paso4.png" alt="img4paso4" />
              </div>
              <p>
                En el <strong>botón rojo de aspas</strong> es posible eliminar
                el propietario/cliente o autor seleccionado.
              </p>
            </p>
          </li>
          <li>
            <strong>Paso 5 Estadística:</strong> Rellenar datos obligatorios,
            marcados con *, como la Clase de Promotor.
            <p>
              Es necesario tener en cuenta que las superficies introducidas
              deben ser números enteros sin decimales.{" "}
              <strong>
                {" "}
                La suma de la superficie total construida debe ser igual a la
                suma de la superficie sobre rasante + la superficie bajo
                rasante.
              </strong>
            </p>
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso5.png" alt="paso5" />
            </div>
          </li>
          <li>
            <strong>Paso 6 Otras gestiones:</strong>
            Se debe cumplimentar los datos para poder solicitar la gestión de
            honorarios, se cumplimenta si se quieren cobrar los honorarios a
            través del colegio
            <div className="mt-5 mb-5">
              <img src="/nuevoExpedienteImgs/paso6.png" alt="paso6" />
            </div>
          </li>
          <li>
            <strong>Paso 7 Observaciones:</strong> Anotaciones para comunicar
            datos que no se pueden especificar en los apartados del expediente y
            se quieren aclarar. Expediente que proviene de otro, aclaración de
            emplazamiento, si no coge completo en el apartado etc…
            <div className="mt-5 mb-5">
              <img src="nuevoExpedienteImgs/paso7.png" alt="paso7" />
            </div>
            <p><strong>GUARDAR. SE ACONSEJA GUARDAR ANTERIORMENTE TAMBIÉN.</strong></p>
            <p className="mb-4">
          ⚠️ EN CASO DE FALTAR ALGÚN DATO, O QUE EXISTE ALGÚN DATO ERRÓNEO, SERÁ
          INDICADO EN UN PANEL ROJO INFORMATIVO, DEBERÁ IR AL PUNTO INDICADO Y
          RESOLVER EL ERROR.
        </p>
        <div className="mt-5 mb-5"><img src="nuevoExpedienteImgs/img1paso7.png" alt="Paso7img1" /></div>
          </li>
        </ul>
        <button
        className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer mb-4'
        onClick={initialScroll}
      > Volver al inicio </button>
        
      </section>
    </div>
  );
}

export default NuevoExpediente;
