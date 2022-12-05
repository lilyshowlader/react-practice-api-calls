import SearchBar from './components/SearchBar'
import searchImages from './services/api-calls'
function App () {

  // create handleSubmit that takes in term (term is coming from the child component)

  const handleSubmit = (term) => {
    searchImages(term)
  
  }


  return (
    <>
    <SearchBar onSubmit={handleSubmit}/>
    </>
  )
}

export default App