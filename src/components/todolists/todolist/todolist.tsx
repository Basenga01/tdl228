import { useAppDispatch, useAppSelector } from '../../../app/rootStore.ts'
import { useEffect } from 'react'
import { getTdl } from '../../../entity/todolist/getTdl.ts'
import { TodolistType } from '../../../types/tdlType.ts'
import { getTask } from '../../../entity/task/getTask.ts'
import { Tasks } from '../../tasks/task.tsx'
import css from './Todolist.module.css'

export const Todolist = () => {
  const { tdls } = useAppSelector((state) => state.tdlReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTdl())
    dispatch(getTask())
  }, [])
  return (
    <ul className={css.todolistContainer}>
      {tdls.map((tdl: TodolistType) => (
        <li className={css.todolist} key={tdl.id}>
          <div className={css.title}>{tdl.title}</div>
          <Tasks todolistId={tdl.id} />
        </li>
      ))}
    </ul>
  )
}
