import { Button, Input } from 'antd'
import css from './style.module.css'
import { UserOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/rootStore.ts'
import { signIn } from '../../entity/user/api/signIn.ts'
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const dispatch = useAppDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { isAuthorize } = useAppSelector((state) => state.userReducer)

  if (isAuthorize) {
    return <Navigate to={'/todolist'} />
  }

  const onClick = () => {
    if (password && login) {
      console.log(password, login)
      dispatch(signIn({ password, username: login }))
    } else {
      alert('.!.')
    }
  }

  return (
    <div className={css.container}>
      <div className={css.loginContainer}>
        <Input
          value={login}
          placeholder={'Login'}
          prefix={<UserOutlined />}
          onChange={(ev) => {
            setLogin(ev.target.value)
          }}
        ></Input>
        <Input.Password
          value={password}
          placeholder={'Password'}
          prefix={<UserOutlined />}
          onChange={(ev) => {
            setPassword(ev.target.value)
          }}
        />
        <Button onClick={onClick} type="dashed">
          Enter
        </Button>
      </div>
    </div>
  )
}
