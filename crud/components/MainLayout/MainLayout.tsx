'use client'
import styles from './Styles/MainLayout.module.css';
import HeaderInfo from './HeaderInfo';
import HeaderActions from './headerActions';
import QueryTable from './QueryTable';
import { useState } from 'react';
import { Person } from './Types/types';
import { useUi } from '@/context/UiContext'; 

const HeaderInfoData = {
    title: "Clientes",
    status: true
};

const initialData: Person[] = [
  { id: 1, avatar: 'images/lilithIcon.png', nombre: "Juan", segundoNombre: "Carlos", apellido: "Pérez", tipoDoc: "CC", documento: "12345", celular: "3001112233", correo: "juan@mail.com", genero: "Masculino", fechaNacimiento: "1990-01-01" },
  { id: 2, avatar: 'images/lilithIcon2.jpg', nombre: "María", segundoNombre: "Luisa", apellido: "Gómez", tipoDoc: "CE", documento: "1043664701", celular: "3104445566", correo: "maria@mail.com", genero: "Femenino", fechaNacimiento: "1992-05-15" },
  { id: 3, avatar: '', nombre: "Carlos", segundoNombre: "Andrés", apellido: "Castro", tipoDoc: "CC", documento: "11223344", celular: "3209998877", correo: "carlos.castro@mail.com", genero: "Masculino", fechaNacimiento: "1985-11-20" },
  { id: 4, avatar: '', nombre: "Ana", segundoNombre: "Lucía", apellido: "Torres", tipoDoc: "TI", documento: "10023456", celular: "3156667788", correo: "ana.torres@mail.com", genero: "Femenino", fechaNacimiento: "2007-03-12" },
  { id: 5, avatar: '', nombre: "Roberto", segundoNombre: "José", apellido: "Martínez", tipoDoc: "CC", documento: "55667788", celular: "3012223344", correo: "roberto.mtz@mail.com", genero: "Masculino", fechaNacimiento: "1978-06-30" },
  { id: 6, avatar: '', nombre: "Elena", segundoNombre: "Beatriz", apellido: "Rojas", tipoDoc: "CC", documento: "99887766", celular: "3123334455", correo: "elena.rojas@mail.com", genero: "Femenino", fechaNacimiento: "1995-01-15" },
  { id: 7, avatar: '', nombre: "Luis", segundoNombre: "Felipe", apellido: "Mendoza", tipoDoc: "CE", documento: "22334455", celular: "3184445511", correo: "felipe.m@mail.com", genero: "Masculino", fechaNacimiento: "1988-09-05" },
  { id: 8, avatar: '', nombre: "Sonia", segundoNombre: "Paola", apellido: "Vargas", tipoDoc: "CC", documento: "44556677", celular: "3045556622", correo: "sonia.v@mail.com", genero: "Femenino", fechaNacimiento: "1991-12-24" },
  { id: 9, avatar: '', nombre: "Miguel", segundoNombre: "Ángel", apellido: "Suárez", tipoDoc: "CC", documento: "77889900", celular: "3116667733", correo: "miguel.s@mail.com", genero: "Masculino", fechaNacimiento: "1982-04-18" },
  { id: 10, avatar: '', nombre: "Laura", segundoNombre: "Camila", apellido: "Herrera", tipoDoc: "TI", documento: "10056789", celular: "3167778844", correo: "laura.h@mail.com", genero: "Femenino", fechaNacimiento: "2006-07-08" },
  { id: 11, avatar: '', nombre: "Javier", segundoNombre: "Ignacio", apellido: "López", tipoDoc: "CC", documento: "33445511", celular: "3058889955", correo: "javier.l@mail.com", genero: "Masculino", fechaNacimiento: "1993-02-28" },
  { id: 12, avatar: '', nombre: "Mónica", segundoNombre: "Patricia", apellido: "Díaz", tipoDoc: "CC", documento: "66778822", celular: "3149990066", correo: "monica.d@mail.com", genero: "Femenino", fechaNacimiento: "1987-10-10" },
  { id: 13, avatar: '', nombre: "Fernando", segundoNombre: "David", apellido: "Salazar", tipoDoc: "CE", documento: "11224466", celular: "3001112277", correo: "fer.salazar@mail.com", genero: "Masculino", fechaNacimiento: "1980-05-22" },
  { id: 14, avatar: '', nombre: "Gloria", segundoNombre: "Inés", apellido: "Ortiz", tipoDoc: "CC", documento: "88991133", celular: "3102223388", correo: "gloria.o@mail.com", genero: "Femenino", fechaNacimiento: "1975-08-14" },
  { id: 15, avatar: '', nombre: "Andrés", segundoNombre: "Mauricio", apellido: "Ramírez", tipoDoc: "CC", documento: "44552211", celular: "3193334499", correo: "andres.r@mail.com", genero: "Masculino", fechaNacimiento: "1994-11-03" },
  { id: 16, avatar: '', nombre: "Patricia", segundoNombre: "Elena", apellido: "Ramos", tipoDoc: "CC", documento: "77665544", celular: "3174445500", correo: "paty.ramos@mail.com", genero: "Femenino", fechaNacimiento: "1984-03-25" },
  { id: 17, avatar: '', nombre: "Ricardo", segundoNombre: "Antonio", apellido: "Soto", tipoDoc: "CC", documento: "12341234", celular: "3015556611", correo: "ricardo.soto@mail.com", genero: "Masculino", fechaNacimiento: "1989-12-12" },
  { id: 18, avatar: '', nombre: "Isabel", segundoNombre: "Cristina", apellido: "Vega", tipoDoc: "TI", documento: "10098765", celular: "3126667722", correo: "isabel.v@mail.com", genero: "Femenino", fechaNacimiento: "2008-01-20" },
  { id: 19, avatar: '', nombre: "Gustavo", segundoNombre: "Adolfo", apellido: "Marín", tipoDoc: "CC", documento: "55443322", celular: "3157778833", correo: "gustavo.m@mail.com", genero: "Masculino", fechaNacimiento: "1981-07-07" },
  { id: 20, avatar: '', nombre: "Carmen", segundoNombre: "Rosa", apellido: "Gil", tipoDoc: "CC", documento: "99001122", celular: "3188889944", correo: "carmen.gil@mail.com", genero: "Femenino", fechaNacimiento: "1972-02-14" },
  { id: 21, avatar: '', nombre: "Alex", segundoNombre: "Julián", apellido: "Mora", tipoDoc: "CE", documento: "44332211", celular: "3119990055", correo: "alex.mora@mail.com", genero: "No Binario", fechaNacimiento: "1996-10-30" },
  { id: 22, avatar: '', nombre: "Daniela", segundoNombre: "Fernanda", apellido: "Luna", tipoDoc: "CC", documento: "66554433", celular: "3002223366", correo: "daniela.l@mail.com", genero: "Femenino", fechaNacimiento: "1998-04-04" },
  { id: 23, avatar: '', nombre: "Héctor", segundoNombre: "Fabio", apellido: "Ríos", tipoDoc: "CC", documento: "22113344", celular: "3133334477", correo: "hector.rios@mail.com", genero: "Masculino", fechaNacimiento: "1983-09-17" },
  { id: 24, avatar: '', nombre: "Natalia", segundoNombre: "Andrea", apellido: "Peña", tipoDoc: "CC", documento: "88776655", celular: "3164445588", correo: "natalia.p@mail.com", genero: "Femenino", fechaNacimiento: "1992-06-22" },
  { id: 25, avatar: '', nombre: "Oscar", segundoNombre: "Eduardo", apellido: "Bermúdez", tipoDoc: "CC", documento: "11992288", celular: "3195556699", correo: "oscar.b@mail.com", genero: "Masculino", fechaNacimiento: "1986-01-01" },
  { id: 26, avatar: '', nombre: "Julia", segundoNombre: "Estela", apellido: "Blanco", tipoDoc: "CC", documento: "33884477", celular: "3016667700", correo: "julia.b@mail.com", genero: "Femenino", fechaNacimiento: "1979-11-11" },
  { id: 27, avatar: '', nombre: "Samuel", segundoNombre: "David", apellido: "Quintana", tipoDoc: "TI", documento: "10044332", celular: "3127778811", correo: "samuel.q@mail.com", genero: "Masculino", fechaNacimiento: "2009-05-19" },
  { id: 28, avatar: '', nombre: "Paola", segundoNombre: "Ximena", apellido: "Cardona", tipoDoc: "CC", documento: "55226611", celular: "3158889922", correo: "paola.c@mail.com", genero: "Femenino", fechaNacimiento: "1994-08-08" },
  { id: 29, avatar: '', nombre: "Hugo", segundoNombre: "Alberto", apellido: "Pineda", tipoDoc: "CC", documento: "77118822", celular: "3189990033", correo: "hugo.p@mail.com", genero: "Masculino", fechaNacimiento: "1985-03-03" },
  { id: 30, avatar: '', nombre: "Ariel", segundoNombre: "Sasha", apellido: "Navarro", tipoDoc: "CE", documento: "99221100", celular: "3112223344", correo: "ariel.n@mail.com", genero: "Prefiero No Responder", fechaNacimiento: "1997-12-30" },
];

