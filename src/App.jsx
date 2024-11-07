import styles from './App.module.css'
import {Form} from "./components/Form/Form.jsx";
import {TodoItem} from "./components/TodoItem/TodoItem";
import {getSubheading} from "./utils/getSubheading.js";
import {useState} from "react";

function App() {
    const [isFormShown, setIsFormShown] = useState(false);
    const [todos, setTodos] = useState([
        {name: "Zapłacić rachunki", done: false, id: 1},
        {name: "Wyrzucić śmieci", done: true, id: 2},
    ]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Do zrobienia</h1>
                <h2>{getSubheading(todos.length)}</h2>
                {!isFormShown && (
                    <button onClick={() => setIsFormShown(true)}
                            className={styles.button}
                    >+
                    </button>
                )}
            </header>
            {isFormShown && (
                <Form
                    onFormSubmit={(newTodoName) => {
                        alert(newTodoName);
                    }}
                />
            )}
            <ul>
                {todos.map(({id, name, done}) => (
                    <TodoItem
                        key={id}
                        name={name}
                        done={done}
                    />
                ))}
            </ul>
        </div>

    );
}

export default App
