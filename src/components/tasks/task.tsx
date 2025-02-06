import { useAppDispatch, useAppSelector } from '../../app/rootStore.ts'
import { useEffect } from 'react'
import { getTask } from '../../entity/task/getTask.ts'
import { TaskType } from '../../types/taskType.ts'

export const Task = () => {
  const { tasks } = useAppSelector((state) => state.taskReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTask())
  }, [])
  return (
    <ul>
      {tasks.map((task: TaskType) => (
        <li key={task.todolistId}>
          {task.title}
          {task.description}
        </li>
      ))}
    </ul>
  )
}
