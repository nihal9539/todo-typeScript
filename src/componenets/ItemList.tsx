import React from 'react'
import Button from './Button'
import { Items, ReactgetState } from '../types/utils'
import { RiDeleteBin6Line } from 'react-icons/ri'

type ItemList = {
    items: Items[],
    setItems:ReactgetState<Items[]>
}

const ItemList = ({ items ,setItems}: ItemList) => {
    const handleDelete = (id: string) => {
        setItems((prev) => prev.filter((data) => data.id !== id))
    }
    return (
        <div className=' h-52  overflow-y-auto mt-2'>
            {items.map((data) => (
                <div key={data.id} className=' flex justify-between items-center border border-slate-600 px-2 py-2 mb-2 '>
                    <p>{data.title}</p>
                    <Button OnClick={() => handleDelete(data.id)} classname='' type='submit' Icon={<RiDeleteBin6Line size={20} color='red' className='cursor-pointer' />} />
                </div>
            ))}
        </div>
    )
}

export default ItemList
