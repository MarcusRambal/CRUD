import styles from './Styles/Table.module.css';

interface PersonCardProps {
    person: {
        avatar?: string;
        name: string;
        lastName: string;
        documentType: string;
        document: string;
        phone: string;
        email: string;
        gender: string;
        birthDate: string;
    };
    columnKeys: string[];
    onEdit?: () => void;
    onDelete?: () => void;
}


export default function PersonCard({ person, columnKeys, onEdit, onDelete }: PersonCardProps) {
    return (
        <div className={styles.row}>
            {columnKeys.map((key) => (
                <div key={key} className={styles.cell}>
                    {key === 'edit' ? (
                        <button onClick={onEdit}>Editar</button>
                    ) : key === 'delete' ? (
                        <button onClick={onDelete}>Eliminar</button>
                    ) : (
                        person[key as keyof typeof person] || '-'
                    )}
                </div>
            ))}
        </div>
    );
}   