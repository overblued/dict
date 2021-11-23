import React from 'react'

const SearchResultList = ({items}) => {
  const parseItem = (item,key) => {
    let {name, definition} = item
    if (name==="WordNet"){
      const word = definition.slice(0,definition.indexOf("\n"))
      definition = definition.replace(/[\n\s]+/g," ") //remove \n and \s
        .replace(/\b(\d+:)/g,"<br><b>$1</b>") //insert \n at start of every numbered definition
        .replace(/\(p\)\}/g,"}") //remove unknown (p) tag 
        .replace(/\{([^}]+)\}/g,"<a href='#$1'>$1</a>") //insert redirect hash link
        .replace(/\[(syn|ant):/g,"<br>[$1:") //new line at the start of hash links
        .replace(new RegExp(`\n${word}`,"g"),"<br><br>"+word) 
    }
    if (name==="English for Learners"){
      definition = definition.replace(/bword:\/\//g,"#")
    }
    if (name==="Thesaurus English"){
      definition = definition.replace(/\n/g,"<br>")
    }
    return definition && <div className="card" key={key} >
      <h6 className="card-title">{name}</h6>
      <div dangerouslySetInnerHTML={{__html:definition}}></div>
    </div>
  }
  return (<>
    {items.map(parseItem).filter(d => d)}
  </>)
}
export default SearchResultList
