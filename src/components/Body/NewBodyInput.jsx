const AddPositionForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onPositionAdd({ name, amount, id: Math.random() });
    };
    return <form onSubmit={handleSubmit}></form>;
};

export default AddPositionForm;
