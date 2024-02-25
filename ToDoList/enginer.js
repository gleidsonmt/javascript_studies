
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


function pizzaPrice(pizza, ...extras) {

    if (extras.length < 1) {

      if (pizza === 'Margherita') {
        return 7;
      } else if (pizza === 'Formaggio') {
       return 10;
      } else if (pizza === 'Caprese') {
        return 9;
      }

    } else {

      let verify = extras.pop();
      let amount = 0;
      if (verify === 'ExtraToppings') {
        amount +=2;
      } else if(verify === 'ExtraSauce') {
        amount++;
      }

      // return amount + pizzaPrice(pizza, ...extras);
    }

}

// console.log(pizzaPrice('Margherita', 'ExtraSauce'));

// let total = 0;

function orderPrice(pizzaOrders) {
  
    return pizzaOrders.reduce( (acc, cur) => {
        console.log(cur)
        return acc + pizzaPrice(cur.pizza, ...cur.extras)
    }, 0);
    
  }


function PizzaOrder(pizza, ...extras) {
  this.pizza = pizza;
  this.extras = extras;
} 

const allTheMargheritas = Array(100 * 1000).fill(
  new PizzaOrder('Margherita'),
);

const actual = orderPrice(allTheMargheritas);
// 
console.log('actaual = ' + actual);
// 

  // const order = new PizzaOrder('Formaggio', 'ExtraSauce'); // 10, 1 = 11
  // const order1 = new PizzaOrder('Caprese');
  // console.log('oder ' + orderPrice([order]));
  // console.log('oder ' + orderPrice([order1]));