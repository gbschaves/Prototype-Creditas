const endpointPerson = 'https://apiwebcore.azurewebsites.net/api/v1/contafisica';
const endpointLegal = 'https://apiwebcore.azurewebsites.net/api/v1/contajuridica';

function sendDataPerson(password, validationForDirectory){ 
    return fetch(endpointPerson,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: makeObject(password, validationForDirectory),
        })
        .then(resposta => {
            if(resposta.ok){
                jResponse = resposta.clone().json();
                console.log(jResponse = resposta.clone().json())
                return jResponse
            } else {
                jResponse = resposta.clone().json();
                console.log(jResponse = resposta.clone().json())
                return jResponse
            }
        })
        .then(responseData => {
            console.log(responseData)
            if(!responseData.success == true) {
                error = responseData.errors[0]
                let errorArray = localStorage.setItem("errors", JSON.stringify(error))
                let verificator = localStorage.setItem("verificator", JSON.stringify(false))
            } else {
                let verificator = localStorage.setItem("verificator", JSON.stringify(true))
            }
        })
        .catch(error => {
            console.log(error)
            throw new Error ('Não foi possível completar a operação');
        });
}

function sendDataLegal(password, validationForDirectory){ 
    return fetch(endpointLegal,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: makeObject(password, validationForDirectory)
        })
        .then(resposta => {
            if(resposta.ok){
                jResponse = resposta.clone().json();
                return jResponse
            } else {
                jResponse = resposta.clone().json();
                return jResponse
            }
        })
        .then(responseData => {
            if(!responseData.success == true) {
                error = responseData.errors[0]
                let errorArray = localStorage.setItem("errors", JSON.stringify(error))
                let verificator = localStorage.setItem("verificator", JSON.stringify(false))
            } else {
                let verificator = localStorage.setItem("verificator", JSON.stringify(true))
            }
        })
        .catch(error => {
            console.log(error)
            throw new Error ('Não foi possível completar a operação');
        });
}


function makeObject(password, validationForDirectory) {
    if(validationForDirectory == true) {
        let objectGross = localStorage.getItem('datacpf');
        let objectFinal = JSON.parse(objectGross);
        objectFinal.senha6dig = password;
        console.log(JSON.stringify(objectFinal))
        return  JSON.stringify(objectFinal);
    } else {
        let objectGross = localStorage.getItem('datacnpj');
        let objectFinal = JSON.parse(objectGross);
        objectFinal.senha6dig = password;
        return  JSON.stringify(objectFinal);
    }
}
