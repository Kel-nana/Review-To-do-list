import { displayList } from '../dropDownDisplay.js';
import { setItems } from '../localStorage.js';
import completeTasks from '../interaction.js';

const addNewItem = (item, data) => {
  const obj = { description: item, completed: false };
  const newData = [...data, obj];
  setItems(newData);
  displayList(newData);
  completeTasks(newData);
  return newData;
};

export default addNewItem;