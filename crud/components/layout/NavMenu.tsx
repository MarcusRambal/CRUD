// components/layout/NavMenu.tsx
const menuItems = [
  { name: 'Consulta', icon: '👤', active: true },
  { name: 'Logs', icon: '📋', active: false },
];

export default function NavMenu() {
  return (
    <nav className="space-y-1">
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`
            w-[calc(100%+1rem)] -ml-4 px-6 py-3 flex items-center gap-4 transition-all
            ${item.active 
              ? 'bg-white/20 border-r-4 border-white text-white' 
              : 'text-white/60 hover:text-white hover:bg-white/5'}
          `}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </nav>
  );
}