import { useAppDispatch, useAppSelector } from '../../app/rootStore.ts'
import { TaskType } from '../../types/taskType.ts'
import css from './Tasks.module.css'
import { Button } from 'antd'
import { deleteTask } from '../../entity'

interface Props {
  todolistId: string
}

export const Tasks = ({ todolistId }: Props) => {
  const { task } = useAppSelector((state) => state.taskReducer)
  const dispatch = useAppDispatch()
  const tasks = task[todolistId]
  const onClick = (id: string) => {
    dispatch(deleteTask({ id: id }))
  }
  if (!todolistId || !tasks) {
    return null
  }
  console.log(todolistId)
  console.log(tasks)
  return (
    <ul className={css.taskContainer}>
      {tasks.map((task: TaskType) => (
        <li className={css.task} key={task.id}>
          <div className={css.title}>{task.title || '-'}</div>
          <Button onClick={() => onClick(task.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  )
}
