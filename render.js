const SERVER = 'localhost:3000/notes'
const cards = querySelector('.card-body')
const promises = []
const complete = querySelector('.complete')

for(let i = 0; i < cards.length; i++){
  let promise = axios.get(`${SERVER}`)
  promises.push()
}

Promise.all(promises)
  .then(res => {
    for(let i = 0; i < cards.length; i++){
      card[i].innerHTML = `<h4 class="card-title">${data.name}</h4>
      <p class="card-text">${data.description}</p>
      <a class="complete" href='#' class="btn btn-primary">Complete</a>`
    }
  })
  .catch(err => console.log(err))
