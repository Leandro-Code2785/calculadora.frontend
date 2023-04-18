let isRound = false
let isFixed = false

const elementIsRound = document.getElementById("isRound")
const elementIsFixed = document.getElementById("isFixed")

$(document).ready(function () {
  $("#calcular").click(function (event) {
    event.preventDefault()
    const value1 = parseFloat($("#valor1").val())
    const value2 = parseFloat($("#valor2").val())

    try {
      Number(value1)
      Number(value2)
    } catch (err) {
      alert("Debes introducir números")
      return
    }

    const operacion = $("#operacion").val()
    let result = 0
    if (operacion == "suma") {
      result = value1 + value2
    } else if (operacion == "resta") {
      result = value1 - value2
    } else if (operacion == "multiplicacion") {
      result = value1 * value2
    } else if (operacion == "division") {
      result = value1 / value2
    }

    if (isRound) {
      result = Math.round(result)
    }

    if (isFixed) {
      result = result.toFixed(2)
    }

    $("#resultado").text("El resultado es: " + result)
  })
})

const cleanUpBtn = document.getElementById("cleanUp")

cleanUpBtn.addEventListener("click", function () {
  const value1 = document.getElementById("valor1")
  const value2 = document.getElementById("valor2")
  const result = document.getElementById("resultado")
  value1.value = ""
  value2.value = ""
  result.innerHTML = ""
})

elementIsRound.addEventListener("click", function () {
  isRound = !isRound
})

elementIsFixed.addEventListener("click", function () {
  isFixed = !isFixed
})
