import { useState } from "react";
import styles from "./Body.module.css";

const BodyInput = (props) => {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.onPositionAdd({ name, amount, id: Math.random() });
    // };
    return (
        <>
            <div className={styles.containerSub}>
                <h1 className={styles.inputLabel}>{props.inputLabel}</h1>
                <div>
                    <form id="income-container">
                        <input
                            className={styles.description}
                            type="text"
                            name="incomeTitle"
                            id="search-input-income"
                            placeholder={props.placeholder}
                        />
                        <input
                            className={styles.amount}
                            type="number"
                            name="incomeAmount"
                            id="amount-income"
                            placeholder="Kwota"
                            step="0.01"
                        />

                        <button
                            className={styles.addBtn}
                            type="submit"
                            id="btn-income"
                        >
                            Dodaj
                        </button>
                    </form>
                    <p id="income-alert" className={styles.addAlert}></p>
                </div>
            </div>
        </>
    );
};

export default BodyInput;
