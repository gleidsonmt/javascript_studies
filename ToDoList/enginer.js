
let acc = 0;

document.querySelector('#push').onclick = function() {

    var input = document.querySelector('#form input');
    
    if (input.value.length == 0) {
        alert('Please Enter a Task')
    } else {
        let tasks = document.querySelector('#tasks');

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

        var current = document.querySelectorAll('.delete')

        for(var i = 0; i < current.length; i++) {
            current[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        let tk = document.querySelectorAll('.task');

        for(var i = 0; i < tk.length; i++) {
           tk[i].onclick = function() {
                this.classList.toggle('completed')
           }
        }
    }
}
