function convertSquareInchesToSquareMillimeters() {
    const squareInches = parseFloat(document.getElementById('squareInchesValue').value);
    const result = squareInches * 645.16; // 1 in² = 645.16 mm²
    document.getElementById('squareInchesResult').textContent = result.toFixed(2);
}

function convertSquareFeetToSquareMeters() {
    const squareFeet = parseFloat(document.getElementById('squareFeetValue').value);
    const result = squareFeet * 0.092903; // 1 ft² = 0.092903 m²
    document.getElementById('squareFeetResult').textContent = result.toFixed(2);
}

function convertSquareYardsToSquareMeters() {
    const squareYards = parseFloat(document.getElementById('squareYardsValue').value);
    const result = squareYards * 0.836127; // 1 yd² = 0.836127 m²
    document.getElementById('squareYardsResult').textContent = result.toFixed(2);
}

function convertAcresToHectares() {
    const acres = parseFloat(document.getElementById('acresValue').value);
    const result = acres * 0.404686; // 1 acre = 0.404686 hectares
    document.getElementById('acresResult').textContent = result.toFixed(2);
}

function convertSquareMilesToSquareKilometers() {
    const squareMiles = parseFloat(document.getElementById('squareMilesValue').value);
    const result = squareMiles * 2.58999; // 1 mi² = 2.58999 km²
    document.getElementById('squareMilesResult').textContent = result.toFixed(2);
}
 // Clear functions for each conversion card
 function clearSquareInches() {
    document.getElementById("squareInchesValue").value = '';
    document.getElementById("squareInchesResult").innerText = '0';
}

function clearSquareFeet() {
    document.getElementById("squareFeetValue").value = '';
    document.getElementById("squareFeetResult").innerText = '0';
}

function clearSquareYards() {
    document.getElementById("squareYardsValue").value = '';
    document.getElementById("squareYardsResult").innerText = '0';
}

function clearAcres() {
    document.getElementById("acresValue").value = '';
    document.getElementById("acresResult").innerText = '0';
}

function clearSquareMiles() {
    document.getElementById("squareMilesValue").value = '';
    document.getElementById("squareMilesResult").innerText = '0';
}