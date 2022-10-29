// codigo criado para iniciar a verificação dos dados e envio de proxima pagina
const checkData = document.getElementById('triggerBtnContinue');

checkData.addEventListener('click', (event) => {
        event.preventDefault();
        const valor = document.getElementById("cpfcnpj").value;

        let checkValue =  validatesCpfCnpj(valor);
        let sizeValue = valor.length; 

        if(checkValue == true){
                event.preventDefault();
                callSpinner(); // view loading
                validationSize(sizeValue, valor);
        }else{
                console.log('erro');
        }

})