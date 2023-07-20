import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CarService } from '../../../services/car.service'
import CarItem from '../home/car-item/CarItem'
import withAuth from '../../../HOC/withAuth.jsx'

const CarDetail = () => {

  const { id } = useParams()
  const [car, setCar] = useState({})

  useEffect(() => {
    if(!id) return

    const fetchData = async () => {
        const data = await CarService.getById(id)
  
        setCar(data)
      }
    fetchData()
  },[id])

  if(!car?.name) return <p>Loding...</p>

  return (
    <div> 
      <Link to='/'>Back</Link>
      <CarItem car={car} />
    </div>
  )
}

export default withAuth(CarDetail)