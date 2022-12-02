function SearchBar ({onSubmit} ) {

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log('I need to tell the parent about some data')
    onSubmit('cats')
  }
  // to detect user pressing enter key, we are wrapping the input with a form element. by doing this, the browser triggers a submit event 
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <input />
      </form>
    </div>
  )
}

export default SearchBar