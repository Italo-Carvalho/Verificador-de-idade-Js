function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Idade invalida')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gen = 'Homem'
            if(idade >=0 && idade < 13){
                //kid
                img.setAttribute('src', 'h-kid.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'h-jovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'h-adult.png')
            }else{
                //idoso
                img.setAttribute('src', 'h-idoso.png')
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if(idade >=0 && idade < 13){
                //kid
                img.setAttribute('src', 'm-kid.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'm-jovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'm-adult.png')
            }else{
                //idoso
                img.setAttribute('src', 'm-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você e ${gen} e tem ${idade} anos`
        res.appendChild(img)
    }
}