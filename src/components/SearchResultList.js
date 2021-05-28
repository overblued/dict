import React from 'react'

const SearchResultList = ({items}) => {

  const parseItem = (item,key) => {
    if (item.name==="WordNet"){
      const word = item.definition.slice(0,item.definition.indexOf("\n"))
      item.definition = item.definition.replace(/[\n\s]+/g," ") //remove \n and \s
        .replace(/\b(\d+:)/g,"<br><b>$1</b>") //insert \n at start of every numbered definition
        .replace(/\(p\)\}/g,"}") //remove unknown (p) tag 
        .replace(/\{([^}]+)\}/g,"<a href='#$1'>$1</a>") //insert redirect hash link
        .replace(/\[(syn|ant):/g,"<br>[$1:") //new line at the start of hash links
        .replace(new RegExp(`\n${word}`,"g"),"<br><br>"+word) 
    }
    if (item.name==="English for Learners"){
      item.definition = item.definition.replace(/bword:\/\//g,"#")
    }
    if (item.name==="Thesaurus English"){
      item.definition = item.definition.replace(/\n/g,"<br>")
    }
    return item.definition && <div className="card" key={key} >
      <h6 className="card-title">{item.name}</h6>
      <div dangerouslySetInnerHTML={{__html:item.definition}}></div>
    </div>
  }
  return (<>
    {items.map(parseItem).filter(d => d)}
  </>)
}
export default SearchResultList
