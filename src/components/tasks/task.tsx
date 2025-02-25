import { useAppSelector } from '../../app/rootStore.ts'
import { TaskType } from '../../types/taskType.ts'
import css from './Tasks.module.css'

interface Props {
  todolistId: string
}

export const Tasks = ({ todolistId }: Props) => {
  const { task } = useAppSelector((state) => state.taskReducer)
  const tasks = task[todolistId]
  if (!todolistId || !tasks) {
    return null
  }
  console.log(todolistId)
  console.log(tasks)
  return (
    <ul className={css.taskContainer}>
      {tasks.map((task: TaskType) => (
        <li key={task.id}>
          {task.title}
          {task.description}
        </li>
      ))}
    </ul>
  )
}
