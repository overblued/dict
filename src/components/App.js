import React, {useState, useEffect, useRef} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'
import useStickToTop from './hooks/useStickToTop'
import useDebounce from './hooks/useDebounce'
const App = () => {
  const [searchResult,setSearchResult] = useState([])
  const searchBarContainer = useStickToTop()
  
  useEffect(() => {
    console.log("App mounted.")
    return () => {
      console.log(searchResult)
    }
  },[])

  useEffect(() => {
    //scroll to top when result changes 
    console.log(searchResult)
    scrollTo(scrollX,0)
  }, [searchResult])


  function SearchBarRoute({match:{params:{word=""}}, history}){
    return (
      <SearchBar key={word} word={word} history={history} setSearchResult={setSearchResult} />
    )
  }

  const [ss,setSs] =useDebounce("",2000)
  const [sss,setSss] =useDebounce("",2000)
  useEffect(() =>{
    console.log(ss,sss)
  } , [ss,sss])
  return (<>
    <input type="text" onChange={e => setSs(e.target.value)}/>
    <input type="text" onChange={e => setSss(e.target.value)}/>
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
