const { addNewItem, removeItem, editItem,clearCompleted, completeTasksFunction} = require('./todo');
const { setItems, displayList, completeTasks } = require('./todo');
// const { completeTasksFunction } = require('./completeTaskTest');

describe('addNewItem', () => {
    test('should add a new item to the list and return the updated list', () => {
        const item = 'Buy milk';
        const data = [{ description: 'Buy eggs', completed: false }];
        const expected = [
            { description: 'Buy eggs', completed: false },
            { description: 'Buy milk', completed: false },
        ];

        const result = addNewItem(item, data);

        expect(result).toEqual(expected);
        expect(setItems).toHaveBeenCalledWith(expected);
        expect(displayList).toHaveBeenCalledWith(expected);
        expect(completeTasks).toHaveBeenCalledWith(expected);
    });
});

describe('removeItem', () => {
    test('should remove an item from the list and return the updated list', () => {
        const itemId = 1;
        const data = [
            { id: 1, description: 'Buy eggs', completed: false },
            { id: 2, description: 'Buy milk', completed: false },
        ];
        const expected = [{ id: 2, description: 'Buy milk', completed: false }];

        const result = removeItem(itemId, data);

        expect(result).toEqual(expected);
        expect(setItems).toHaveBeenCalledWith(expected);
        expect(displayList).toHaveBeenCalledWith(expected);
        expect(completeTasks).toHaveBeenCalledWith(expected);
    });
});

describe('editItem', () => {
  const initialData = [
    {description: 'item1'},
    {description: 'item2'},
    {description: 'item3'}
  ];

  test('should update an item in the data array', () => {
    const itemKey = 'item2';
    const newValue = 'newItem';
    const expectedData = [
      {description: 'item1'},
      {description: 'newItem'},
      {description: 'item3'}
    ];
    const result = editItem(itemKey, newValue, initialData);
    expect(result).toEqual(expectedData);
  });

  test('should return the original data array if the item to be edited is not found', () => {
    const itemKey = 'nonExistingItem';
    const newValue = 'newItem';
    const result = editItem(itemKey, newValue, initialData);
    expect(result).toEqual(initialData);
  });
});

describe('clearCompleted', () => {
  test('clearCompleted should remove completed items from the data array', () => {
      const initialData = [
        { id: 1, description: 'item1', completed: true },
        { id: 2, description: 'item2', completed: false },
        { id: 3, description: 'item3', completed: true },
      ];
      const expectedData = [
        { id: 2, description: 'item2', completed: false },
      ];
    
      const result = clearCompleted(initialData);
    
      expect(result).toEqual(expectedData);
    });      
});

describe('completeTasksFunction', () => {
  test('should set the completed field to true for all completed tasks', () => {
    const toDoData = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: false },
      { description: 'Task 4', completed: true },
    ];
    const expectedOutput = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: false },
      { description: 'Task 4', completed: true },
    ];
    const result = completeTasksFunction(toDoData);
    expect(result).toEqual(expectedOutput);
  });

  test('should not modify the input data', () => {
    const toDoData = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: false },
      { description: 'Task 4', completed: true },
    ];
    const inputCopy = JSON.parse(JSON.stringify(toDoData)); // deep copy
    completeTasksFunction(toDoData);
    expect(toDoData).toEqual(inputCopy);
  });
});