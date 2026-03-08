// app/dashboard/consulta/page.tsx
import UserTable from '@/components/query/UserTable';
import SearchBar from '@/components/query/SearchBar';

export default function ConsultaPage() {
  return (
    
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* 1. Encabezado de la sección */}
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-slate-800">Clientes</h1>
        
        <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full shadow-sm">
          <span className="text-sm font-medium text-slate-600">Estado de consulta</span>
          <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
        </div>
      </header>

      {/* 2. Barra de Herramientas (Búsqueda y Filtros) */}
      <section className="bg-white/40 p-2 rounded-2xl">
        <SearchBar />
      </section>

      {/* 3. El cuerpo principal: La Tabla */}
      <section className="flex-1">
        <UserTable />
      </section>

      {/* 4. Footer de la tabla (Paginación) */}
      <footer className="flex justify-end mt-4">
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-100">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">❮</button>
          {[1, 2, 3].map((num) => (
            <button 
              key={num} 
              className={`w-10 h-10 rounded-lg font-medium transition-colors ${num === 1 ? 'bg-slate-200 text-slate-800' : 'hover:bg-slate-50 text-slate-500'}`}
            >
              {num}
            </button>
          ))}
          <span className="flex items-center px-2 text-slate-400">...</span>
          <button className="w-10 h-10 rounded-lg text-slate-500 hover:bg-slate-50">10</button>
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">❯</button>
        </div>
      </footer>
    </div>
  );
}