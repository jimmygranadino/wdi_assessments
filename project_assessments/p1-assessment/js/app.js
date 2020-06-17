function addition () {
    // make sure numbers are the right data type because strings won't calculate
    let displayNumber = parseInt(document.getElementById("visibleCounter").value)
    let userInput = parseInt(document.getElementById("numInput").value)
    let sum = document.getElementById("addBtn").value
    var result

    if (sum == "sum") {
        result = displayNumber + userInput
        if (result > -1) { // return font color to black if not a negative number
            document.getElementById("visibleCounter").style.color = "#000000"
        }
    }
    document.getElementById("visibleCounter").value = result // displays result to user
}

function subtract () {
    let displayNumber = parseInt(document.getElementById("visibleCounter").value)
    let userInput = parseInt(document.getElementById("numInput").value)
    let subtract = document.getElementById("minusBtn").value
    var result

    if (subtract == "subtract") {
        result = displayNumber - userInput
        if (result < 0) { // set color to red if a negative number
            document.getElementById("visibleCounter").style.color = "#ff0000"
        }
    }
    document.getElementById("visibleCounter").value = result
}