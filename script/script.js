function tabuada(){

    let num = document.getElementById('txtnum')
    let seltab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, informe um número')
    }

    else{
        num = Number((num.value))
        seltab.innerHTML = ''
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${i} x ${num} = ${i*num}`
            item.value = `tab${i}`
            seltab.appendChild(item)
        }
            
    }

}

