import { Provider } from 'react-redux';
import './App.css'
import {Login} from "./page/loginPage/loginPage.tsx";
import {store, useAppDispatch, useAppSelector} from "./app/rootStore.ts";
import {useEffect} from "react";
import {authMe} from "./entity/user/api/authMe.ts";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Todolist} from "./components/todolists/todolist/todolist.tsx";
import {routes} from "./shered/routes";
import {LayoutBasa} from "./components/layout/layoutBasa.tsx";

export const App = () => {

    const { isAuthorize, isInit } = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
    dispatch(authMe())
    }, [])


    if (!isAuthorize) {
        return <Navigate to={routes.login.route()} />
    }
    if(isInit) {
        <div>123123123123</div>
    }

  return (
      <Outlet></Outlet>
  )
}

export const AppWrapper = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route element={<App/>} >
                      <Route path={routes.main.route()} element={<LayoutBasa outlet={<Outlet/>}/>}/>
                      <Route path={routes.todolist.route()} element={<Todolist/>}></Route>
                  </Route>
                  <Route path={routes.login.route()} element={<Login/>}></Route>
              </Routes>
          </BrowserRouter>
      </Provider>
  )
}
