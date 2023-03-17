const completeTasks = (toDoData) => {
  toDoData.forEach((data, i) => {
    // If the task is completed
    if (data.completed) {
      // Set the checkbox for that task to be checked
      document.querySelectorAll('.checkbox')[i].setAttribute('checked', 'checked');
    }
  });
};

export default completeTasks;