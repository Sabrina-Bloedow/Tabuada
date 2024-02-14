function verificar() { 
    var n = parseInt(document.getElementById('txtnum').value)
    var res = document.getElementById('res') 

    if (isNaN(n)) {
        alert('insira um número!')
    } else {
        res.innerHTML = 'calculando...<br>'

        for(var i = 0; i <= 10; i++) {
            cal = i * n
            res.innerHTML += `${i} x ${n} = ${cal}<br>`
        }
    }
 }