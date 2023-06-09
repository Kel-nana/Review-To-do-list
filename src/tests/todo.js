const setItems = jest.fn();
const displayList = jest.fn();
const completeTasks = jest.fn();

const addNewItem = (item, data) => {
    const obj = { description: item, completed: false };
    const newData = [...data, obj];
    setItems(newData);
    displayList(newData);
    completeTasks(newData);
    return newData;
};



const removeItem = (itemId, data) => {
    const newData = data.filter((item) => item.id !== itemId);
    setItems(newData);
    displayList(newData);
    completeTasks(newData);
    return newData;
};

const editItem = (itemKey, newValue, data) => {
    const oldData = data.filter((item) => item.description === itemKey);
    if (oldData.length === 0) {
      return data; 
    }
    oldData[0].description = newValue;
    setItems(data);
    displayList(data);
    return data;
  };

  const clearCompleted = (data) => {
    const newData = data.filter((item) => !item.completed);
    setItems(newData);
    displayList(newData);
    return newData;
  };

  const completeTasksFunction = (toDoData) => {
    return toDoData.map((data) => {
      if (data.completed) {
        return { ...data, completed: true };
      } else {
        return data;
      }
    });
  }

module.exports = { addNewItem, removeItem, editItem, clearCompleted, completeTasks, setItems, displayList, completeTasksFunction };


