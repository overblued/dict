const actions = {query:2,define:1,settings:0}
const lastFetchPerAction = Object.assign({},actions)

let remote
if (/^https?:\/\/localhost/.test(document.URL)){
  remote = `http://localhost:3333/json/dict?`
} else {
  remote = `http://72.19.12.242:3333/json/dict?`
}

export default function ({value,action="query"}) {

  const queryObj = {
    q: encodeURIComponent(value),
    a: actions[action],
  }
  const queryString = Object.entries(queryObj).map(entry => entry.join("=")).join("&") 
  lastFetchPerAction[action] = queryString
  return new Promise((res, rej) => {
    fetch(remote + queryString)
      .then(d => d.json())
      .then(d => {
        if (d.error) {
          console.log(queryString,d)
          d = []
        }
        //only process the lastest request
        if (queryString===lastFetchPerAction[action]){
          res(d)
        }
      })
  })
}
