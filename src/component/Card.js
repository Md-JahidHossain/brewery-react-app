import React from 'react'
import { Link } from 'react-router-dom'

function Card({  id, name, brewery_type, city }) {
  return (

      <div className = "card">

        <div className="card-text">
          <p>Brewery Name : {name}</p>
          <p>Brewery Type : {brewery_type}</p>
          <p>City : {city}</p>
        </div>

        <div className='button-details'>
          <Link to={`/brewery/${name}`} className='button-details'>
            View Details
          </Link>
        </div>
      </div>

  )
}
export default Card;
