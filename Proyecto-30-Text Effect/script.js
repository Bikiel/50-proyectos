const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "We love Programming!"
let idx =1
let spped= 300 / speedEl.value
writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length){
        idx = 1
    }
setTimeout(writeText, spped)
}
