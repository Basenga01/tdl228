import { Provider } from 'react-redux'
import { Login } from './page/loginPage/loginPage.tsx'
import { store, useAppDispatch, useAppSelector } from './app/rootStore.ts'
import { useEffect } from 'react'
import { authMe } from './entity'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { routes } from './shered/routes'
import { LayoutBasa } from './components/layout'
import { Todolists } from './components/todolists'
import { Header } from './feature'

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

  return (
    <LayoutBasa
      footer={<div>footer</div>}
      header={<Header />}
      outlet={<Outlet />}
      sidebar={<div>sidebar</div>}
    />
  )
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
