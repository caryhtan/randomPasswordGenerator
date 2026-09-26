let generateBtn = document.getElementById("generate-btn")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let pwLength = 15
let lengthValue = document.getElementById("length-value")
let lengthSlider = document.getElementById("length-slider")
let tooltipOne = document.getElementById("tooltip-one")
let tooltipTwo = document.getElementById("tooltip-two")
let includeNumbers = document.getElementById("include-numbers")
let includeSymbols = document.getElementById("include-symbols")

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*"

function generatePassword(){
    let chars = letters
    if(includeNumbers.checked){
        chars += numbers
    }

    if (includeSymbols.checked){
        chars += symbols
    }

    let password = ""
    for (let i = 0; i < pwLength; i++){
        let randomIndex = Math.floor(Math.random() * chars.length)
        password += chars[randomIndex]
    }
    return password
}

generateBtn.addEventListener("click", function(){
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
})

lengthValue.textContent = pwLength

lengthSlider.addEventListener("input", function(){
    pwLength = Number(lengthSlider.value)
    lengthValue.textContent = pwLength
})

function copyPassword(passwordElement, tooltipElement){
    let passwordText = passwordElement.textContent
    navigator.clipboard.writeText(passwordText)

    tooltipElement.textContent = "Copied!"

    setTimeout(function() {
        tooltipElement.textContent = "Click to copy"
    }, 1000)
}

passwordOne.addEventListener("click", function(){
    copyPassword(passwordOne, tooltipOne)
})

passwordTwo.addEventListener("click", function(){
    copyPassword(passwordTwo, tooltipTwo)
})