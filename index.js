/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const resultLength = document.getElementById("result-length")
const resultVolume = document.getElementById("result-volume")
const resultMass = document.getElementById("result-mass")

let inputValue = inputField.value

function convertLength() {
    const metersToFeet = inputField.value * 3.281
    const feetToMeters = inputField.value / 3.281
    return `${inputField.value} meters = ${metersToFeet.toFixed(3)} feet | ${inputField.value} feet = ${feetToMeters.toFixed(3)} meters`
}

function convertVolume() {
    const litersToGallons = inputField.value * 0.264
    const gallonsToLiters = inputField.value / 0.264
    return `${inputField.value} litres = ${litersToGallons.toFixed(3)} gallons | ${inputField.value} gallons = ${gallonsToLiters.toFixed(3)} litres`
}

function convertMass() {
    const kilogramsToPounds = inputField.value * 2.204
    const poundsToKilograms = inputField.value / 2.204
    return `${inputField.value} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${inputField.value} pounds = ${poundsToKilograms.toFixed(3)} kilograms`
}

convertBtn.addEventListener("click", function() {
    
    
    resultLength.innerText = convertLength()
    resultVolume.innerText = convertVolume()
    resultMass.innerText = convertMass()
    
    inputField.value = ""
})