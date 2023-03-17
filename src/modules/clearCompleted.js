import { displayList } from './dropDownDisplay.js';
import { setItems } from './localStorage.js';

const clearCompleted = (data) => {
  const newData = data.filter((item) => !item.completed);
  setItems(newData);
  displayList(newData);
  return newData;
};

export default clearCompleted;