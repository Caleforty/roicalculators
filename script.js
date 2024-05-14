document.getElementById('submit').addEventListener('click', function() {
    const product = document.getElementById('product').value.split('-');
    const price = parseFloat(product[0]);
    const bagsPerHour = parseInt(product[1]);
    const hourlySalary = parseFloat(document.getElementById('hourlySalary').value);
    const workers = 3;

    const totalHourlyCost = hourlySalary * workers;
    const bagsToMix = Math.ceil(price / (totalHourlyCost / bagsPerHour));

    document.getElementById('bagsToMix').innerText = bagsToMix;
    document.getElementById('form').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('startOver').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('form').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
});
