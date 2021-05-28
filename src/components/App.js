import React, {useState, useEffect, useRef} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

const App = () => {
  const [searchResult,setSearchResult] = useState([])
  const searchBarContainer = useRef(null)

  useEffect(() => {
    //sticky searchbar
    addEventListener("scroll",e => {
      const {height, top} = searchBarContainer.current.getBoundingClientRect()
      const isOutOfView = top <= 0 && scrollY >= height
      searchBarContainer.current.className = `search${isOutOfView ? " fixed" : ""}`
    })
    console.log("App mounted.")
  },[])

  useEffect(() => {
    //scroll to top when result changes 
    scrollTo(scrollX,0)
  }, [searchResult])


  function SearchBarRoute({match:{params:{word=""}}, history}){
    return (
      <SearchBar key={word} word={word} history={history} setSearchResult={setSearchResult} />
    )
  }

  return (<>
    <section>
      <header>
        <h4>Dictionaries</h4>
      </header>
    </section>
    <section ref={searchBarContainer}>
      <div className="search-bar">
          <HashRouter hashType="noslash">
            <Route path={["/:word","/"]} render={SearchBarRoute}></Route>
          </HashRouter>
      </div>
    </section>
    <section className="result">
        <SearchResultList items={searchResult}/>
    </section>
  </>)
}
export default App
