import { Button } from 'antd'
import { logOut } from '../../entity/user/store/userStore.ts'
import { useAppDispatch } from '../../app/rootStore.ts'

export const Header = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
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
