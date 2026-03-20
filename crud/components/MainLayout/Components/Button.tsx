//css
import styles from '../Styles/MainLayout.module.css';

interface ButtonProps {
    onClick: () => void;
    label: string;
}


export default function button ({ onClick, label }: ButtonProps) {

    return (

        <div className={styles.actions}>
            <button className={styles.button} onClick={onClick}>
                {label}
            </button>
        </div>

        
    );
}