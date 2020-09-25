[![Netlify Status](https://api.netlify.com/api/v1/badges/ce1eff73-d6ad-4196-8499-153787807df8/deploy-status)](https://app.netlify.com/sites/jolly-liskov-fb7fff/deploys)

### Vue3 Simple Todo Web App

Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS combines the best worlds of React and Angular.

Lets compare Vanilla Javascript vs Vue3 

- **Vanilla Javascript**
```
const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

function addTodo() {
  const enteredValue = inputElement.value;
  const listItemElement = document.createElement('li');
  listItemElement.textContent = enteredValue;
  listEl.appendChild(listItemElement);
  inputElement.value = '';
}

buttonElement.addEventListener('click', addTodo);



```
- **Vue3**

```  
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
```

