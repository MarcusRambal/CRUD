import { useUi } from '@/context/UiContext'; 
import styles from './SideBar.module.css';

const navItems = [
    { name: 'Consulta', id: 'tabla', icon: <span>🏠</span> },
    { name: 'Logs', id: 'logs', icon: <span>🔍</span> }
];

export default function NavBar() { 
    const { vistaActual, setVistaActual } = useUi();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.itemList}>
                {navItems.map((item) => (
                    <li key={item.name}>
                        <button 
                            className={`${styles.navButton} ${vistaActual === item.id ? styles.active : ''}`}
                            onClick={() => setVistaActual(item.id as 'tabla' | 'logs')}
                        >
                            <span className={item.name === 'Consulta' ? styles.iconWrapper : ""}>
                                {item.icon}
                            </span>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}