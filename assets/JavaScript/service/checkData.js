// codigo criado para iniciar a verificação dos dados e envio de proxima pagina
const checkData = document.getElementById('triggerBtnContinue');

checkData.addEventListener('click', async (event) => {
        event.preventDefault();
        
        const valor = document.getElementById("cpfcnpj").value;

        let checkValue =  validatesCpfCnpj(valor);
        let sizeValue = valor.length; 
        callSpinner();
        if(checkValue == true){
                event.preventDefault();
                await validationSize(sizeValue, valor);
        }else{
                console.log('erro');
        }

})