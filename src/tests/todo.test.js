const { addNewItem, removeItem } = require('./todo');
const { setItems, displayList, completeTasks } = require('./todo');

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