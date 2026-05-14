// 1. Select elements from the HTML document
const descriptionInput = document.querySelector('#description');
const amountInput = document.querySelector('#amount');
const incomeBtn = document.querySelector('#add-income');
const expenseBtn = document.querySelector('#add-expense');

// 2. Handle adding an income
incomeBtn.addEventListener('click', function() {
    // Get values from inputs and convert amount to a number
    const description = descriptionInput.value;
    const amount = Number(amountInput.value);

    // Validate that description is not empty and amount is positive
    if (description !== "" && amount > 0) {
        console.log("Adding income: " + description + " - " + amount);
        // TODO: Add logic to display the item in the list and update the total budget
    } else {
        alert("Please fill in both fields correctly!");
    }
});

// 3. Handle adding an expense
expenseBtn.addEventListener('click', function() {
    const description = descriptionInput.value;
    const amount = Number(amountInput.value);

    if (description !== "" && amount > 0) {
        console.log("Adding expense: " + description + " - " + amount);
        // TODO: Add logic to deduct from the budget and update the UI
    } else {
        alert("Please fill in both fields correctly!");
    }
});
