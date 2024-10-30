import styles from './App.module.css'
import {Form} from "./components/Form/Form.jsx";

function App() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Do zrobienia</h1>
                <h2>5 zadań</h2>
                <button className={styles.button}>+</button>
            </header>
            <Form/>
        </div>

    )
}

export default App
