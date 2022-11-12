const checkPassword = document.getElementById('triggerbtnLastPassword');
const returnFetch = JSON.parse(localStorage.getItem("verificator"))
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
                sendDataPerson(password6, validationForDirectory)
                if(returnFetch == true){
                    localStorage.clear();
                    const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                    }      
                    await sleep(1000)
                    //window.location.href = '../success.html';
                } else {
                    //window.location.href = '../error.html'
                }   
            } else {
                    //envia as informações para api cnpj
                    sendDataLegal(password6, validationForDirectory)
                    if(returnFetch == true){
                        localStorage.clear();
                        const sleep = (milliseconds) => {
                            return new Promise(resolve => setTimeout(resolve, milliseconds))
                        }      
                        await sleep(1000)
                        window.location.href = '../success.html';
                    } else {
                        window.location.href = '../error.html'
                    }
            }
        }catch (error){
            console.log(error);
            window.location.href = '../error.html'
        }
})
