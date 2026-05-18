// 1. Select the correct elements from your HTML
const descriptionInput = document.querySelector('#desc');
const amountInput = document.querySelector('#amount');
const incomeBtn = document.querySelector('#incomeBtn');
const expenseBtn = document.querySelector('#expenseBtn');
const incomeList = document.querySelector('#incomeList');
const expenseList = document.querySelector('#expenseList');
const balanceDisplay = document.querySelector('#balance');

// Total balance variable
let totalBalance = 0;

// 2. Function to add an item to the lists
function addTransaction(description, amount, type) {
    const listItem = document.createElement('li');
    listItem.innerText = `${description}: ${amount} kr`;

    if (type === 'income') {
        totalBalance += amount;
        incomeList.appendChild(listItem);
    } else {
        totalBalance -= amount;
        expenseList.appendChild(listItem);
    }

    // Update the balance on the screen
    balanceDisplay.innerText = totalBalance;
}

// 3. Event Listeners for buttons
incomeBtn.addEventListener('click', function() {
    const desc = descriptionInput.value;
    const amt = Number(amountInput.value);

    if (desc !== "" && amt > 0) {
        addTransaction(desc, amt, 'income');
        descriptionInput.value = "";
        amountInput.value = "";
    }
});

expenseBtn.addEventListener('click', function() {
    const desc = descriptionInput.value;
    const amt = Number(amountInput.value);

    if (desc !== "" && amt > 0) {
        addTransaction(desc, amt, 'expense');
        descriptionInput.value = "";
        amountInput.value = "";
    }
});
