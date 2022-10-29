const endpointPerson = `https://apiwebcore.azurewebsites.net/v1/contaPerson/api`;
const endpointLegal = `https://apiwebcore.azurewebsites.net/v1/contaLegal/api`;

function sendDataPerson(password, validationForDirectory){ 
    return fetch(endpointPerson,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: makeObject(password, validationForDirectory),
        })
        .then(resposta => {
            console.log("respostaapi");
            resposta.json();
            console.log(resposta.json());
        })
        .then(error => {
            console.log("erroapi")
            console.log(error);
            throw new Error ('Não foi possível completar a operação');
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
            console.log("respostaapi");
            resposta.json();
            console.log(resposta.json());
        })
        .then(error => {
            console.log("erroapi")
            console.log(error);
            throw new Error ('Não foi possível completar a operação');
        });
}

function makeObject(password, validationForDirectory) {
    if(validationForDirectory == true) {
        console.log("make")
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
