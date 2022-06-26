

function carregar() {
    let data = new Date()

    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()


   //var hora = 9
    //msg.innerText = `Agora são ${hora}:${minutos}:${segundos} `

    setInterval(() => {
        let data2 = new Date()
    
        segundos = data2.getSeconds()
        hora = data2.getHours()
        minutos = data2.getMinutes()
        
        msg.innerText = `Agora são ${hora}:${minutos}:${segundos} `
    
    }, "1000")

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'Manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 17) {
        // Boa tarde
        img.src = 'Tarde.jpg'
        document.body.style.background = '#b9846f'
    } else if (hora >= 17.20 && hora <= 18.30) {
        // Fim de tarde
        img.src = 'Por do sol.jpg'
        document.body.style.background = '#405054'
    } else {
        // Boa noite
        img.src = 'Noite.jpg'
        document.body.style.background = '#515154'
    }
}
