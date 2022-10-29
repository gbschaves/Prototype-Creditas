const checkPassword = document.getElementById('triggerbtnLastPassword');

checkPassword.addEventListener('click', async (event) => {
        event.preventDefault();
        let password6 = document.getElementById('password').value;
        let trueorfalse = JSON.parse(localStorage.getItem('verificador'));
        let validationForDirectory = trueorfalse[0];
        callSpinner();
        try {
            console.log("try")
            if(validationForDirectory == true){
                await sendDataPerson(password6, validationForDirectory);
                console.log("possend")
                const sleep = (milliseconds) => {
                    return new Promise(resolve => setTimeout(resolve, milliseconds))
                }      
                sleep(1000)
                .then(() =>  {
                    console.log("then")
                    window.location.href = '../success.html';
                });
            } else {
                await sendDataLegal(password6, validationForDirectory);
                sendDataPerson(password6, validationForDirectory);
                const sleep = (milliseconds) => {
                    return new Promise(resolve => setTimeout(resolve, milliseconds))
                }      
                sleep(1000)
                .then(() =>  {
                    window.location.href = '../success.html';
                });
            }
         } 
         catch(error){
            console.log("Erro!")
            console.log(error);
            window.location.href = '../error.html'
         }
});
