import { useState } from "react";
import styles from "./Body.module.css";

const BodyInput = (props) => {
    const [items, setItems] = useState(["Orange", "Apple"]);
    const [newItem, setNewItem] = useState("");

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };

    const addNewItem = (event) => {
        event.preventDefault();
        setItems((prevState) => [...prevState, newItem]);
        setNewItem("");
    };

    return (
        <>
            <div className={styles.containerSub}>
                <h1 className={styles.inputLabel}>{props.inputLabel}</h1>
                <div>
                    <form id="income-container" onSubmit={addNewItem}>
                        <input
                            className={styles.description}
                            type="text"
                            name="incomeTitle"
                            id="search-input-income"
                            placeholder={props.placeholder}
                            value={newItem}
                            onChange={handleInputChange}
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
            <ul>
                <li>hello</li>
                <li>hello</li>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </>
    );
};

export default BodyInput;
