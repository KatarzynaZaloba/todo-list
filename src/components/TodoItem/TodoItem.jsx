export function TodoItem({name, done}) {
    return (
        <li>
            <span>{name}</span>
            {!done && <button>Wykonane</button>}
            <button>Usuń</button>
        </li>
    );
}