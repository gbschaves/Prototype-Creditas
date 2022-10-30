const checkPassword = document.getElementById('triggerbtnLastPassword');

checkPassword.addEventListener('click', async (event) => {
        event.preventDefault();
        let password6 = document.getElementById('password').value;
        let trueorfalse = JSON.parse(localStorage.getItem('verificador'));
        let validationForDirectory = trueorfalse[0];
        callSpinner();
        try {
            if(validationForDirectory == true){
                sendDataPerson(password6, validationForDirectory);
                //localStorage.clear();
                const sleep = (milliseconds) => {
                    return new Promise(resolve => setTimeout(resolve, milliseconds))
                }      
                await sleep(1000)
                //window.location.href = '../success.html';
            } else {
                sendDataLegal(password6, validationForDirectory);
                //localStorage.clear();
                const sleep = (milliseconds) => {
                    return new Promise(resolve => setTimeout(resolve, milliseconds))
                } 
                await sleep(1000)
                .then(() =>  {
                    window.location.href = '../success.html';
                });
            }
        }catch (error){
            console.log(error);
            //window.location.href = '../error.html'
        }
})
