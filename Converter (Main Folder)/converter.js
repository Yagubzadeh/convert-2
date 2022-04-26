let right = document.querySelectorAll('#right');
let left = document.querySelectorAll('#left');
let p = document.querySelector('p');
let amount2 = document.getElementById('amount2');
let amount1 = document.getElementById('amount1');
let button = document.querySelectorAll('button');
let livecurrency = document.getElementById('livecurrency');
let livecurrency2 = document.getElementById('livecurrency2');

let cur = 'USD';
let currency = 'RUB';

right.forEach(event => {
    event.addEventListener('click', function () {
        cur = this.innerText
        getvalue()
    })
});

left.forEach(event => {
    event.addEventListener('click', function () {
        currency = this.innerText
        getvalue()
    })
});

amount1.addEventListener('keyup', function () {
    getvalue()
})

function same() {
    amount1.addEventListener('keyup', function () {
        amount2.value = amount1.value
    })
};

const getvalue = async () => {
    let out;
    await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=${cur}`)
        .then(response => response.json())
        .then((data) => {
            out = Object.values(data.rates)[0]
            console.log(data)
        })
    if ((cur == 'RUB') && (currency == 'RUB')) {
        amount2.value = amount1.value
    }
    if ((cur == 'RUB') && (currency == 'TRY')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 TRY = ' + out + ' RUB'
        livecurrency2.innerText = '1 RUB = ' + 1 / out + ' TRY'
    }
    if ((cur == 'RUB') && (currency == 'USD')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 USD = ' + out + ' RUB'
        livecurrency2.innerText = '1 RUB = ' + 1 / out + ' USD'
    }
    if ((cur == 'RUB') && (currency == 'AZN')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 AZN = ' + out + ' RUB'
        livecurrency2.innerText = '1 RUB = ' + 1 / out + ' AZN'
    }
    else if ((cur == 'USD') && (currency == 'USD')) {
        amount2.value = amount1.value
    }
    else if ((cur == 'USD') && (currency == 'TRY')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 TRY = ' + out + ' USD'
        livecurrency2.innerText = '1 USD = ' + 1 / out + ' TRY'
    }
    else if ((cur == 'USD') && (currency == 'RUB')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 RUB = ' + out + ' USD'
        livecurrency2.innerText = '1 USD = ' + 1 / out + ' RUB'
    }
    else if ((cur == 'USD') && (currency == 'AZN')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 AZN = ' + out + ' USD'
        livecurrency2.innerText = '1 USD = ' + 1 / out + ' AZN'
    }
    else if ((cur == 'TRY') && (currency == 'TRY')) {
        amount2.value = amount1.value
    }
    else if ((cur == 'TRY') && (currency == 'USD')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 USD = ' + out + ' TRY'
        livecurrency2.innerText = '1 TRY = ' + 1 / out + ' USD'
    }
    else if ((cur == 'TRY') && (currency == 'RUB')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 RUB = ' + out + ' TRY'
        livecurrency2.innerText = '1 TRY = ' + 1 / out + ' RUB'
    }
    else if ((cur == 'TRY') && (currency == 'AZN')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 AZN = ' + out + ' TRY'
        livecurrency2.innerText = '1 TRY = ' + 1 / out + ' AZN'
    }
    else if ((cur == 'AZN') && (currency == 'AZN')) {
        amount2.value = amount1.value
    }
    else if ((cur == 'AZN') && (currency == 'TRY')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 TRY = ' + out + ' AZN'
        livecurrency2.innerText = '1 AZN = ' + 1 / out + ' TRY'
    }
    else if ((cur == 'AZN') && (currency == 'RUB')) {
        amount2.value = amount1.value * out;
        livecurrency.innerText = '1 RUB = ' + out + ' AZN'
        livecurrency2.innerText = '1 AZN = ' + 1 / out + ' RUB'
    }
    else if ((cur == 'AZN') && (currency == 'USD')) {
        amount2.value = amount1.value * out
        livecurrency.innerText = '1 USD = ' + out + ' AZN'
        livecurrency2.innerText = '1 AZN = ' + 1 / out + ' USD'
    }
}

right.forEach((event) => {
    event.addEventListener('click', function () {
        right.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
})

left.forEach((event) => {
    event.addEventListener('click', function () {
        left.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
});