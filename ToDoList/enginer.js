

document.querySelector('#push').onclick = function() {

    var input = document.querySelector('#form input');

    if (input.value.length == 0) {
        alert('Please Enter a Task')
    } else {
        var tasks = document.querySelector('#tasks');

        tasks.innerHTML +=
            `
                <div class='task'>
                    <span id='taskname'>
                        ${input.value}
                    </span>
                    <button class='delete' onclick='remove()'>
                        X
                    </button>
                </div>
            `;
    }
}

function remove() {
    var tasks = document.querySelector('#tasks'); // tasks parent
    var arr = tasks.querySelectorAll('.task'); // children 

    arr.forEach( (el) => {
        console.log(el)
        tasks.removeChild(el);
    })

}