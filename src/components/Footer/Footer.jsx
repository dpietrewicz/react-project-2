const Footer = () => {
    return (
        <footer>
            <div class="list-container">
                <div class="list">
                    <ul id="income-list">apple</ul>
                </div>
                <div class="list">
                    <ul id="outcome-list">555</ul>
                </div>
            </div>
            <div class="footer">
                <div id="total-income-sum">20</div>
                <div id="total-outcome-sum"></div>
            </div>
            <form class="modal" id="edit-form">
                <label for="edit-form-name">Nazwa</label>
                <input
                    type="text"
                    id="edit-form-name"
                    class="edit-form-titles"
                    required
                />
                <label for="edit-form-amount">Kwota</label>
                <input
                    type="number"
                    id="edit-form-amount"
                    class="edit-form-titles"
                    required
                    min="0.01"
                    step="0.01"
                />
                <button
                    type="submit"
                    id="add-btn-save"
                    class="add-btn-default add-btn-outcome-save"
                >
                    Zapisz
                </button>

                <button
                    type="button"
                    id="add-btn-cancel"
                    class="add-btn-default"
                >
                    Anuluj
                </button>
            </form>
        </footer>
    );
};
