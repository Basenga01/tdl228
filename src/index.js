const todolists = [
  { id: 1, title: 'todolist1' },
  { id: 2, title: 'todolist2' },
]

const tasks = [
  { id: 1, title: 'task1', todolist_id: 1 },
  { id: 2, title: 'task2', todolist_id: 1 },
  { id: 3, title: 'task3', todolist_id: 2 },
  { id: 4, title: 'task4', todolist_id: 2 },
]

const taskObj = {}

tasks.forEach((task) => {
  if (!taskObj[task.todolist_id]) {
    taskObj[task.todolist_id] = [task]
  } else {
    const newTasks = [...taskObj[task.todolist_id]]
    newTasks.push(task)
    taskObj[task.todolist_id] = [...newTasks]
  }
})

console.log(taskObj)
