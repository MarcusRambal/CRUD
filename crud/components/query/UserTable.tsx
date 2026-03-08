// components/consulta/UserTable.tsx
import UserRow from './UserRow';

const DUMMY_DATA = [
  { id: 1, nombre: 'Marcus', segundoNombre: 'Alexander', apellido: 'Rambal Preston', tipoDoc: 'CC', documento: '1043664701', celular: '3242357901', correo: 'majfcusghamfpaortsm@gmail.com', genero: 'Prefiero no reportar', fechaNac: '13/02/2026' },
  { id: 2, nombre: 'Maximillian', segundoNombre: 'Maximillian', apellido: 'Rambal Preston', tipoDoc: 'CC', documento: '1043664701', celular: '3242357901', correo: 'max@example.com', genero: 'Masculino', fechaNac: '01/01/2000' },
];

export default function UserTable() {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-3xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-600 text-sm">
            <th className="p-4 font-medium"></th> {/* Espacio para la flecha */}
            <th className="p-4 font-medium">Nombre</th>
            <th className="p-4 font-medium">Segundo nombre</th>
            <th className="p-4 font-medium">Apellido</th>
            <th className="p-4 font-medium">Tipo de Documento</th>
            <th className="p-4 font-medium">Documento</th>
            <th className="p-4 font-medium">Celular</th>
            <th className="p-4 font-medium">Editar</th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_DATA.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}