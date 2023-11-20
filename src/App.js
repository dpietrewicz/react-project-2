import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import BodyInput from "./components/Body/BodyInput";

function App() {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const handleAddIncomes = (income) => {
        setIncomes((prevState) => [...prevState, income]);
    };

    const handleAddExpense = (expense) => {
        setExpenses((prevState) => [...prevState, expense]);
    };

    return (
        <>
            <Header />
            <section className={styles.containerPrimary}>
                <BodyInput
                    inputLabel={"Przychody"}
                    placeholder={"Nazwa przychodu"}
                />
                <BodyInput
                    inputLabel={"Wydatki"}
                    placeholder={"Nazwa wydatku"}
                />
                <div>
                    {/* <AddPositionForm
                        label="przychody"
                        onPositionAdd={handleAddIncomes}
                    />
                    <AddPositionForm
                        label="wydatki"
                        onPositionAdd={handleAddExpense}
                    /> */}
                </div>

                {/* <PositionsList items={incomes} label="przychody" />
                <PositionsList items={expenses} label="wydatki" /> */}
            </section>
        </>
    );
}

export default App;
