const checkPassword = document.getElementById('triggerbtnLastPassword');

checkPassword.addEventListener('click', async (event) => {
        event.preventDefault();
        let password6 = document.getElementById('password').value;
        let trueorfalse = JSON.parse(localStorage.getItem('verificador'));
        let validationForDirectory = trueorfalse[0];
        callSpinner();
        try {
            //verfica se é cpf ou cnpj
            if(validationForDirectory == true){
                //envia as informações para api cpf
                await sendDataPerson(password6, validationForDirectory)
                const returnFetch = JSON.parse(localStorage.getItem("verificator"))
                if(returnFetch == true){
                    const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                    }      
                    await sleep(1000)
                    window.location.href = '../success.html';
                } else {
                    console.log("erroelse")
                    window.location.href = '../error.html' 
                }
                
            } else {
                //envia as informações para api cnpj
                await sendDataLegal(password6, validationForDirectory)
                const returnFetch = JSON.parse(localStorage.getItem("verificator"))
                if(returnFetch == true){
                    const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                    }      
                    await sleep(1000)
                    window.location.href = '../success.html';
                } else {
                    console.log("erroelse")
                    window.location.href = '../error.html' 
                }
            }
        }catch (error){
            console.log(error);
            //window.location.href = '../error.html'
        }
})
