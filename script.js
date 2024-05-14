var roiCalculator = {
    calculate: function() {
        var productInfo = document.getElementById("roiProductSelect").value.split(",");
        var productValue = parseFloat(productInfo[0]);
        var timeSaved = parseFloat(productInfo[1]);
        var hourlySalary = parseFloat(document.getElementById("roiSalaryInput").value);
        var numBags = Math.ceil(productValue / (timeSaved * hourlySalary));

        document.getElementById("roiResultNumber").innerHTML = numBags + " Bags";
        document.getElementById("roiFormContainer").style.display = "none";
        document.getElementById("roiResultContainer").style.display = "flex";
    },

    reset: function() {
        document.getElementById("roiProductSelect").selectedIndex = 0;
        document.getElementById("roiSalaryInput").value = 40;
        document.getElementById("roiResultContainer").style.display = "none";
        document.getElementById("roiFormContainer").style.display = "flex";
    }
};
