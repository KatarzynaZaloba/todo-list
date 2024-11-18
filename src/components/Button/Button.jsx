import styles from './Button.module.css';

export function Button({children, onClick, disabled}) {
    return (
        <button
            className={disabled ? styles.disabled : styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}