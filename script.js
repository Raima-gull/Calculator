let buttons = document.getElementsByClassName("calculator-button")
let calculatorScreen = document.getElementById("calculator-screen")
let clear = document.getElementById("Clear")
let equal = document.getElementById("equal")

for (i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', (e) => {
        calculatorScreen.value += e.target.innerText;
        console.log(buttons[i])
    })
}
equal.addEventListener('click', () => {
 newValue=eval(calculatorScreen.value)
 calculatorScreen.value=newValue

}
)
clear.addEventListener('click', () => {
    calculatorScreen.value = ""
})