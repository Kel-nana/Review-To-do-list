import { displayList } from '../dropDownDisplay.js';
import { setItems } from '../localStorage.js';
import completeTasks from '../interaction.js';

const removeItem = (itemId, data) => {
  const newData = data.filter((item) => item.id !== itemId);
  setItems(newData);
  displayList(newData);
  completeTasks(newData);
  return newData;
};

export default removeItem;