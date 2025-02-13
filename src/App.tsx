import { Provider } from 'react-redux'
import './App.css'
import { Login } from './page/loginPage/loginPage.tsx'
import { store, useAppDispatch, useAppSelector } from './app/rootStore.ts'
import { useEffect } from 'react'
import { authMe } from './entity/user/api/authMe.ts'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { routes } from './shered/routes'
import { LayoutBasa } from './components/layout/layoutBasa.tsx'
import { Todolists } from './components/todolists/todolists.tsx'

// const tasks = [
//   {
//     id: 1,
//     name: 'Home',
//     userId: 'user5',
//   },
//   {
//     id: 2,
//     name: 'Login',
//     userId: 'user6',
//   },
//   {
//     id: 3,
//     name: 'Register',
//     userId: 'user5',
//   },
// ]
// const users = [
//   {
//     id: 'user5',
//     name: 'Vasya',
//   },
//   {
//     id: 'user6',
//     name: 'Borya',
//   },
//   {
//     id: 'user7',
//     name: 'Dima',
//   },
// ]

// const normalizeBydUsersId = () => {
//   const newObject = {}
//   tasks.forEach((task) => {
//     //шаг 1 если запись нету то создаём новую запись и добавляем в пустой массив добавляем новую таску
//     if (!newObject[task.userId]) {
//       newObject[task.userId] = [task]
//     }
//     //шаг2 если запись есть то создаём новый массив в него копируем всё что было до этого и добавляем новую таску
//     else {
//       newObject[task.userId] = [...newObject[task.userId], task]
//     }
//   })
//   return newObject
// }
// console.log(normalizeBydUsersId())

export const AuthRouting = () => {
  const { isAuthorize, isInit } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authMe())
  }, [])
  if (!isAuthorize) {
    return <Navigate to={routes.login.route()} />
  }
  if (!isInit) {
    return <div>Loading</div>
  }

  return <LayoutBasa outlet={<Outlet />} />
}

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRouting />}>
            <Route path={routes.main.route()} element={<div>Main Page</div>} />
            <Route path={routes.todolist.route()} element={<Todolists />}></Route>
          </Route>
          <Route path={routes.login.route()} element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
