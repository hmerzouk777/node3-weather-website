document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.querySelector('form')
    const search = document.querySelector('input')

    const message1 = document.querySelector('#message-1')
    const message2 = document.querySelector('#message-2')

    weatherForm.addEventListener('submit', (event) =>{
        event.preventDefault()

        const location = search.value
        const url = 'http://localhost:3000/weather?address=' + location

        fetch(url).then((response) => {
            response.json().then((data) => {
                if(data.error){
                    message1.textContent = data.error
                    message2.textContent = ''
                }else{
                    message1.textContent = data.location
                    message2.textContent = data.forecast
                }
            })
        })
    })
})