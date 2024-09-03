const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // Accessing the input values and parsing them as integers
    const dayInput = parseInt(document.querySelectorAll('.date-input')[0].value);
    const monthInput = parseInt(document.querySelectorAll('.date-input')[1].value);
    const yearInput = parseInt(document.querySelectorAll('.date-input')[2].value);

    // Validation: Check if any of the inputs are not numbers (NaN)
    if (isNaN(dayInput) || isNaN(monthInput) || isNaN(yearInput)) {
        alert("Please enter a valid date");
        return;
    }

    // Current date calculations
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();

    // Calculate age
    let ageYears = currentYear - yearInput;
    let ageMonths = currentMonth - monthInput;
    let ageDays = currentDay - dayInput;

    // Adjust if the day is negative
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    // Adjust if the month is negative
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Update the HTML with the calculated age
    document.querySelectorAll(".date-value")[0].textContent = ageYears;
    document.querySelectorAll(".date-value")[1].textContent = ageMonths < 10 ? `0${ageMonths}` : ageMonths;
    document.querySelectorAll(".date-value")[2].textContent = ageDays < 10 ? `0${ageDays}` : ageDays;
});
