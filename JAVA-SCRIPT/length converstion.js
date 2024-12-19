function convertInchesToMillimeters() {
    const inches = document.getElementById('inchesValue').value;
    const mm = (inches * 25.4).toFixed(2);
    document.getElementById('inchesResult').innerText = mm;
}

function convertFeetToMeters() {
    const feet = document.getElementById('feetValue').value;
    const meters = (feet * 0.3048).toFixed(2);
    document.getElementById('feetResult').innerText = meters;
}

function convertYardsToMeters() {
    const yards = document.getElementById('yardsValue').value;
    const meters = (yards * 0.9144).toFixed(2);
    document.getElementById('yardsResult').innerText = meters;
}

function convertMilesToKilometers() {
    const miles = document.getElementById('milesValue').value;
    const kilometers = (miles * 1.60934).toFixed(2);
    document.getElementById('milesResult').innerText = kilometers;
}
// Clear functions for each length conversion card
function clearInches() {
    document.getElementById("inchesValue").value = '';
    document.getElementById("inchesResult").innerText = '0';
}

function clearFeet() {
    document.getElementById("feetValue").value = '';
    document.getElementById("feetResult").innerText = '0';
}

function clearYards() {
    document.getElementById("yardsValue").value = '';
    document.getElementById("yardsResult").innerText = '0';
}

function clearMiles() {
    document.getElementById("milesValue").value = '';
    document.getElementById("milesResult").innerText = '0';
}