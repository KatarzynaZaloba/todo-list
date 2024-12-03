import { useState } from 'react';
import styles from './TodoItem.module.css';
import { Button } from '../Button/Button';

export function TodoItem({
                             name,
                             done,
                             onDeleteButtonClick,
                             onDoneButtonClick,
                             onMoveUpButtonClick,
                             onMoveDownButtonClick,
                             onSaveEditButtonClick
                         }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onSaveEditButtonClick(newName);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSaveClick();
        }
    };

    return (
        <li className={styles.item}>
            {isEditing ? (
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <span className={`${styles.name} ${done ? styles.done : ""}`} onClick={handleEditClick}>{name}</span>
            )}
            {!done && !isEditing && <Button onClick={onDoneButtonClick}>Wykonane</Button>}
            <Button onClick={onDeleteButtonClick}>Usuń</Button>
            <Button onClick={onMoveUpButtonClick}>⬆</Button>
            <Button onClick={onMoveDownButtonClick}>⬇</Button>
        </li>
    );
}