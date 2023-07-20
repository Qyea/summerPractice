import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'

const clearData = {
    name: '',
    price: '', 
    image: '', 
}

const CreateCarForm = ({setCars}) => {
  const [data, setData] = useState(clearData)

  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange'
  })

  const CreateCar = data =>{
    setCars(prev =>[
      {
        id: prev.length + 1, ...data,
      }, 
      ...prev, 
    ])

    setData(clearData)
  }



  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='Name' 
        /*onChange={e => 
          setData(prev => ({
          ...prev, 
          name: e.target.value 
          }))} 
          value={data.name}*/
          />
        <input placeholder='Price'
        /*onChange={e => 
          setData(prev => ({
          ...prev, 
          price: e.target.value 
          }))} 
          value={data.price}*/
          />
        <input placeholder='Image' 
        /*onChange={e => 
          setData(prev => ({
          ...prev, 
          image: e.target.value 
          }))} 
          value={data.image}*/
          />

        <button className='btn'>Create</button>
    </form>
  )
}

export default CreateCarForm