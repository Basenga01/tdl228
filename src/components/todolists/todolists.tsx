import { Todolist } from './todolist'
import { AddNewElement } from '../../shered'

export const Todolists = () => {
  const onClickAddTodolist = (title: string) =>{
    console.log(title)
  }
  return (
    <div>
      <AddNewElement onClickAddElement={onClickAddTodolist}/><Todolist/>
    </div>
  )
}