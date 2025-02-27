import { Button } from 'antd'
import { logOut } from '../../entity/user/store/userStore.ts'
import {useAppDispatch, useAppSelector} from '../../app/rootStore.ts'

export const Header = () => {
  const dispatch = useAppDispatch()
    const { firstName } = useAppSelector((state) => state.userReducer)
  return (
    <div>
        <div>Привет, {firstName}</div>
      <Button
        onClick={() => {
          dispatch(logOut())
        }}
      >
        LogOut
      </Button>
    </div>
  )
}
