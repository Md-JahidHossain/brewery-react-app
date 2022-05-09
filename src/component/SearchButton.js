import React from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchBrewery() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (

      <form  onSubmit={handleSubmit}>
          <input className = "input-form"
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchBrewery}
          />
          <input className = "button-search" type = "submit" value = "Search Brewery by City" />
      </form>
  
   )
}
export default SearchForm;
