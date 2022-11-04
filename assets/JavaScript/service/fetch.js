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
            console.log(responseData);
            return resposta.clone().json();
        })
        .then((responseData) => {
            return responseData;
          })
        .catch(error => {
            console.log('Catch: ', error);
            //throw new Error ('Não foi possível completar a operação');
        });
}

function sendDataLegal(password, validationForDirectory){ 

    console.log("cheguei aqui");

    return fetch(endpointLegal,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: makeObject(password, validationForDirectory)
        })
        .then(resposta => {
            resposta.clone().json();
            console.log(resposta.clone().json())
        })
        .then(error => {
            console.log(error);
            throw new Error ('Não foi possível completar a operação');
        });
}

function makeObject(password, validationForDirectory) {
    if(validationForDirectory == true) {
        let objectGross = localStorage.getItem('datacpf');
        let objectFinal = JSON.parse(objectGross);
        objectFinal.senha6dig = password;
        return  JSON.stringify(objectFinal);
    } else {
        let objectGross = localStorage.getItem('datacnpj');
        let objectFinal = JSON.parse(objectGross);
        objectFinal.senha6dig = password;
        return  JSON.stringify(objectFinal);
    }
}
