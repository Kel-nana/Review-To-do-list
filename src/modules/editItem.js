import { displayList } from '../dropDownDisplay.js';
import { setItems } from '../localStorage.js';

const editItem = (itemKey, newValue, data) => {
  const oldData = data.filter((item) => item.description === itemKey);
  oldData[0].description = newValue;
  setItems(data);
  displayList(data);
  return data;
};

export default editItem;