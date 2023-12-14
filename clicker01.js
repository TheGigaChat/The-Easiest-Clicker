// HTML values

const clickMe = document.querySelector(".clickMe");
const autoclicker = document.querySelector(".upgrade1");
const power = document.querySelector(".upgrade2");
const scoreNum = document.querySelector(".scoreNum");
const autoclickerLevelNum = document.querySelector(".upgrade1LevelNum");
const powerLevelNum = document.querySelector(".upgrade2LevelNum");
const autoclickerCostNum = document.querySelector(".upgrade1CostNum");
const powerCostNum = document.querySelector(".upgrade2CostNum");


// Initialization

let counter = 0;
let autoclickerCost = 10;
let powerCost = 10;
let autoclickerActive = false;
let clickerPower = 1;
let autoclickerLevel = 0;
let powerLevel = 0;


// Functions

const startAutoclicker = () => {
    autoclickerActive = true;
    if(autoclickerActive) {
        setInterval (() => {
            autoClickerClick();
        }, 1000)  
    }
}

const autoClickerClick = () => {
    if (autoclickerActive) {
        counter++;
        scoreNum.textContent = counter;
    }
}

const autoclickerPurchase = () => {
    if (counter >= autoclickerCost) {
        counter -= autoclickerCost;
        autoclickerCost *= 2;
        autoclickerCostNum.textContent = autoclickerCost;
        autoclickerLevel++;
        autoclickerLevelNum.textContent = autoclickerLevel;
        startAutoclicker();
    } else {

    }
}

const powerPurchase = () => {
    if (counter >= powerCost) {
        counter -= powerCost;
        powerCost *= 2;
        powerCostNum.textContent = powerCost;
        clickerPower++;
        powerLevel++;
        powerLevelNum.textContent = powerLevel;
    } else {

    }
}

const changeScore = () => {
    counter += clickerPower;
    scoreNum.textContent = counter;
}


// Event Listner

clickMe.addEventListener("click", changeScore);

autoclicker.addEventListener("click", autoclickerPurchase);

power.addEventListener("click", powerPurchase);




// test

/* scoreNum.style.color = "green"; */




