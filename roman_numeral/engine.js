let label = document.querySelector('label')
let input = document.querySelector('input')

function getInput() {
    console.log('wow a rebincoca da parafuseta e sinistra')
    console.log(label)
    console.log('here' + input.value.match(/[^0-9]/g))
    if (input.value.match(/[^0-9]/g) !== null) {
        label.innerHTML = "Colocou uma letra, é sério isso?"
    } else if (input.value == 0) {
        label.innerHTML = 'Eita 0? ai não da...'
    } else 
        label.innerHTML =  convertToRoman(input.value)
    console.log(input.value)
}


function convertToRoman(num) {

    let arr = num.toString().split('');
    let newArr = [];
    let simbols = [ 'M', 'D', 'C', 'L', 'X', 'V', 'I' ]

    function recurse(arr) {
        if (arr.length < 1) {
        return []
        } else {
        let a = ''
        if (arr.length == 4 ) a = 'M'
        else if( arr.length == 3) a = 'C'
        else if( arr.length == 2) a = 'X'
        else if (arr.length == 1) a = 'I'
        newArr.push(...convertUnit(arr[0], a));
        arr.splice(0,1)
        return recurse(arr);
        }
    }

    function convertUnit(n, char) {
        let arr = []
        let index = simbols.indexOf(char);
        if (n == 9) {
            arr.push(char + simbols[index - 2])
        } else if (n < 4) {
            arr.push(char.replace(/(\w+)/, '$1'.repeat(n)))
        } else if (n == 4) {
            arr.push(char + (simbols[index - 1]))
        } else if (n == 5) {
            arr.push(simbols[index-1] === undefined ? simbols[0] : simbols[index-1])
        } else if(n > 5) {
            arr.push(simbols[index-1] + char.replace(/(\w+)/, '$1'.repeat(n-5)))
        } 
        return arr;
    }

    recurse(arr)
    return newArr.join('');
}