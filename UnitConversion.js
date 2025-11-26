/*  1 meter = 3.281 feet
    1 liter = 0,264 gallon
    1 killogram = 2.204 pound */
const input = document.getElementById('user-inpt');
        input.addEventListener('input', () => {
            input.style.width = ((input.value.length + 1) * 25) + 'px';
        });

const userEL = document.getElementById("user-inpt")
const converEL = document.getElementById("conver-el")
const LengthEL = document.getElementById("Length-el")
const VolumeEL = document.getElementById("Volume-el")
const massEL = document.getElementById("mass-el")


converEL.addEventListener('click',function(){
    calculate()
} )


function calculate(){
    let meter = userEL.value * 3.281
    let feet = userEL.value / 3.281
    let liter = userEL.value * 0.264
    let gallon = userEL.value / 0.264
    let kilogram = userEL.value * 2.204 
    let pound = userEL.value / 2.204 
    LengthEL.textContent = `${userEL.value} meter = ${meter.toFixed(3)} feet | ${userEL.value}feet = ${feet.toFixed(3)} meter`
    VolumeEL.textContent = `${userEL.value} liter = ${meter.toFixed(3)} gallon | ${userEL.value}gallon = ${feet.toFixed(3)} liter`
    massEL.textContent = `${userEL.value} kilogram = ${meter.toFixed(3)} pound | ${userEL.value}pound = ${feet.toFixed(3)} kilogram`
}

