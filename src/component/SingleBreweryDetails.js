import React from 'react'

import { useParams, Link } from 'react-router-dom'

function SingleBreweryDetails() {

  const { name } = useParams()
  const [brewery, setBrewery] = React.useState(null)

  React.useEffect(() => {

    async function getBrewery() {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/breweries?by_name=${name}`
        )
        const data = await response.json()
        if (data) {
          const {
            name,
            brewery_type,
            street,
            address_2,
            address_3,
            city,
            state,
            county_province,
            postal_code,
            country,
            longitude,
            latitude,
            phone,
            website_url,
            updated_at,
            created_at
          } = data[0]

          const newBrewery = {
            name,
            brewery_type,
            street,
            address_2,
            address_3,
            city,
            state,
            county_province,
            postal_code,
            country,
            longitude,
            latitude,
            phone,
            website_url,
            updated_at,
            created_at
          }
          setBrewery(newBrewery)
        } else {
          setBrewery(null)
        }
      } catch (error) {

      }

    }
    getBrewery()
  }, [name])

  if (!brewery) {
    return <h2 className ='no-brewery-title'> L o a d i n g . . . . . </h2>
  } else {
    const {
      name,
      brewery_type,
      street,
      address_2,
      address_3,
      city,
      state,
      county_province,
      postal_code,
      country,
      longitude,
      latitude,
      phone,
      website_url,
      updated_at,
      created_at,
    } = brewery
    return (
      <div className='card-detail'>

        <p className='brewery-detail-heading'><strong>Showing detail information about each Brewery</strong></p>

        <div className='card-text-detail'>
          <div>
            <p> Name : {name}  </p>
            <p> Brewery Type : {brewery_type}  </p>
            <p> Street : {street}  </p>
            <p> Address 2 : {address_2}  </p>
            <p> Address 3 : {address_3}  </p>
            <p> City : {city}  </p>
            <p> State : {state}  </p>
            <p> County Province : {county_province}  </p>
            <p> Postal Code : {postal_code}  </p>
            <p> Country : {country}  </p>
            <p> Longitude : {longitude}  </p>
            <p> Latitude : {latitude}  </p>
            <p> Phone : {phone}  </p>
            <p> Website : {website_url}  </p>
            <p> Updated at : {updated_at}  </p>
            <p> Created at  : {created_at}  </p>
          </div>
            <Link to='/ ' className = 'button-home'>
              <div className = 'button-home'>
                Go Home
              </div>
            </Link>
        </div>
      </div>

    )
  }
}

export default SingleBreweryDetails;

