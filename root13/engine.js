let leftSide = document.querySelector('textarea')
let rightSide = document.querySelector('.copy-text')


function convertLeftSide() {
    rightSide.innerHTML = rot13(true, leftSide.value)
}

function convertRightSide() {
    leftSide.innerHTML = rot13(false, rightSide.value)
}

function copy() {
    let input = document.getElementById('right-side')

    navigator.clipboard.writeText(input.value).then(() => {
        alert('Texto copiado!')
    })
}

// let textoCopiado = document.getElementById("texto");
// textoCopiado.select();
// textoCopiado.setSelectionRange(0, 99999)
// document.execCommand("copy");
// alert("O texto é: " + textoCopiado.value);


function rot13(encrypt, str) {

    let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L' , 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    let arr = str.split('');
    let swap = [];
    arr.forEach((el) => {
        
        if (/[^a-z]/ig.test(el)) {
          swap.push(el); 
        } else {
          let index = alphabet.indexOf(el.toUpperCase())
  
          if (encrypt) {
            if (index + 13 <= 25) {
                      console.log(el)
                swap.push(alphabet[index + 13])
            } else {
                swap.push(alphabet[index - 13])
            }
          } else {
             if (index - 13 < 0) {
              swap.push(alphabet[index + 13])
            } else {
                swap.push(alphabet[index - 13])
            }
          }
  
          
        }
  
    })
    return swap.join('');
  }