const idChecker = JSON.parse(localStorage.getItem("itens")) || [];

// verificar tamanho e guardar valor do identificador
function validationSize(size, value){        
        if(size > 14){
                let cnpj = value
                savecpfcnpj(size, cnpj)
                const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                }      
                sleep(1000)
                .then(() =>  {
                        window.location.href = '../pessoaJuridica.html'
                })                
        }else{
                let cpf = value;
                savecpfcnpj(size, cpf)
                const sleep = (milliseconds) => {
                        return new Promise(resolve => setTimeout(resolve, milliseconds))
                }      
                sleep(1000)
                .then(() =>  {
                        window.location.href = '../pessoaFisica.html'
                })
        }   
}   

// verificar o tamanho e guardar o valor no local storage
function savecpfcnpj(size, value) {

        if(size > 14) {
                let legal = value;
                localStorage.setItem("cnpj", JSON.stringify(legal));

                idChecker.push(false);
                localStorage.setItem("verificador", JSON.stringify(idChecker));
        } else {
                let person = value;
                localStorage.setItem("cpf", JSON.stringify(person));

                idChecker.push(true);
                localStorage.setItem("verificador", JSON.stringify(idChecker));
        }

}

function savedatacpf(agency, account, passwordStrong) {
        const cpf = localStorage.getItem("cpf");
        
        let data = {
                cpf: JSON.parse(cpf),
                agencia: agency,
                conta: account,
                senha8dig: passwordStrong
        };
        localStorage.setItem("datacpf", JSON.stringify(data));
}

function savedatacnpj(keyj, user, passwordStrong) {
        const cnpj = localStorage.getItem("cnpj");
        
        let data = {
                cnpk: JSON.parse(cnpj),
                chaveJ: keyj,
                usuario: user,
                senha8dig: passwordStrong
        };
        localStorage.setItem("datacnpj", JSON.stringify(data));
}
