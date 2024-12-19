function convertUsdToEur() {
    const usd = parseFloat(document.getElementById('usdValue').value);
    const conversionRate = 0.85; // Example conversion rate
    const eur = usd * conversionRate;
    document.getElementById('usdToEurResult').textContent = eur.toFixed(2);
}

function convertGbpToUsd() {
    const gbp = parseFloat(document.getElementById('gbpValue').value);
    const conversionRate = 1.30; // Example conversion rate
    const usd = gbp * conversionRate;
    document.getElementById('gbpToUsdResult').textContent = usd.toFixed(2);
}

function convertJpyToUsd() {
    const jpy = parseFloat(document.getElementById('jpyValue').value);
    const conversionRate = 0.0091; // Example conversion rate
    const usd = jpy * conversionRate;
    document.getElementById('jpyToUsdResult').textContent = usd.toFixed(2);
}
// Clear functions for each currency conversion card
function clearUsd() {
    document.getElementById("usdValue").value = '';
    document.getElementById("usdToEurResult").innerText = '0';
}

function clearGbp() {
    document.getElementById("gbpValue").value = '';
    document.getElementById("gbpToUsdResult").innerText = '0';
}

function clearJpy() {
    document.getElementById("jpyValue").value = '';
    document.getElementById("jpyToUsdResult").innerText = '0';
}