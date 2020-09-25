[![Netlify Status](https://api.netlify.com/api/v1/badges/ce1eff73-d6ad-4196-8499-153787807df8/deploy-status)](https://app.netlify.com/sites/jolly-liskov-fb7fff/deploys)

### Vue3 Simple Todo Web App

Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS combines the best worlds of React and Angular.

Lets compare Vanilla Javascript vs Vue3 

- **Vanilla Javascript**

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);


- **Vue3**
  
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


