import React, { useState } from 'react';
import Expediente from './Expediente';
import Documentacion from './Documentacion';
import Incidencias from './Incidencias';
import BtnNavegacion from './BtnNavegacion';

function Navegacion() {
  const [activeTab, setActiveTab] = useState('expediente');

  const tabs = [
    { id: 'expediente', texto: 'Generar nuevo Expediente Digital', componente: <Expediente /> },
    { id: 'documentacion', texto: 'Generar y Enviar documentación', componente: <Documentacion /> },
    { id: 'incidencias', texto: 'Resolución de Incidencias', componente: <Incidencias /> },
  ];

  return (
    <div className="bg-white   mt-7 py-10">
            <nav className="w-full  flex justify-center p-4  gap-4"> 
            {tabs.map((tab) => (
            <BtnNavegacion
                key={tab.id}
                texto={tab.texto}
                activo={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
            />
            ))}
        </nav>
       

       
      <section className=" bg-white shadow-md ">
        {tabs.find(tab => tab.id === activeTab)?.componente}
      </section>
   
    </div>
  );
}

export default Navegacion;

