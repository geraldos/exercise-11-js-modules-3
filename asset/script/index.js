import transformText from './function.js'

let button = document.getElementById('button-input')
let texts = document.getElementById('text')

button.addEventListener('click', function () {
    let kata = document.getElementById('input').value
    texts.innerHTML = `${transformText(kata)}`
})