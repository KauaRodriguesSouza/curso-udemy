function calcular(tipo, valor){

    if (tipo === 'acao'){

        if (valor === 'c') {
            document.getElementById('caixa').value = ""
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {

            document.getElementById('caixa').value += valor

        }

        if (valor === '='){

            const soma = eval(document.getElementById('caixa').value)

            document.getElementById('caixa').value = soma

        }

    }

    if (tipo === 'valor'){

        document.getElementById('caixa').value += valor 

    }

    

}








































// if(tipo === 'acao'){
//     if(valor === 'c'){
//         document.getElementById("caixa").value = ''
//     }

//     if(valor === '+' || valor === '*' || valor === '-' || valor === '/' || valor === '.'){
//         document.getElementById("caixa").value += valor
//     }

//     if(valor === '='){
//         var soma = eval(document.getElementById("caixa").value)

//         document.getElementById("caixa").value = soma
//     }
// }
// else if(tipo === 'valor'){

// document.getElementById("caixa").value += valor
// }
