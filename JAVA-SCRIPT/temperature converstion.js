function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitValue').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('fahrenheitResult').textContent = celsius.toFixed(2);
}

function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsiusValue').value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('celsiusResult').textContent = fahrenheit.toFixed(2);
}
// Clear functions for each temperature conversion card
function clearFahrenheit() {
    document.getElementById("fahrenheitValue").value = '';
    document.getElementById("fahrenheitResult").innerText = '0';
}

function clearCelsius() {
    document.getElementById("celsiusValue").value = '';
    document.getElementById("celsiusResult").innerText = '0';
}
