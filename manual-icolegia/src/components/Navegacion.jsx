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
    <div className="mt-10">
            <nav className="  flex gap-4 justify-center"> 
            {tabs.map((tab) => (
            <BtnNavegacion
                key={tab.id}
                texto={tab.texto}
                activo={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
            />
            ))}
        </nav>
       

       
      <section className=" bg-blue-50 mt-5  ml-5">
        {tabs.find(tab => tab.id === activeTab)?.componente}
      </section>
   
    </div>
  );
}

export default Navegacion;

