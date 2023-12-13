

function getIQ(){
    let adhs = document.querySelector('#adhs').value

    let age = document.querySelector('#age').value

    let output = document.querySelector('#output')

    let groß = document.querySelector("#groß").checked
let großRechnung = Math.round(((adhs - 100) + (age/10)) * 0.9 * 1.1)

let klein = document.querySelector("#klein").checked
let kleinRechnung = Math.round(((adhs - 100) + (age/10)) * 0.9 * 0.9)

// if (groß) {
//     output.innerHTML = großRechnung
// } else if (klein) {
//     output.innerHTML = kleinRechnung
// }

switch(true){
    case groß:
        output.innerHTML = großRechnung
        break
    case klein:
        output.innerHTML = kleinRechnung
        break
}




}



