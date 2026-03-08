// components/consulta/UserRow.tsx
'use client';
import { useState } from 'react';

export default function UserRow({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className="border-t border-slate-50 text-slate-700 hover:bg-slate-50/50 transition-colors">
        <td className="p-4 text-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400">
            {isOpen ? '▲' : '▼'}
          </button>
        </td>
        <td className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
            {/* Imagen miniatura */}
            <div className="w-full h-full bg-[url('/perfil.jpg')] bg-cover" />
          </div>
          {user.nombre}
        </td>
        <td className="p-4">{user.segundoNombre}</td>
        <td className="p-4">{user.apellido}</td>
        <td className="p-4 text-center">{user.tipoDoc}</td>
        <td className="p-4 font-mono text-sm">{user.documento}</td>
        <td className="p-4">{user.celular}</td>
        <td className="p-4">
          <div className="flex gap-3 text-slate-500">
            <button className="hover:text-blue-600">📝</button>
            <button className="hover:text-red-600">🗑️</button>
          </div>
        </td>
      </tr>

      {/* FILA EXPANDIBLE (DETALLES) */}
      {isOpen && (
        <tr className="bg-slate-50/80">
          <td colSpan={8} className="p-0">
            <div className="flex justify-around p-6 text-sm text-slate-600 border-t border-slate-100">
              <div className="text-center">
                <p className="font-semibold text-slate-400 uppercase text-[10px] mb-1">Correo</p>
                <p>{user.correo}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-slate-400 uppercase text-[10px] mb-1">Genero</p>
                <p>{user.genero}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-slate-400 uppercase text-[10px] mb-1">Fecha de nacimiento</p>
                <p>{user.fechaNac}</p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}