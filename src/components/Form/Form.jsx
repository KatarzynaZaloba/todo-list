import styles from './Form.module.css';
import {Button} from "../Button/Button.jsx";
import {useState} from "react";

export function Form({onFormSubmit}) {
    const [inputValue, setInputValue] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onFormSubmit(inputValue);
            }}
            className={styles.form} action=""
        >
            <input
                onChange={(event) => {
                    setInputValue(event.target.value)
                }}
                value={inputValue}
                className={styles.input}
                type="text"
            />
            <Button
            >
                Dodaj
            </Button>
        </form>
    );
}