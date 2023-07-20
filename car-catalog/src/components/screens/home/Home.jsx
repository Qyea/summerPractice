import { useState,  useMemo, useEffect, useCallback, useContext  } from 'react'
import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/CarItem.jsx'
import { ReactDOM } from 'react'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'
import { useNavigate } from 'react-router-dom'
import VideoPlayer from './Player.jsx'
import { AuthContext } from '../../../providers/AuthProvider.jsx'

//Жизненный цикл компаненты 
/*
mount - монтирование компоненты(т.е. оставляем в зависимости []. 
При монтировании у нас, например, загружаются компоненты)
update - обновление. Т.е. когда мы указываем условия изменения компоненты в []. (например [cars]
=> что при изменении cars происходит обновление) 
unmount 
return () =>{
  setCars([]) ==>>>обнуляем машины
}


разница между Axios и Fetch
Axios это отдельная библиотека, которая сразу конвентирует данные в json
отсутвие интерцепторов. Например, нужно сделать сложную авторизацию. То есть в fetch
сделать ее не получится, так как в нем нет отслеживания получения и отправки данных
можно отслеживать даунлод прогресс
Fetch дефолтная штука
*/

function Home() {

  const [cars, setCars] = useState(carsData)

 /* useEffect(() => {
    //we can get cars from server
    
    const fetchData = async () => {
      const response = await fetch('http://localhost:4200/cars')
      const data = await response.json()

      setCars(data)
    }

    fetchData()
    */

    //Пример с axios 
    /*
    ! сначала в терминале пропиши 'yarn add axios' !
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4200/cars')
      setCars(response.data)
    }

------------------------------------------------------------
    const fetchData = async () => {
      const data = await CarService.getAll()
      setCars(data)
    }

    
  },[])
*/
 /* const filteredCars = useMemo(
    () => cars.filter( car => car.price >= 123456.789), []
    )
    using UseMemo ---> we use cashing for our site.
    it means the site won't run this function with each render
  const [count, setCount] = useState(0)*/ 

  //const nav = useNavigate()
  //<button onClick={() => nav('/car/1')}>go</button> 

  const clearCars = useCallback(() => () => {
    setCars([])
  },
  []
  )//Закешировали функцию, чтобы компонента не вызывалась при 
  //каждом рендере
  

  //<VideoPlayer /> внутри ретурна был

  const {user, setUser} = useContext(AuthContext)

  return (
    <div>
       <h1>Cars catalog</h1> 
       
      {user ? (
      <>
      <h2>Welcome, {user.name}!</h2>
      <button onClick = {() => setUser(null)}>Logout</button>
      </>
      ): <button onClick = {() => setUser({name: 'Qyea'})}>Login</button>
      }

       <CreateCarForm setCars = {setCars}/>  
      <div>
      {cars.length ? cars.map(car =><CarItem key={car.id} car={car}/>
      )
      :(<p>There are no cars</p>)
    }
      </div>
    </div>
  )
}

export default Home
