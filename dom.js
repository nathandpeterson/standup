const baseURL = 'http://localhost:3000'

document.querySelector('#card-1-button').addEventListener('click', () => {
  const titleContainer = document.querySelector('#card-1-container')
  const textContainer = document.querySelector('#card-1-text')
  axios.get(`${baseURL}/notes/:id`)
    .then(result => {
      titleContainer.innerHTML = `
        ${JSON.stringify(result.data)}`
    })
})
