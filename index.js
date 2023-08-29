const CelsiusE1 = document.getElementById("Celsius")
const FahrenheitE1 = document.getElementById("Fahrenheit")
const KelvinE1 = document.getElementById("Kelvin")
const RankineE1 = document.getElementById("Rankine")
const RéaumurE1 = document.getElementById("Réaumur")


function computeTemp() {

    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "Celsius":
            FahrenheitE1.value = currentValue * 1.8 + 32;
            KelvinE1.value = currentValue + 273.15
            ;
            RankineE1.value = currentValue * 9 / 5 + 491.67;
            RéaumurE1.value = (currentValue * 4) / 5;
            break;
        case "Fahrenheit":
            CelsiusE1.value = (currentValue - 32) / 1.8;
            KelvinE1.value = (currentValue - 32) / 1.8 + 273.15;
            RankineE1.value = currentValue + 459.67;
            RéaumurE1.value = (currentValue - 32) * 0.44444;
            break;
        case "Kelvin":
            CelsiusE1.value = currentValue - 273.15;
            FahrenheitE1.value = (currentValue - 273.15) * 1.8 + 32;
            RankineE1.value = currentValue * 1.8;
            RéaumurE1.value = (currentValue - 273.15) * 0.8;
            break;
        case "Rankine":
            CelsiusE1.value = (currentValue - 491.67) / 1.8;
            FahrenheitE1.value = (currentValue - 491.67) + 32;
            KelvinE1.value = (currentValue - 491.67) / 1.8 + 273.15;
            RéaumurE1.value = (currentValue - 32 - 459.67) / 2.25;
            break;
        case "Réaumur":
            CelsiusE1.value = currentValue / 0.8;
            FahrenheitE1.value = currentValue * 2.25 + 32;
            KelvinE1.value = currentValue / 0.8 + 273.15;
            RankineE1.value = currentValue * 2.25 + 491.67;
            break;
    
        default:
            break;
    }
}