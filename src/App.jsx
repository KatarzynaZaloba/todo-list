import styles from './App.module.css'
import {Form} from "./components/Form/Form.jsx";
import {TodoItem} from "./components/TodoItem/TodoItem";

function App() {
    const todos = [
        {name: "Zapłacić rachunki", done: false, id: 1},
        {name: "Wyrzucić śmieci", done: true, id: 2},
    ];
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Do zrobienia</h1>
                <h2>5 zadań</h2>
                <button className={styles.button}>+</button>
            </header>
            <Form/>
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
