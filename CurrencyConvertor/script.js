// Exchange rates (relative to USD - for demo purposes)
const exchangeRates = {
    USD: 1,      // US Dollar
    EUR: 0.92,   // Euro
    GBP: 0.79,   // British Pound
    JPY: 149.50, // Japanese Yen
    INR: 83.12,  // Indian Rupee
    CAD: 1.36,   // Canadian Dollar
    AUD: 1.53,   // Australian Dollar
    CHF: 0.88,   // Swiss Franc
    CNY: 7.24,   // Chinese Yuan
    SEK: 10.42,  // Swedish Krona
    NZD: 1.64,   // New Zealand Dollar
    MXN: 17.15,  // Mexican Peso
    SGD: 1.34,   // Singapore Dollar
    HKD: 7.82,   // Hong Kong Dollar
    NOK: 10.68,  // Norwegian Krone
    KRW: 1320,   // South Korean Won
    TRY: 32.15,  // Turkish Lira
    RUB: 91.50,  // Russian Ruble
    BRL: 4.97,   // Brazilian Real
    ZAR: 18.65,  // South African Rand
    DKK: 6.87,   // Danish Krone
    PLN: 3.98,   // Polish Zloty
    THB: 35.80,  // Thai Baht
    IDR: 15650,  // Indonesian Rupiah
    HUF: 355,    // Hungarian Forint
    CZK: 22.85,  // Czech Koruna
    ILS: 3.68,   // Israeli Shekel
    CLP: 898,    // Chilean Peso
    PHP: 55.80,  // Philippine Peso
    AED: 3.67,   // UAE Dirham
    COP: 3850,   // Colombian Peso
    SAR: 3.75,   // Saudi Riyal
    MYR: 4.72,   // Malaysian Ringgit
    RON: 4.58,   // Romanian Leu
    VND: 24350,  // Vietnamese Dong
    EGP: 30.90,  // Egyptian Pound
    PKR: 278.50, // Pakistani Rupee
    NGN: 1550,   // Nigerian Naira
    BDT: 109.50  // Bangladeshi Taka
};

const form = document.getElementById('converter-form');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const swapBtn = document.getElementById('swap-btn');
const resultContainer = document.getElementById('result');
const convertedAmount = document.getElementById('converted-amount');
const resultCurrency = document.getElementById('result-currency');
const exchangeRateText = document.getElementById('exchange-rate');

function convertCurrency(amount, from, to) {
    const inUSD = amount / exchangeRates[from];
    return inUSD * exchangeRates[to];
}

function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    const result = convertCurrency(amount, from, to);
    const rate = exchangeRates[to] / exchangeRates[from];

    convertedAmount.textContent = formatNumber(result);
    resultCurrency.textContent = to;
    exchangeRateText.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;

    resultContainer.classList.remove('hidden');
});

swapBtn.addEventListener('click', function() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    // Hide result when swapping
    resultContainer.classList.add('hidden');
});