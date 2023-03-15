// Import necessary modules
import './style.css';
import { displayArea, displayList } from './dropDownDisplay.js';
import { getItems } from './localStorage.js';
import completeTasks from './interaction.js';
import addNewItem from './modules/addNewItem.js';
import removeItem from './modules/removeItem.js';
import editItem from './modules/editItem.js';
import clearCompleted from './modules/clearCompleted.js';
// const addNewItem = (item, data) => {
//   const obj = { description: item, completed: false };
//   const newData = [...data, obj];
//   setItems(newData);
//   displayList(newData);
//   completeTasks(newData);
//   return newData;
// };

// const removeItem = (itemId, data) => {
//   const newData = data.filter((item) => item.id !== itemId);
//   setItems(newData);
//   displayList(newData);
//   completeTasks(newData);
//   return newData;
// };

// const editItem = (itemKey, newValue, data) => {
//   const oldData = data.filter((item) => item.description === itemKey);
//   oldData[0].description = newValue;
//   setItems(data);
//   displayList(data);
//   return data;
// };

// const clearCompleted = (data) => {
//   const newData = data.filter((item) => !item.completed);
//   setItems(newData);
//   displayList(newData);
//   return newData;
// };

const main = () => {
  // Get the 'addToDo' element and existing to-do data from local storage
  const addToDo = document.querySelector('.addToDo');
  let toDoData = getItems();

  // Listen for changes in 'addToDo' element and add new to-do item
  addToDo.addEventListener('change', () => {
    if (addToDo.value) {
      toDoData = addNewItem(addToDo.value, toDoData);
      addToDo.value = '';
    }
  });

  // Listen for clicks in the display area
  displayArea.addEventListener('click', (event) => {
    if (event.target.classList.contains('input-text')) {
      // Allow user to edit a to-do item's description
      const input = event.target;
      const originalText = input.value;
      const itemKey = event.target.value;

      input.removeAttribute('readonly');
      input.focus();

      input.addEventListener('change', () => {
        if (input.value === '') {
          input.value = originalText;
        } else {
          toDoData = editItem(itemKey, input.value, toDoData);
        }
      });
    }

    // Delete a to-do item
    if (event.target.classList.contains('fa-trash-can')) {
      const parent = event.target.parentElement;
      const added = document.querySelectorAll('.added');
      const itemKey = [...added].indexOf(parent) + 1;
      toDoData = removeItem(itemKey, toDoData);
    }

    // Mark a to-do item as completed or incomplete
    if (event.target.id === 'checkbox') {
      const checkbox = event.target;
      const added = document.querySelectorAll('.added');
      const parent = checkbox.parentElement.parentElement;
      const itemKey = [...added].indexOf(parent);
      toDoData[itemKey].completed = checkbox.checked;
    }
  });

  // Remove all completed to-do items completed tasks
  const clearAll = document.querySelector('.clear');

  clearAll.addEventListener('click', () => {
    toDoData = clearCompleted(toDoData);
  });

  // Display to-do list and check for completed tasks
  displayList(toDoData);
  completeTasks(toDoData);
};

main();

