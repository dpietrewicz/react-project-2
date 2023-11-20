import { useState } from "react";

const AddItem = () => {
    const handleChange = (event) => {
        const currentValue = event.target.value;
    };
    return (
        <>
            <input type="text" id="search-input" onChange={handleChange} />
        </>
    );
};

export default AddItem;
