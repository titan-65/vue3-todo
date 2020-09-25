Vue.createApp({
  data() {
    return {
      todos: [], 
      enteredValue: ''
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.enteredValue)
      this.enteredValue = ''
    }
  }
}).mount('#app')



// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ul');

// function addTodo() {
//   const enteredValue = inputElement.value;
//   const listItemElement = document.createElement('li');
//   listItemElement.textContent = enteredValue;
//   listEl.appendChild(listItemElement);
//   inputElement.value = '';
// }

// buttonElement.addEventListener('click', addTodo);

