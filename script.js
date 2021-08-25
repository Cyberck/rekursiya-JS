let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        amount: 0,
        kcall: 500,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        amount: 0,
        kcall: 1100,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kcall: 1500,
        get Summ() {
            return this.price * this.amount;
        },
        get Kcall() {
            return this.kcall * this.amount;
        }
    }
}


// Доп продукция

let extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 1000,
        kcall: 100
    },
    lettuce: {
        name: 'Салатный лист',
        price: 2000,
        kcall: 30
    },
    cheese: {
        name: 'Сыр',
        price: 2500,
        kcall: 150
    }
}



let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    receiptBtn = document.querySelector('.receipt__window-btn');



btnPlusOrMinus.forEach(function (item) {
    item.addEventListener('click', function () {
        plusOrMinus(this);
    })
})

function plusOrMinus(element) {
    // closest() - подключаеться к ближайшему заданому родителю
    // getAttribute() - берет значение у указаного атрибута
    let parentId = element.closest('.main__product').getAttribute('id'),
        out = element.closest('.main__product').querySelector('.main__product-num'),
        price = element.closest('.main__product').querySelector('.main__product-price span'),
        kcall = element.closest('.main__product').querySelector('.main__product-kcall span');

    if (element.getAttribute('data-symbol') == '+') {
        product[parentId].amount++
    } else if (element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ;
    kcall.innerHTML = product[parentId].Kcall;
}

let i = document.querySelector('.header__timer-extra');

let i = 0;
function rek() {
    
if(i < 100) {
    i++
    rek();
}
}
rek();



