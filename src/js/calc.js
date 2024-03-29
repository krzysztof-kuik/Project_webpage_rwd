import { log } from "util";

export default calc;

let accountancyCheckbox = document.getElementById('accountancyCheckboc');
let terminalCheckbox = document.getElementById('terminalCheckbox');
let numberOfProducts = document.getElementById('numberOfProducts');
let numberOfOrders = document.getElementById('numberOfOrders');
let packageChoose = document.querySelector('.dropDownContainer');
let dropDownListContainer = document.querySelector('.optionsContainer');
let options = [...packageChoose.children];

let dropDownList = document.querySelector('.dropdownList');
let packages = [...dropDownList.children];
let arrow = packageChoose.querySelector('img');

let accountancyPrice = 35;
let terminalPrice = 5;
let singleProductPrice = 0.5;
let singleOrderPrice = 0.25;
let basicPackagePrice = parseInt(document.querySelector('.professional .package-option__price').innerText.slice(1));
let professionalPackagePrice = parseInt(document.querySelector('.professional .package-option__price').innerText.slice(1));
let premiumPackagePrice = parseInt(document.querySelector('.premium .package-option__price').innerText.slice(1));

let productsOption = document.getElementById('products');
let ordersOption = document.getElementById('orders');
let packageOption = document.getElementById('package');
let accountancyOption = document.getElementById('accountancy');
let terminalOption = document.getElementById('terminal');
let total = document.getElementById('total');
let totalPrice = total.querySelector('.price');

let dropDownLabel = document.querySelector('.dropDownLabel');
let arrowIcon = document.querySelector('.dropDownContainer img');
let dropDownListInitiators = [dropDownLabel, arrowIcon];

let productsCharge = 0;
let ordersCharge = 0;
let packageCharge = 0;
let chosenPackage = 'Podstawowy';

function totalChargeUpdate() {
    let totalCharge = productsCharge + ordersCharge + packageCharge;
    if (accountancyCheckbox.checked) {
        totalCharge += accountancyPrice;
    }
    if (terminalCheckbox.checked) {
        totalCharge += terminalPrice;
    }
    totalPrice.innerText = `$${totalCharge}`;
}

productsOption.querySelector('.calc_description').innerText = `0 * $${singleProductPrice}`;
productsOption.querySelector('.price').innerText = `$0`;
ordersOption.querySelector('.calc_description').innerText = `$0 * $${singleOrderPrice}`;
ordersOption.querySelector('.price').innerText = `$0`;
totalPrice.innerText = `$0`;
accountancyOption.querySelector('.price').innerText = `$${accountancyPrice}`;

terminalOption.querySelector('.price').innerText = `$${terminalPrice}`;
packageOption.querySelector('.calc_description').innerText = chosenPackage;
packageOption.querySelector('.price').innerText = `$${basicPackagePrice}`;


numberOfProducts.addEventListener('input', function () {

    productsOption.querySelector('.calc_description').innerText = `${numberOfProducts.value} * $${singleProductPrice}`;
    productsOption.querySelector('.price').innerText = `$${numberOfProducts.value * singleProductPrice}`;
    productsCharge = numberOfProducts.value * singleProductPrice;
    totalChargeUpdate();
});


numberOfOrders.addEventListener('input', function () {

    ordersOption.querySelector('.calc_description').innerText = `${numberOfOrders.value} * $${singleOrderPrice}`;
    ordersOption.querySelector('.price').innerText = `$${numberOfOrders.value * singleOrderPrice}`;

    ordersCharge = numberOfOrders.value * singleOrderPrice;
    totalChargeUpdate()
});


dropDownListInitiators.forEach(function (element) {
    element.addEventListener('click', function () {

        arrow.classList.toggle('dropped');
        dropDownList.classList.toggle('droppedList');
        dropDownListContainer.classList.toggle('droppedContainer');



        // if (!arrow.classList.contains('dropped')) {
        //     arrow.style.transform = 'rotate(0)';
        //     arrow.classList.toggle('dropped');
        //     // dropDownList.style.opacity = '1';
        //     // dropDownList.style.zIndex = '1';
        //     console.log(dropDownList);

        //     dropDownList.classList.toggle('droppedList');

        // } else {
        //     arrow.style.transform = 'rotate(-180deg)';
        //     arrow.classList.toggle('dropped');
        //     // dropDownList.style.opacity = '0';
        //     // dropDownList.style.zIndex = '-1';

        // }
    })
});


packages.forEach(function (element) {
    element.addEventListener('click', function () {
        chosenPackage = element.innerText;
        if (chosenPackage.toLowerCase() === 'podstawowy') {
            packageCharge = basicPackagePrice;
        } else if (chosenPackage.toLowerCase() === 'profesjonalny') {
            packageCharge = professionalPackagePrice;
        } else {
            packageCharge = premiumPackagePrice;
        }
        packageOption.querySelector('.calc_description').innerText = element.innerText;
        packageOption.querySelector('.price').innerText = `$${packageCharge}`;
        totalChargeUpdate();
        arrow.classList.toggle('dropped');
        dropDownList.classList.toggle('droppedList');
        dropDownListContainer.classList.toggle('droppedContainer');
        dropDownLabel.innerText = `Wybrany pakiet: ${chosenPackage}`;
    })
});


accountancyCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
        accountancyOption.classList.toggle('invisible');
    } else {
        accountancyOption.classList.toggle('invisible');
    }
    totalChargeUpdate();
});


terminalCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
        terminalOption.classList.toggle('invisible');
    } else {
        terminalOption.classList.toggle('invisible');
    }
    totalChargeUpdate();
});


