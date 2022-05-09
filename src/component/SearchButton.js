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
          <button className = "button-search">Search Brewery</button>
      </form>

  )
}
export default SearchForm;