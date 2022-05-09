import React from 'react'

import { useParams, Link } from 'react-router-dom'

function SingleBreweryDetails() {

  const { id } = useParams()
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {

    async function getCocktail() {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/breweries?by_id=${id}`
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
          } = data[3]

          const newCocktail = {
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
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }

    }
    getCocktail()
  }, [id])

  if (!cocktail) {
    return <h2 className='section-title'>No Brewery to display</h2>
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
    } = cocktail
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
          <div className = 'button-home'>
            <Link to='/ ' > Go Home </Link>
          </div>
        </div>

      </div>

    )
  }
}

export default SingleBreweryDetails;
