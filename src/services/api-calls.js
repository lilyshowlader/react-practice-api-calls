import axios from "axios"

// const baseUrl = "https://api.unsplash.com/"


// Access Key: tT_l3_UAurBdZFHICGjnDmgWJXrUw4ge_CgFyoRSLk0
// https://api.unsplash.com/search/photos?query=cats
// base URL/route/querystring
// Authorization: Client-ID Access Key
// GET/search/photos - to get a single page of photo results for a query

// the second property here is an options object

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID tT_l3_UAurBdZFHICGjnDmgWJXrUw4ge_CgFyoRSLk0'
    },
    params: {
      query: term, 
    }
  })
  return response.data.results;
}

export default searchImages