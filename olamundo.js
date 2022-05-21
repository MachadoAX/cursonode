document.querySelectorAll('h1')[0].style.color = 'red'

document.querySelectorAll('#caixa')[0].style.border ='2px solid orange'

var texto = document.querySelectorAll('.texto') 

for (var i = 0 ; i < texto.length  ; i++){
    texto[i].style.fontFamily = 'Trebuchet MS'
    texto[i].style.color = '#0066cc'
}

/*
document.querySelectorAll('.texto')[0].style.fontFamily = 'Courier' 
document.querySelectorAll('.texto')[1].style.fontFamily = 'Courier'
document.querySelectorAll('.texto')[2].style.fontFamily = 'Courier'
*/

document.querySelectorAll('#retangulo a')[0].style.textDecoration ='none'
document.querySelectorAll('#retangulo a')[0].style.color ='#00554c'
