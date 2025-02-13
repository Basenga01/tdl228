import { useAppDispatch, useAppSelector } from '../../../app/rootStore.ts'
import { useEffect } from 'react'
import { getTdl } from '../../../entity/todolist/getTdl.ts'
import { TodolistType } from '../../../types/tdlType.ts'
import { getTask } from '../../../entity/task/getTask.ts'
import {Tasks} from "../../tasks/task.tsx";

export const Todolist = () => {
  const { tdls } = useAppSelector((state) => state.tdlReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTdl())
    dispatch(getTask())
  }, [])
  return (
    <div>
      <ul>
        {tdls.map((tdl: TodolistType) => (
          <li key={tdl.id}>
            {tdl.title}
            <Tasks todolistId={tdl.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}
