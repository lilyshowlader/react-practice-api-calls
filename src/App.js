import SearchBar from './components/SearchBar'

function App () {

  // create handleSubmit that takes in term (term is coming from the child component)

  const handleSubmit = (term) => {
    console.log('do a search with', term)
  
  }


  return (
    <>
    <SearchBar onSubmit={handleSubmit}/>
    </>
  )
}

export default App