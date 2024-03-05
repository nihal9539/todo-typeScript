import { useState } from 'react'
import './App.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import Input from './componenets/Input';
import Button from './componenets/Button';
import { Items } from './types/utils';
import ItemList from './componenets/ItemList';



// type Items = {
//   title:string,
//   id:string
// }[]
function App() {
  const [items, setItems] = useState<Items[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setItems(prev => [...prev, { title: inputValue, id: Date.now().toString() }])
    setInputValue("")
  }


  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-2xl mb-5'>ToDo List</h1>

      <div className='w-[350px]'>

        <form action="" onSubmit={handleSubmit}>
          <Input type='text' inputValue={inputValue} setInputValue={setInputValue} />
          <Button classname='bg-gray-700 w-full p-2' title='Add ' type='submit' />
        </form>
        <ItemList setItems={setItems} items={items}/>
       

      </div>

    </div>
  )
}

export default App
