// components/consulta/SearchBar.tsx
export default function SearchBar() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-white/50 p-4 rounded-2xl shadow-sm border border-white">
      {/* Input de Búsqueda */}
      <input 
        type="text" 
        placeholder="Busqueda..." 
        className="flex-1 min-w-[200px] px-4 py-2 rounded-xl border border-slate-200 bg-slate-50/50 outline-none focus:ring-2 focus:ring-[#4A3F6B]/20 transition-all"
      />

      {/* Botón Consultar (Estilo oscuro/morado) */}
      <button className="bg-[#332D4B] text-white px-6 py-2 rounded-xl hover:bg-[#4A3F6B] transition-colors font-medium">
        Consultar
      </button>

      {/* Botón Filtro (Estilo gris claro) */}
      <button className="bg-slate-200 text-slate-700 px-6 py-2 rounded-xl hover:bg-slate-300 transition-colors font-medium">
        Filtro
      </button>

      {/* Espaciador dinámico */}
      <div className="flex-1"></div>

      {/* Botón Crear + (Estilo morado con icono) */}
      <button className="bg-[#332D4B] text-white px-6 py-2 rounded-xl hover:bg-[#4A3F6B] transition-colors font-medium flex items-center gap-2">
        Crear <span className="text-xl leading-none">+</span>
      </button>
    </div>
  );
}