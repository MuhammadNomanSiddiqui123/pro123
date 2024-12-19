function convertOuncesToGrams() {
    const ounces = parseFloat(document.getElementById('ouncesValue').value);
    const result = ounces * 28.3495; // 1 oz = 28.3495 g
    document.getElementById('ouncesResult').textContent = result.toFixed(2);
}

function convertPoundsToKilograms() {
    const pounds = parseFloat(document.getElementById('poundsValue').value);
    const result = pounds * 0.453592; // 1 lb = 0.453592 kg
    document.getElementById('poundsResult').textContent = result.toFixed(2);
}

function convertShortTonsToMegaGrams() {
    const shortTons = parseFloat(document.getElementById('shortTonsValue').value);
    const result = shortTons * 0.907185; // 1 short ton = 0.907185 Mg
    document.getElementById('shortTonsResult').textContent = result.toFixed(2);
}
// Clear functions for each mass conversion card
function clearOunces() {
    document.getElementById("ouncesValue").value = '';
    document.getElementById("ouncesResult").innerText = '0';
}

function clearPounds() {
    document.getElementById("poundsValue").value = '';
    document.getElementById("poundsResult").innerText = '0';
}

function clearShortTons() {
    document.getElementById("shortTonsValue").value = '';
    document.getElementById("shortTonsResult").innerText = '0';
}