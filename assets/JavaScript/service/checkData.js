// codigo criado para iniciar a verificação dos dados e envio de proxima pagina
const checkData = document.getElementById('triggerBtnContinue');

checkData.addEventListener('click', async (event) => {
        event.preventDefault();
        
        const valor = document.getElementById("cpfcnpj").value;

        const checkValue =  validatesCpfCnpj(valor);
        const sizeValue = valor.length; 

        if (valor == '') {
                alert("Preencha todos os campos")
        }else {
                callSpinner();
                if(checkValue == true){
                        event.preventDefault();
                        await validationSize(sizeValue, valor);
                }else{
                        alert("Preencha todos os campos corretamente")
                        window.location.reload(true)
                }
        }
        
})
