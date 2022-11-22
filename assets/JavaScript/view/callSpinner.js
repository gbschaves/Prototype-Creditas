function callSpinner() {
    
    let spinner = document.getElementById('spinner-hide');
    spinner.classList.remove('hide')

    setTimeout(() => {
        spinner.classList.add('hide')
    }, 3000);
}
