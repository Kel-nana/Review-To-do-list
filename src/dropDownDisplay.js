// Select the DOM element with the class 'display'
export const displayArea = document.querySelector('.display');

// Define a function that takes an array of to-do items and displays them on the page
const displayList = (toDoData) => {
  // Clear the display area to start with a clean slate
  displayArea.innerHTML = '';

  // Loop through the to-do items
  toDoData.forEach((data, i) => {
    // Add an ID to each item
    data.id = i + 1;

    // Create a new list item element and add the 'added' class to it
    const li = document.createElement('li');
    li.classList.add('added');
    // Append the new list item to the display area
    displayArea.appendChild(li);

    // Create a new paragraph element and append it to the list item
    const p = document.createElement('p');
    li.appendChild(p);

    // Create a new checkbox element and append it to the paragraph element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.classList.add('checkbox');
    p.appendChild(checkbox);

    // Create a new input element for the item's text content and append it to the paragraph element
    const textContent = document.createElement('input');
    textContent.classList.add('input-text');
    textContent.type = 'text';
    textContent.value = data.description;
    textContent.setAttribute('readonly', 'readonly');
    p.appendChild(textContent);

    // Create a new icon element for the item's actions and append it to the list item
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    li.appendChild(icon);
  });

  // Select all the list items with the 'added' class
  const added = document.querySelectorAll('.added');

  // Loop through the list items and add event listeners for mouseover and mouseout events
  added.forEach((el) => {
    el.addEventListener('mouseover', () => {
      // Toggle the 'hover-list' class on the list item
      el.classList.toggle('hover-list');
      // Toggle the 'fa-ellipsis-vertical' and 'fa-trash-can' classes on the icon element
      el.children[1].classList.toggle('fa-ellipsis-vertical');
      el.children[1].classList.toggle('fa-trash-can');
    });

    el.addEventListener('mouseout', () => {
      // Toggle the 'hover-list' class on the list item
      el.classList.toggle('hover-list');
      // Toggle the 'fa-ellipsis-vertical' and 'fa-trash-can' classes on the icon element
      el.children[1].classList.toggle('fa-trash-can');
      el.children[1].classList.toggle('fa-ellipsis-vertical');
    });
  });
};

// Export the displayList function so it can be used in other modules
export { displayList };
