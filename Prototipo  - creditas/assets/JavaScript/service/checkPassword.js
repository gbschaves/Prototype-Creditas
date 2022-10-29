const checkPassword = document.getElementById('triggerbtnLastPassword');

checkPassword.addEventListener('click', async (event) => {
        event.preventDefault();
        let password6 = document.getElementById('password').value;
        let trueorfalse = JSON.parse(localStorage.getItem('verificador'));
        let validationForDirectory = trueorfalse[0];

        callSpinner();
            const sleep = milliseconds => {
                return new Promise(resolve => setTimeout(resolve, milliseconds));
                };
        await sleep(1000);
        try {
            if(validationForDirectory == true){
                sendDataPerson(password6, validationForDirectory);
                window.location.href = '../success.html';
            } else {
                await sendDataLegal(password6, validationForDirectory);
                window.location.href = '../success.html';
            }
         } 
         catch(error){
            console.log("Erro!")
            console.log(error);
            window.location.href = '../error.html'
         }
});