export default function MainLayout () {
    const { vistaActual } = useUi(); 
    const [user, setUser] = useState<Person[]>(initialData);

    const addUser = (newUser: Person) => setUser(prev => [newUser, ...prev]);
    const updateUser = (updatedUser: Person) => setUser(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u));
    const deleteUser = (id: number) => setUser(prev => prev.filter(u => u.id !== id));

    return (
        <div className={styles.mainLayout}>
            
           
            <div className={styles.headerInfo}>
                <HeaderInfo 
                    title={vistaActual === 'tabla' ? "Clientes" : "Historial de Logs"}
                    status={HeaderInfoData.status}
                />
            </div>
            
            {vistaActual === 'tabla' ? (
                <>
                    <div className={styles.headerActions}>
                        <HeaderActions onUsuarioCreado={addUser} />
                    </div>

                    <div className={styles.queryTable}>
                        <QueryTable 
                            data={user} 
                            onUsuarioActualizado={updateUser} 
                            onUsuarioEliminado={deleteUser} 
                        />
                    </div>
                </>
            ) : (
                /* VISTA DE LOGS */
                <div className={styles.logsContainer}>
                    <p>Cargando registros de actividad...</p>
                    {/* Aquí podrías llamar a un <LogsTable /> en el futuro */}
                </div>
            )}

        </div>
    );
}