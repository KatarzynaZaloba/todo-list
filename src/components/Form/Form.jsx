import styles from './Form.module.css';
import {Button} from "../Button/Button.jsx";

export function Form() {
    return (
        <form className={styles.form} action="">
            <input className={styles.input} type="text"/>
            <Button onClick={() => {alert('test')}}>Dodaj</Button>
        </form>
    );
}