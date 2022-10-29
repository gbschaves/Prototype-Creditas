const validates = document.getElementById('triggerbtncnpj');

validates.addEventListener('click', async (event) => {
        event.preventDefault();

        const keyj = document.getElementById('keyj').value;
        const user = document.getElementById('user').value;
        const passwordStrong = document.getElementById('passwordStrong').value;

        callSpinner();
            const sleep = milliseconds => {
                return new Promise(resolve => setTimeout(resolve, milliseconds));
                };
        await sleep(1000);
        try {
            savedatacnpj(keyj, user, passwordStrong);      
            window.location.href = '../secondPassword.html';
         } 
         catch(error){
            console.log(error);
            window.location.href = '../error.html';
         }  

});
