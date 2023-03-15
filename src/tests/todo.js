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




module.exports = { addNewItem, removeItem, setItems, displayList, completeTasks };


