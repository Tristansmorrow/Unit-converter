
let input = document.getElementById("input")

function conversion(valNum) {
    document.getElementById("meter-feet").innerHTML = `${input.value} Meters = ${(input.value * 3.281).toFixed(3)} Feet | ${input.value} Feet = ${(input.value / 3.281).toFixed(3)} Meters`
    document.getElementById("liter-gallon").innerHTML = `${input.value} Litres = ${(input.value * 0.264).toFixed(3)} Gallons | ${input.value} Gallons = ${(input.value / 0.264).toFixed(3)} Litres`
    document.getElementById("kilogram-pound").innerHTML = `${input.value} Kilograms = ${(input.value * 2.204).toFixed(3)} Pounds | ${input.value} Pounds ${(input.value / 2.204).toFixed(3)} Kilograms`
}
