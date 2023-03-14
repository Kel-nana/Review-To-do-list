// Import necessary modules
import './style.css';
import { displayArea, displayList } from './dropDownDisplay.js';
import { setItems, getItems } from './localStorage.js';
import completeTasks from './interaction.js';

// Get the 'addToDo' element and existing to-do data from local storage
const addToDo = document.querySelector('.addToDo');
let toDoData = getItems();

// Listen for changes in 'addToDo' element and add new to-do item
addToDo.addEventListener('change', () => {
  if (addToDo.value) {
    const obj = { description: addToDo.value, completed: false };
    toDoData.push(obj);
    addToDo.value = '';
    displayList(toDoData);
    completeTasks(toDoData);
    setItems(toDoData);
  }
});

// Remove a to-do item
const removeItem = (item) => {
  toDoData = toDoData.filter((data) => data.id !== item);
  displayList(toDoData);
  completeTasks(toDoData);
  setItems(toDoData);
};

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
        const oldData = toDoData.filter((data) => data.description === itemKey);
        oldData[0].description = input.value;
        setItems(toDoData);
        displayList(toDoData);
      }
    });
  }

  // Delete a to-do item
  if (event.target.classList.contains('fa-trash-can')) {
    const parent = event.target.parentElement;
    const added = document.querySelectorAll('.added');
    const itemKey = [...added].indexOf(parent) + 1;
    removeItem(itemKey);
  }

  // Mark a to-do item as completed or incomplete
  if (event.target.id === 'checkbox') {
    const checkbox = event.target;
    const added = document.querySelectorAll('.added');
    const parent = checkbox.parentElement.parentElement;
    const itemKey = [...added].indexOf(parent);
    toDoData[itemKey].completed = checkbox.checked;

    checkbox.addEventListener('change', () => {
      displayList(toDoData);
      completeTasks(toDoData);
      setItems(toDoData);
    });
  }
});

// Remove all completed to-do items completed tasks
const clearAll = document.querySelector('.clear');

clearAll.addEventListener('click', () => {
  toDoData = toDoData.filter((data) => !data.completed);
  displayList(toDoData);
  setItems(toDoData);
});

// Display to-do list and check for completed tasks
displayList(toDoData);
completeTasks(toDoData);
