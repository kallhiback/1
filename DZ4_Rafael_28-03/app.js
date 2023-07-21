function myFunction(){
    var text = prompt('введите текст')
    document.getElementById('demo').innerHTML = text
}
// var btnClass = document.querySelector('.btn')
// btnClass.onclick = () => prompt('введите что-нибудь')
// document.getElementById('demo').innerHTML = 'text'


var color = String(prompt('введите цвет'))
var stopClass = document.getElementsByClassName('one')
var waitClass = document.getElementsByClassName('two')
var goClass = document.getElementsByClassName('thee')
if (color === 'красный'){
    document.querySelector('.one').style.backgroundColor = 'red'
    stopClass[0].innerHTML = 'STOP'
} else if (color === 'желтый' || color === 'жёлтый'){
    document.querySelector('.two').style.backgroundColor = 'yellow'
    waitClass[0].innerHTML = 'WAIT'
} else if (color === 'зеленый' || color === 'зелёный'){
    document.querySelector('.thee').style.backgroundColor = 'green'
    goClass[0].innerHTML = 'GO'
} else {
    alert('error')
}
