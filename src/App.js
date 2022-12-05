import { useState } from 'react'
import SearchBar from './components/SearchBar'
import searchImages from './services/api-calls'
import ImageList from './components/ImageList'
function App () {
  const [images, setImages] = useState([])

  // create handleSubmit that takes in term (term is coming from the child component)

  const handleSubmit = async (term) => {
   const result = await searchImages(term)
    // result is going to be an array of objects - this is the API response
    // after doing a search, we want to update content on the screen with the new list of images.
    setImages(result)
  }


  return (
    <>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App