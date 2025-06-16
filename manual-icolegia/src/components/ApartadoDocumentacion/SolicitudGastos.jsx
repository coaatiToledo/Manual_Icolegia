import React from 'react'

function SolicitudGastos() {
  return (
     <div id="solicitud-gastos" className="mt-10">
       
        <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
          <li>
            <strong>Paso 1:</strong> haz clic izquierdo en la flecha de la
            derecha para acceder a las opciones de solicitud de gestión de
            gastos
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2Img1.png" alt="apartado2Img1" loading="lazy"/>
            </div>
          </li>
          <li>
            <strong>Paso 2: </strong>En Actuación Solicitada Haz clic izquierdo
            en la flecha de la derecha{" "}
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado2Img2.png" alt="generarDoc" loading="lazy"/>
            </div>
          </li>
          <li>
            <strong>Paso 3: </strong>Selecciona la actuación correspondiente.{" "}
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado3img.png" alt="generarDoc" loading="lazy"/>
            </div>
          </li>

          <li>
            <strong>Paso 4: </strong>En Conceptos Solicitados haz clic izquierdo
            en la flecha de la derecha{" "}
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/apartado4img.png" alt="generarDoc" loading="lazy"/>
            </div>
          </li>

          <li>
            <strong>Paso 5: </strong>
            <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
              <li>
                <strong>Marca los conceptos que vas a solicitar</strong>
                <p className="font-normal ml-10">
                  ⚠️ <strong>Importante:</strong> Si marcas "Libro de
                  incidencias", "Actas de aprobación" o "Gestión de cobros de
                  minutas", debes adjuntar dicha documentación posteriormente.
                  De lo contrario, se generará una incidencia.
                </p>
                <div className="mt-5 ml-5 mb-5">
                  <img src="/GenerarDocImg/paso5img1.png" alt="generarDoc" loading="lazy"/>
                </div>
                <strong>
                  Si se va a pagar por cuenta bancaria, es obligatorio marcar
                  "Gastos bancarios".
                </strong>
                <div className="mt-5 ml-5 mb-5">
                  <img src="/GenerarDocImg/paso5img2.png" alt="generarDoc" loading="lazy"/>
                </div>
              </li>
            </ol>
          </li>
          <li>
            <strong>Paso6:</strong> Donde dice “Los Gastos de Tramitación se
            Facturan A:” haz clic izquierdo en la flecha de la derecha “
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/paso6img1.png" alt="generarDoc" loading="lazy"/>
            </div>
            <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
              <li>
                Selecciona a quién se le facturan los gastos
                <div className="mt-5 ml-5 mb-5">
                  <img src="/GenerarDocImg/paso6img2.png" alt="generarDoc" loading="lazy"/>
                </div>
              </li>
            </ol>
          </li>
          <li>
            <strong>Paso7:</strong> Donde dice “Los Gastos de Tramitación se
            Abonarán:” haz clic izquierdo en la flecha de la derecha“
            <div className="mt-5 ml-5 mb-5">
              <img src="/GenerarDocImg/paso7img1.png" alt="generarDoc" loading="lazy"/>
            </div>
            <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
              <li>
                Selecciona el metodo de cobro
                <p className="font-normal ml-10">
                  ⚠️ <strong>Importante:</strong>, Solo es posible realizar
                  cargo en cuenta si en el apartado anterior se ha seleccionado
                  "colegiado" o "sociedad profesional” y si se marcaron los
                  "gastos bancarios" en el apartado de conceptos solicitados. Si
                  los gastos son por cuenta del cliente o promotor deberá
                  abonarse a través de transferencia bancaria
                </p>
                <div className="mt-5 ml-5 mb-5">
                  <img src="/GenerarDocImg/paso7img2.png" alt="generarDoc" loading="lazy"/>
                </div>
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <strong>Paso8:</strong>Una vez cumplimentada toda la información,
            genera el documento
            <ol className="list-decimal list-inside space-y-3 ml-10 mt-10 text-2xl font-bold">
              <li>
                Si el pago es por cargo en cuenta, se descargarán los documentos
                solicitud de gestión de gastos y autorización
                <div className="mt-5 ml-5 mb-5">
                  <img src="/GenerarDocImg/paso8img1.png" alt="generarDoc" loading="lazy"/>
                </div>
              </li>
              <li>
                Si el pago es por transferencia solo se descarga la solicitud
                <div className="mt-5 ml-5 mb-5">
                  <img src="/GenerarDocImg/paso8img2.png" alt="generarDoc" loading="lazy"/>
                </div>
              </li>
            </ol>
          </li>
        </ul>
      </div>
  )
}

export default SolicitudGastos