// components/layout/Sidebar.tsx
import UserProfile from './UserProfile';
import NavMenu from './NavMenu';

export default function SideBar() {
  return (
    <aside className="w-64 bg-[#3D3653] text-white flex flex-col h-screen p-4">
      {/* Botón de retroceso arriba a la derecha*/}
      <div className="flex justify-end mb-4">
        <button className="bg-[#d9d9d9] p-2 rounded-lg hover:bg-white/20">
          <span className="text-xs text-gray-800">❮</span>
        </button>
      </div>

      {/* 1. Perfil del Usuario */}
      <UserProfile 
        name="Marcus Rambal" 
        role="Administrador" 
      />

      {/* 2. Menú de Navegación */}
      <div className="flex-1 mt-10">
        <NavMenu />
      </div>

      {/* 3. Footer del Sidebar (Switch y Cerrar Sesión) */}
      <div className="border-t border-white/10 pt-4 space-y-4">
        <div className="flex items-center justify-between px-2">
          <span className="text-sm">Servicio consulta</span>
          <div className="w-10 h-5 bg-green-500 rounded-full relative">
            <div className="absolute right-1 top-1 bg-white w-3 h-3 rounded-full"></div>
          </div>
        </div>
        
        <button className="flex items-center gap-3 px-2 py-2 text-white/70 hover:text-white transition-colors w-full text-left">
          <span>↪</span> 
          <span>Cerrar sesion</span>
        </button>
      </div>
    </aside>
  );
}