
function formatid() {
    let id = localStorage.getItem("verificador")
    id0 = id.replaceAll("[", "")
    id1 = JSON.parse(id0.replaceAll("]", ""))

    if (id1 == true){
        let bruto = localStorage.getItem("datacpf")
        return splitVerificator(bruto)
    } else {
        let bruto = localStorage.getItem("datacnpj")
        return splitVerificator(bruto);
    }
}

function splitVerificator(bruto) {
    let bruto1 = bruto.replaceAll("\\", "");
    let bruto2 = bruto1.replaceAll("]", "");
    let bruto3 = bruto2.replaceAll("[", "");
    let bruto4 = bruto3.replaceAll(".", "")
    let bruto5 = bruto4.replaceAll("-", "")
    let bruto6 = bruto5.replaceAll("/", "")
    let bruto7 = bruto6.replaceAll('"', "")
    
    let indice = bruto7.split(',');
    return indice;
}

function verificator(indice){
    let indice0 = indice[0]
    let boolOutput = (indice0 === "true")
    return boolOutput
}
