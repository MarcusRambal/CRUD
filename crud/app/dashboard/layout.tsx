// app/dashboard/layout.tsx
import SideBar from '@/components/layout/SideBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#E5E7EB]"> {/* Fondo gris claro */}
      <SideBar /> 
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* El "children" es lo que cambiará (la tabla de clientes) */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}