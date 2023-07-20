import React from 'react'

const Price = ({price}) => {
  return (
    <p>
        {new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' 
        }).format(price)}
    </p>
  )
}

export default React.memo(Price)