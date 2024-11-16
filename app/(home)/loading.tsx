import styles from "../../styles/loading.module.css";

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.spinner} />
            <div className={styles.text}>Loading...</div>
        </div>
    )
}