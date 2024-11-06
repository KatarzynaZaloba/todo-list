import styles from './TodoItem.module.css';
import { Button } from '../Button/Button';

export function TodoItem({name, done}) {
    return (
        <li className={styles.item}>
            <span className={`${styles.name} ${done ? styles.done : ""}`}>{name}</span>
            {!done && <Button>Wykonane</Button>}
            <Button>Usuń</Button>
        </li>
    );
}