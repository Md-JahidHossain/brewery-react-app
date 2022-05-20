import React from 'react'
import Card from './Card'
import { useGlobalContext } from '../context'

function CardList() {
  const { breweries } = useGlobalContext()

  if (breweries.length < 1) {
    return (
      <h2 className = "no-brewery-title">
        No Brewery matched to your search criteria
      </h2>
    )
  }
  return (

      <div className='background'>
        {breweries.map((item) => {
          return <Card key={item.name} {...item} />
        })}
      </div>
  )
}
export default CardList;
