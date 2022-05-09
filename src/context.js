import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://api.openbrewerydb.org/breweries?by_city='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState('a')
  const [breweries, setBreweries] = useState([])

  const fetchData = useCallback( async () => {

    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()

      if (data) {
        const newBreweries = data.map((item) => {
          const {
            id,
            name,
            brewery_type,
            city
          } = item

          return {
            id,
            name,
            brewery_type,
            city
          }
        })
        setBreweries(newBreweries)
      } else {
        setBreweries([])
      }

    } catch (error) {

    }
  },[searchTerm])
  useEffect(() => {
    fetchData()
  }, [searchTerm,fetchData])
  return (
    <AppContext.Provider
      value={{ breweries, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
