document.getElementById("calculate-btn").addEventListener("click", function() {
    // Get values from input fields
    var petrolCost = parseFloat(document.getElementById("petrol-cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters-purchased").value);

    // Calculate total cost
    var totalCost = petrolCost * litersPurchased;

    // Display total cost
    document.getElementById("total-cost").textContent = "Total cost: $" + totalCost.toFixed(2);
});
