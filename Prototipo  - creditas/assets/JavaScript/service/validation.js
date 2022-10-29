function validatesCpfCnpj(value) {
    if (value.length == 14) {
        var cpf = value.trim();
     
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        
        var value1 = 0;
        var value2 = 0;
        var auxiliary = false;
        
        for (var index = 1; cpf.length > index; index++) {
            if (cpf[index - 1] != cpf[index]) {
                auxiliary = true;   
            }
        } 
        
        if (auxiliary == false) {
            return false; 
        } 
        
        for (var index = 0, p = 10; (cpf.length - 2) > index; index++, p--) {
            value1 += cpf[index] * p; 
        } 
        
        value1 = ((value1 * 10) % 11);
        
        if (value1 == 10) {
            value1 = 0; 
        }
        
        if (value1 != cpf[9]) {
            return false; 
        } 
        
        for (var index = 0, p = 11; (cpf.length - 1) > index; index++, p--) {
            value2 += cpf[index] * p; 
        } 
        
        value2 = ((value2 * 10) % 11);
        
        if (value2 == 10) {
            value2 = 0; 
        }
        
        if (value2 != cpf[10]) {
            return false; 
        } else {   
            return true; 
        }
    } else if (value.length == 18) {
        var cnpj = value.trim();
        
        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', ''); 
        cnpj = cnpj.split(''); 
        
        var value1 = 0;
        var value2 = 0;
        var auxiliary = false;
        
        for (var index = 1; cnpj.length > index; index++) { 
            if (cnpj[index - 1] != cnpj[index]) {  
                auxiliary = true;   
            } 
        } 
        
        if (auxiliary == false) {  
            return false; 
        }
        
        for (var index = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > index; index++, p1--, p2--) {
            if (p1 >= 2) {  
                value1 += cnpj[index] * p1;  
            } else {  
                value1 += cnpj[index] * p2;  
            } 
        } 
        
        value1 = (value1 % 11);
        
        if (value1 < 2) { 
            value1 = 0; 
        } else { 
            value1 = (11 - value1); 
        } 
        
        if (value1 != cnpj[12]) {  
            return false; 
        } 
        
        for (var index = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > index; index++, p1--, p2--) { 
            if (p1 >= 2) {  
                value2 += cnpj[index] * p1;  
            } else {   
                value2 += cnpj[index] * p2; 
            } 
        }
        
        value2 = (value2 % 11); 
        
        if (value2 < 2) {  
            value2 = 0;
        } else { 
            value2 = (11 - value2); 
        } 
        
        if (value2 != cnpj[13]) {   
            return false; 
        } else {  
            return true;
        }
    } else {
        return false;
    }
 }