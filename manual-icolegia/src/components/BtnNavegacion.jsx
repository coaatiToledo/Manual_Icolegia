import React from 'react';

function BtnNavegacion({ texto, activo, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-t-lg transition-all duration-200 text-lg text-white font-semibold
        ${activo ? 'bg-sky-700' : 'bg-gray-900 hover:bg-sky-500'}
      `}
    >
      {texto}
    </button>
  );
}

export default BtnNavegacion;
