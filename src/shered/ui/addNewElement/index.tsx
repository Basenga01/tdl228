import { Button, Input } from 'antd'
import {useState} from "react";

interface Props {
    onClickAddElement: (title: string)=>void
}

export const AddNewElement = ({onClickAddElement}: Props) => {
    const [value, setValue] = useState('')
  return (
    <div>
      <Input onChange={(e)=>setValue(e.target.value)} value={value}/>
      <Button onClick={()=>onClickAddElement(value)} />
    </div>
  )
}