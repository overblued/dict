import React, {useState, useEffect, useCallback} from 'react'
import fetchJSON from './fetchJSON.js'
import {debounce} from './utils.js'
import SearchBarList from './SearchBarList'


const SearchBar = ({word,history,setSearchResult}) => {
  const [loading,setLoading] = useState(false)
  const [value,setValue] = useState(word)
  const [list,setList] = useState([])

  useEffect(() => {
    if (value.length>0){
      fetchDefinition(value)
    }
  }, [])
  const fetchCandidates = useCallback(debounce((value) => {
    if (value.length===0){return}
    fetchJSON({value}).then(setList)
  },200),[])

  const fetchDefinition = useCallback(debounce((value) => {
    const pathname = "/" + value
    if (history.location.pathname !== pathname){
      history.push({pathname})
      return
    }
    setLoading(true)
    setValue(value)
    setList([])
    fetchJSON({value,action:"define"}).then(d => {
      setSearchResult(d)
      setLoading(false)
    })
  },100),[])

  // end of Hooks

  const handleOnChange = ({target:{value}}) => {
    setValue(value)
    fetchCandidates(value)
    if (value.length === 0){ 
      setList([])
    }
  }
  const handleOnKeyDown = ({key}) => {
    if (key !== "Enter") { return }
    key = value
    if (list[0]){
      key = list[0]
    } else {
      //cancel previous debounced request
      fetchCandidates("")
    }
    fetchDefinition(key)
  }

  const handleOnFocus = () => {
    if (value.length>0 && list.length===0){
      fetchCandidates(value)
    }
  }

  return (<>
    <input type="text" placeholder="Search" value={value}
      onKeyDown={handleOnKeyDown} onChange={handleOnChange}
      onFocus={handleOnFocus} onBlur={() => setList([])}/>
    <SearchBarList items={list} onSelect={fetchDefinition} />
    <div hidden={!loading} className="spinner"></div>    
  </>)
}
export default SearchBar
