import { useAppDispatch, useAppSelector } from '../../../app/rootStore.ts'
import { useEffect } from 'react'
import { getTask, getTdl } from '../../../entity'
import { Tasks } from '../../tasks'
import css from './Todolist.module.css'
import { Button } from 'antd'
import { delTdl } from '../../../entity/todolist/api/delTdl.ts'

export const Todolist = () => {
  const { tdls } = useAppSelector((state) => state.tdlReducer)
  const dispatch = useAppDispatch()
  const onClick = (id: string) => {
    dispatch(delTdl({ id }))
  }
  useEffect(() => {
    dispatch(getTdl())
    dispatch(getTask())
  }, [dispatch])
  return (
    <ul className={css.todolistContainer}>
      {tdls.map((tdl) => (
        <li className={css.todolist} key={tdl.id}>
          <div className={css.title}>{tdl.title}</div>
          <Tasks todolistId={tdl.id} />
          <Button
            onClick={() => {
              onClick(tdl.id)
            }}
          ></Button>
        </li>
      ))}
    </ul>
  )
}
