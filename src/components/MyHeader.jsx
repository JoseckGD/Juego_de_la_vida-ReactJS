import React from "react";

export const MyHeader = ({ comenzar, reiniciar, setHeaderState }) => {
  return (
    <header className="w-full z-50 h-20 px-8 pt-8 fixed">
      <div
        className=" py-5 flex flex-row bg-slate-900 w-full justify-around
      shadow-2xl z-50 backdrop-blur-md bg-opacity-90 rounded-2xl"
      >
        <p className="px-4 py-2 rounded-lg cursor-pointer font-black bg-slate-100 text-black hover:bg-slate-300">
          Juego de la Vida
        </p>
        <p
          className="px-4 py-2 rounded-lg cursor-pointer font-black hover:bg-slate-500"
          onClick={() => comenzar()}
        >
          Comenzar
        </p>
        <p
          className="px-4 py-2 rounded-lg cursor-pointer font-black hover:bg-slate-500"
          onClick={() => reiniciar()}
        >
          Reiniciar
        </p>
        <p className="px-4 py-2 rounded-lg cursor-pointer font-black hover:bg-slate-500">
          Info
        </p>
        <p
          className="px-4 py-2 rounded-lg cursor-pointer font-black hover:bg-slate-500"
          onClick={() => setHeaderState(false)}
        >
          Cerrar
        </p>
      </div>
    </header>
  );
};
