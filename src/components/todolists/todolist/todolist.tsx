import { Button } from 'antd'
import { logOut } from '../../../entity/user/store/userStore.ts'
import { useAppDispatch, useAppSelector } from '../../../app/rootStore.ts'
import { useEffect } from 'react'
import { getTdl } from '../../../entity/todolist/getTdl.ts'
import { TodolistType } from '../../../types/tdlType.ts'

export const Todolist = () => {
  const { tdls } = useAppSelector((state) => state.tdlReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTdl())
  }, [])
  return (
    <div>
      <Button onClick={() => dispatch(logOut())}>1234123</Button>
      <ul>
        {tdls.map((tdl: TodolistType) => (
          <li>{tdl.title}</li>
        ))}
      </ul>
    </div>
  )
}
