function calcular() { 
    var n = parseInt(document.getElementById('txtnum').value)
    var tab = document.getElementById('seltab') 

    if (isNaN(n)) {
        alert('insira um número!')
    } else {
        tab.innerHTML = ''
        for(var i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${i} x ${n} = ${i * n}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
 }