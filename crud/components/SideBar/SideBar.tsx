'use client'
//css
import styles from './SideBar.module.css';

//components

import UserProfile from './UserProfile';
import NavBar from './NavBar';

const userData = {
  name: "Marcus Rambal",
  role: "Administrador",
  avatar: 'hola'
};

export default function SideBar() {
  return (
    <aside className={styles.sideBar}>
      {/* 1. Perfil del Usuario */}
      <div className={styles.profileContainer}>  
        <UserProfile 
          name={userData.name}
          role={userData.role}
          avatar={userData.avatar}
        />
      </div>

      {/* 2. Menú de Navegación */}
      <div className={styles.navbar}>
        <NavBar />
      </div>

      {/* 3. Footer del Sidebar (Switch y Cerrar Sesión) */}
      <div className={styles.footer}>
        <div className={styles.serviceSection}>
          <span className={styles.serviceText}>Servicio consulta</span>
          <div className={styles.toggle}>
            <div className={styles.toggleDot}></div>
          </div>
        </div>
        
        <button className={styles.logoutButton}>
          <span>↪</span> 
          <span>Cerrar sesion</span>
        </button>
      </div>
    </aside>
  );
}