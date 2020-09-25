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



// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// /**
//  * @name addTodo
//  * @description
//  * @deprecated
//  */
// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

