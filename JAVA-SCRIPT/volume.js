function convertFluidOuncesToMilliliters() {
    const fluidOunces = parseFloat(document.getElementById('fluidOuncesValue').value);
    const result = fluidOunces * 29.5735; // 1 fl oz = 29.5735 mL
    document.getElementById('fluidOuncesResult').textContent = result.toFixed(2);
}

function convertGallonsToLiters() {
    const gallons = parseFloat(document.getElementById('gallonsValue').value);
    const result = gallons * 3.78541; // 1 gallon = 3.78541 L
    document.getElementById('gallonsResult').textContent = result.toFixed(2);
}

function convertCubicFeetToCubicMeters() {
    const cubicFeet = parseFloat(document.getElementById('cubicFeetValue').value);
    const result = cubicFeet * 0.0283168; // 1 ft³ = 0.0283168 m³
    document.getElementById('cubicFeetResult').textContent = result.toFixed(2);
}

function convertCubicYardsToCubicMeters() {
    const cubicYards = parseFloat(document.getElementById('cubicYardsValue').value);
    const result = cubicYards * 0.764555; // 1 yd³ = 0.764555 m³
    document.getElementById('cubicYardsResult').textContent = result.toFixed(2);
}
// Clear functions for each volume conversion card
function clearFluidOunces() {
    document.getElementById("fluidOuncesValue").value = '';
    document.getElementById("fluidOuncesResult").innerText = '0';
}

function clearGallons() {
    document.getElementById("gallonsValue").value = '';
    document.getElementById("gallonsResult").innerText = '0';
}

function clearCubicFeet() {
    document.getElementById("cubicFeetValue").value = '';
    document.getElementById("cubicFeetResult").innerText = '0';
}

function clearCubicYards() {
    document.getElementById("cubicYardsValue").value = '';
    document.getElementById("cubicYardsResult").innerText = '0';
}