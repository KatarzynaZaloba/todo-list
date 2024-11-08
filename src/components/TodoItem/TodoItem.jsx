import styles from './TodoItem.module.css';
import {Button} from '../Button/Button';

export function TodoItem({
                             name,
                             done,
                             onDeleteButtonClick,
                             onDoneButtonClick
                         }) {
    return (
        <li className={styles.item}>
            <span className={`${styles.name} ${done ? styles.done : ""}`}>{name}</span>
            {!done && <Button onClick={onDoneButtonClick}>Wykonane</Button>}
            <Button onClick={onDeleteButtonClick}>Usuń</Button>
        </li>
    );
}