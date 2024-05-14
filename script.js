document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById("calculateButton");
    const resultContainer = document.getElementById("roiResultContainer");
    const formContainer = document.getElementById("roiFormContainer");
    const resultNumber = document.getElementById("roiResultNumber");
    const productSelect = document.getElementById("roiProductSelect");
    const salaryInput = document.getElementById("roiSalaryInput");
    const resetButton = document.getElementById("resetButton");

    calculateButton.addEventListener('click', function() {
        const selectedProduct = productSelect.value.split(",");
        const productPrice = parseFloat(selectedProduct[0]);
        const bagsPerHour = parseFloat(selectedProduct[1]);
        const hourlySalary = parseFloat(salaryInput.value);

        // Validate inputs
        if (!productPrice || !bagsPerHour || !hourlySalary || hourlySalary <= 0) {
            resultNumber.innerHTML = "Please check your inputs. Ensure all fields are filled correctly.";
            resultContainer.style.display = "flex";
            return;
        }

        const numBags = Math.ceil(productPrice / (bagsPerHour * hourlySalary));

        resultNumber.innerHTML = `${numBags} Bags`;
        formContainer.style.display = "none";
        resultContainer.style.display = "flex";
    });

    resetButton.addEventListener('click', function() {
        productSelect.selectedIndex = 0;
        salaryInput.value = 40;
        resultContainer.style.display = "none";
        formContainer.style.display = "flex";
    });
});
