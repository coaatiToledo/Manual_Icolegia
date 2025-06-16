import React from "react";

function AdjuntarDoc() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">3. Adjuntar documentación</h2>
      <ul className="list-disc list-inside space-y-10 mb-4 ml-20 text-3xl">
        <li>
          <strong>Paso 1: </strong>Haz clic en el botón "Adjuntar" se encuentra
          casi al principio de la página.
          <div className="mt-5 ml-5 mb-5">
            <img src="/GenerarDocImg/apartado3img1.png" alt="generarDoc" loading="lazy" />
          </div>
        </li>
        <li>
          <strong>Paso 2: </strong>En la ventana emergente
          <ol className="list-decimal list-inside space-y-5 ml-10 mt-10 text-2xl font-bold">
            <li>Sube los documentos</li>
            <li>
              Añade observaciones, si lo deseas, no es obligatorio, pero siempre
              puede ayudar a la hora del trámite del expediente por parte del
              colegio.
            </li>
            <li>
              ⚠️ Asegúrate de que cada archivo tenga un nombre distinto, o el
              sistema generará un error.
            </li>
            <li>
              Si el recuadro es de color{" "}
              <span className="bg-gray-700 text-white">Gris</span> , quiere
              decir que ese documento es obligatorio; si es{" "}
              <span className="bg-white">Blanco</span>, es recomendado, como se
              aprecia en la imagen de abajo.
              <div className="mt-10 ml-5 mb-5">
                <img src="/GenerarDocImg/apartado3img2.png" alt="generarDoc" loading="lazy"/>
              </div>
            </li>
            <li>
              Pinchamos en seleccionar archivo para subir documentos
              <div className="mt-10 ml-5 mb-5">
                <img src="/GenerarDocImg/apartado3img3.png" alt="generarDoc" loading="lazy"/>
              </div>
            </li>
            <li>
              Una vez subido los documentos le damos adjuntar
              <div className="mt-10 ml-5 mb-5">
                <img src="/GenerarDocImg/apartado3img4.png" alt="generarDoc" loading="lazy"/>
              </div>
              <p className="font-normal ml-10">
                Los documentos se suben de 5 en 5, adjuntamos 5 y volvemos a
                pinchar en adjuntar, para cargar los documentos que falten y así
                sucesivamente <br />
                <br />
                ⚠️Importante la vista de documentos subidos puede variar
                dependiendo de la resolución de la pantalla, pueden aparecer de
                <strong> 2 a 4 columnas</strong>, de modo que vería bien todas
                las columnas como en la figura 2 o contraído como en la figura
                1. En este caso tenemos que pinchar en el icono redondo azul con
                el signo + para poder ver si está el documento subido o está
                pendiente de adjuntar, como se verá en una figura más adelante.
              </p>
              <div className="mt-10  mb-5 flex flex-col w-full gap-4  ">
                <section>
                  <p className="text-center">figura1</p>
                  <img
                    src="/GenerarDocImg/apartado3img5.png"
                    alt="generarDoc"
                    className="w-full max-w-6xl  object-contain shadow-lg rounded-lg "
                    loading="lazy"

                  />
                </section>
                <section>
                  <p className="text-center">figura2</p>
                  <img
                    src="/GenerarDocImg/apartado3img6.png"
                    alt="generarDoc"
                    className=" w-full max-w-6xl  h-auto object-contain shadow-lg rounded-lg"
                    loading="lazy"
                  />
                </section>
                <div className="py-7">
                  <img
                    src="/GenerarDocImg/apartado3img7.png"
                    alt="img7"
                    className="w-full max-w-6xl shadow-lg rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>loading="lazy"
            </li>
          </ol>
        </li>
        <li>
          <strong>Paso 4: </strong>Una vez cargados los documentos necesarios,
          el botón con el ícono de avión se activará en verde, solo si está en
          verde se podrá enviar, si permanece en naranja nos faltará algún
          documento. Haz clic en el icono verde para enviar la documentación.
          <p>
            <br />
            ⚠️Importante, hay documentos que aparecen como recomendados, pero son necesarios dependiendo del tipo de intervención 
          </p>
          <div className="mt-10 ml-5 mb-5">
                <img src="/GenerarDocImg/apartado3img8.png" alt="generarDoc" loading="lazy"/>
              </div>
        </li>
        <li>
          <strong>Paso 5: </strong>Confirma el envío en la ventana emergente.
          <div className="mt-10 ml-5 mb-5">
                <img src="/GenerarDocImg/apartado3img9.png" alt="generarDoc" loading="lazy"/>
              </div>
              <p>
                El expediente pasará a estado "En trámite", visible en la pestaña "Expediente <span>&gt;</span> Borradores".
              </p>
                <div className="mt-10 ml-5 mb-5 f">
                <img src="/GenerarDocImg/apartado3img12.png" alt="generarDoc "  loading="lazy"/>
              </div>
        </li>
      </ul>
    </div>
  );
}

export default AdjuntarDoc;
