const validates = document.getElementById('triggerbtncnpj');

validates.addEventListener('click', async (event) => {
        event.preventDefault();

        const keyj = document.getElementById('keyj').value;
        const user = document.getElementById('user').value;
        const passwordStrong = document.getElementById('passwordStrong').value;
        callSpinner();
        try {
            await savedatacnpj(keyj, user, passwordStrong);
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds));
            }      
            sleep(1000)
            .then(() =>  {
                window.location.href = '../secondPassword.html';
            })         
         }catch(error){
            await console.log(error);
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
            }      
            sleep(1000)
            .then(() =>  {
                window.location.href = '../error.html';
            }) 
            
         }  

});
