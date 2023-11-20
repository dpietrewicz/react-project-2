function renderIncomesList() {
    const newElement = document.createElement("div");
    const newElementContainer = document.createElement("span");
    const newElementInputName = document.createElement("span");
    const newElementInputAmount = document.createElement("span");
    const symbol = document.createElement("p");
    const newElementButtons = document.createElement("span");

    newElement.classList.add("new-element");
    newElementInputName.classList.add("new-element-input");
    newElementInputAmount.classList.add("new-element-amount");
    newElementContainer.classList.add("new-element-container");
    symbol.classList.add("symbol");

    newElementInputAmount.textContent = parseFloat(income.amount).toFixed(2);
    symbol.textContent = "PLN";
    newElementInputName.textContent = income.title;

    incomeListContainer.appendChild(newElement);
    newElement.appendChild(newElementContainer);
    newElementContainer.appendChild(newElementInputAmount);
    newElementContainer.appendChild(symbol);
    newElementContainer.appendChild(newElementInputName);
    newElement.appendChild(newElementButtons);
    newElementButtons.appendChild(addBtnEdit);
    newElementButtons.appendChild(addBtnDelete);
}
