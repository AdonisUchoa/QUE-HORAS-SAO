function carregar (){
var msg = document.getElementById ("msg")
var img = document.getElementById("imagem")
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = `agora sao ${hora} horas`
if(hora >= 0 && hora < 22 ){
    //BOM DIA 
    img.src = 'dia.png'
    document.body.style.background = '#dcac76'
} else if (hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#acb1b9'
} else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#032c55'
}
}