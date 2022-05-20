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
    <section className = "section">
      <form className = "search-form" onSubmit={handleSubmit} method = "post">
        <div className = "form-control">
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchBrewery}
            placeholder = "Search Brewery by City"
          />
        </div>
      </form>
    </section>

  )
}
export default SearchForm;
