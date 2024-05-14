document.getElementById('calculate').addEventListener('click', function () {
    const productSelect = document.getElementById('product');
    const salaryInput = document.getElementById('salary');

    const [productPrice, productBagsPerHour] = productSelect.value.split(',').map(Number);
    const hourlySalary = Number(salaryInput.value);

    const workers = 3;
    const hourlyCost = hourlySalary * workers;
    const defaultBagsPerHour = 15;
    const roiBags = Math.ceil(productPrice / ((productBagsPerHour - defaultBagsPerHour) * hourlyCost));

    document.getElementById('bags-result').innerText = roiBags;
    document.querySelectorAll('.input-group').forEach(group => group.style.display = 'none');
    document.getElementById('calculate').style.display = 'none';
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('start-over').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('product').value = '3285,45';
    document.getElementById('salary').value = '40';
    document.querySelectorAll('.input-group').forEach(group => group.style.display = 'block');
    document.getElementById('calculate').style.display = 'block';
    document.getElementById('result').classList.add('hidden');
});
