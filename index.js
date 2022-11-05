let calculate = document.querySelector(".submit")
calculate.addEventListener("click", () => {
    let age = document.querySelector("#age").value
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value
    if (height > 0 && weight > 0 && age > 0) {
        if (age < 2 || age > 120) {
            let resultBox = document.querySelector(".result")
            if (resultBox.firstElementChild) {
                resultBox.removeChild(resultBox.firstElementChild);
            }
            let result = document.createElement("p")
            resultBox.appendChild(result)
            result.innerHTML = "Provide age between 2 and 120 "
        }
        else {
            let BMI = Math.floor(weight / ((height / 100) ** 2)) + "kg/m2";
            let resultBox = document.querySelector(".result")
            if (resultBox.firstElementChild) {
                resultBox.removeChild(resultBox.firstElementChild);
            }
            let result = document.createElement("p")
            resultBox.appendChild(result)
            result.innerHTML = "Result : " + (BMI)
        }
    }
    else {
        let resultBox = document.querySelector(".result")
        if (resultBox.firstElementChild) {
            resultBox.removeChild(resultBox.firstElementChild);
        }
        let result = document.createElement("p")
        resultBox.appendChild(result)
        result.innerHTML = "Provide positive numbers in the input Fields "
    }
})

let clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    document.querySelector("#age").value = 0
    document.querySelector("#height").value = 0
    document.querySelector("#weight").value = 0
    let resultBox = document.querySelector(".result")
    if (resultBox.firstElementChild) {
        resultBox.removeChild(resultBox.firstElementChild);
    }
})