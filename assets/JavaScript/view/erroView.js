window.addEventListener('load', function () {
    let erroAPI = localStorage.getItem('errors')
    console.log(erroAPI)
    let erroScreen = document.getElementById('content__text')
    erroScreen.innerHTML += `
    <h1 class="error__message">${JSON.parse(erroAPI)}<br> 
    Tente novamente.</h1>
    `
  })
