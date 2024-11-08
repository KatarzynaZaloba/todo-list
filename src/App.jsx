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

    function addItem(newTodoName) {
        setTodos((prevTodos) => [...prevTodos, {
            name: newTodoName,
            done: false,
            id: prevTodos.length > 0 ? prevTodos.at(-1).id + 1 : 0,
        }]);
        setIsFormShown(false);
    }

    function deleteItem(id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    function finishItem(id) {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id !== id) {
                return todo;
            }
            return {
                ...todo,
                done: true,
            }
        }))
    }

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
                    onFormSubmit={(newTodoName) => addItem(newTodoName)}
                />
            )}
            <ul>
                {todos.map(({id, name, done}) => (
                    <TodoItem
                        key={id}
                        name={name}
                        done={done}
                        onDeleteButtonClick={() => deleteItem(id)}
                        onDoneButtonClick={() => finishItem(id)}
                    />
                ))}
            </ul>
        </div>

    );
}

export default App
