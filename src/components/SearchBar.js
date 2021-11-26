import React, { useState, useEffect, useCallback, useRef } from 'react'
import fetchJSON from './fetchJSON.js'
import useDebounce from './hooks/useDebounce'
import useKeyPress from './hooks/useKeyPress'
import SearchBarList from './SearchBarList'

const SearchBar = ({ word = "", history, setSearchResult }) => {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState(word)
  const debouncedInputValue = useDebounce(inputValue, 300)
  const [list, setList] = useState([])
  const [focus, setFocus] = useState(false)
  const inputRef = useRef()
  const enterKey = useKeyPress('Enter')
  const escKey = useKeyPress('Escape')
  const downKey = useKeyPress('ArrowDown')
  const anyKey = useKeyPress(({ ctrlKey, altKey, key }) => {
    return !ctrlKey && !altKey && key.match(/^[a-z]$/)
  })

  useEffect(() => {
    fetchDefinition(debouncedInputValue)
  }, [])

  useEffect(() => {
    if (!focus || !enterKey || list.length === 0) { return }
    const candidate = list[0].toLowerCase()
    //complete the input from first list item
    if (candidate.includes(inputValue.toLowerCase())
        || inputValue.toLowerCase().includes(candidate)) {
      selectCandidate(list[0])
    }
  }, [enterKey])

  useEffect(() => {
    if (!focus || !downKey || list.length === 0) { return }
    setInputValue(list[0])
  }, [downKey])

  useEffect(() => {
    if (!focus || !escKey) { return }
    setInputValue("")
  }, [escKey])
  
  //regain focus if anykey is pressed
  useEffect(() => {
    if (focus || !anyKey) { return }
    inputRef.current.focus()
    setInputValue(anyKey)
  }, [anyKey])

  //update candidate list
  useEffect(() => {
    debouncedInputValue.length > 0
      ? fetchJSON({ value: debouncedInputValue }).then(setList)
      : setList([])
  }, [debouncedInputValue])

  const fetchDefinition = useCallback((word) => {
    if (word.length == 0) { return }
    const pathname = "/" + word
    if (history.location.pathname !== pathname) {
      history.push({ pathname })
      return
    }
    inputRef.current.blur()
    setLoading(true)
    fetchJSON({ value: word, action: "define" }).then(d => {
      setSearchResult(d)
      setLoading(false)
    })
  }, [])

  const selectCandidate = useCallback((value) => {
    setInputValue(value)
    fetchDefinition(value)
  }, [])

  return (<>
    <input ref={inputRef} type="text" placeholder="Search" value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    <SearchBarList hidden={!focus} items={list} onSelect={selectCandidate} />
    <div hidden={!loading} className="spinner"></div>
  </>)
}
export default SearchBar
