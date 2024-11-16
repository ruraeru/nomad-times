import styles from "../styles/sortHeader.module.css";


const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

export default function SearchHeader() {
    return (
        <ul className={styles.sortHeader}>
            {alphabet.map((el) => (
                <li key={el}>{el}</li>
            ))}
        </ul>
    )
}