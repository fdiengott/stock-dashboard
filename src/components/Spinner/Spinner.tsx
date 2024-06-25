import styles from "./Spinner.module.css";

const Spinner = ({ show }: { show: boolean }) => {
    if (!show) return null;

    return (
        <div className={styles["spinner-container"]}>
            <div className={styles["spinner-backdrop"]} />
            <div className={styles["spinner"]} />
        </div>
    );
};

export default Spinner;
