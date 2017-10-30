const SERVER = 'localhost:3000/notes'
// const axios = require('axios')
const API = 'http://api.timezonedb.com/v2/get-time-zone?key=IMHTWO1SGO5N&format=json&by=zone&zone=America/Los_Angeles'
const semanticMonths = {1:'january', 2: 'february', 3: 'march', 4: 'april', 5: 'may', 6: 'june', 7: 'july', 8: 'august', 9: 'september', 10: 'october', 11: 'november', 12: 'december'}
// const cards = querySelector('.card-body')
// const promises = []
// const complete = querySelector('.complete')
const submitTodo = document.querySelector('.submit-todo')
let currentTimeAndDate

function renderTime(data){
  let dateTimeArray = data.split(' ')
  let date = dateTimeArray[0].split('-')
  let realtime = dateTimeArray[1].split(':')
  let amPM = 'am'
  if(realtime[0] > 12) {
    realtime[0] -=12
    amPM = 'pm'
  }
  currentTimeAndDate = `${realtime[0]}:${realtime[1]} ${amPM} on ${semanticMonths[date[1]]} ${date[2]} ${date[0]}`
  let container = document.querySelector('#date')
  container.innerHTML = currentTimeAndDate
}

axios.get(API)
    .then(res => renderTime(res.data.formatted))
    .catch(err => console.log(err))


submitTodo.addEventListener('click', () => {
    let todoName = document.querySelector('#todo-name')
    let todoDescription = document.querySelector('#todo-description')
    let data = {type: 'todo',
                name: todoName.value,
                description: todoDescription.value,
                date_created: currentTimeAndDate}

  })

// for(let i = 0; i < cards.length; i++){
//   let promise = axios.get(`${SERVER}`)
//   promises.push()
// }
//
// Promise.all(promises)
//   .then(res => {
//     for(let i = 0; i < cards.length; i++){
//       card[i].innerHTML = `<h4 class="card-title">${data.name}</h4>
//       <p class="card-text">${data.description}</p>
//       <a class="complete" href='#' class="btn btn-primary">Complete</a>`
//     }
//   })
//   .catch(err => console.log(err))
