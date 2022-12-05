import { useState } from "react"
function SearchBar ({onSubmit} ) {
  const [term, setTerm] = useState('')
  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log('I need to tell the parent about some data')
    onSubmit(term)
  }
  // to detect user pressing enter key, we are wrapping the input with a form element. by doing this, the browser triggers a submit event 

  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <input value={term} onChange= {handleChange}/>
      </form>
      {term}
    </div>
  )
}

export default SearchBar