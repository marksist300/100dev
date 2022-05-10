document.getElementById('happy').onclick = happyBG
document.getElementById('sad').onclick = sadBG
document.getElementById('panic').onclick = panicBG
document.getElementById('peace').onclick = peaceBG

function happyBG(){
  document.querySelector('body').style.color = '#fff'
  document.querySelector('body').style.backgroundImage= "URL('/Users/mark/Downloads/class12-materials/background-picker/img/smile.jpg')"
  document.querySelector('body').style.backgroundRepeat= 'no-repeat'
  document.querySelector('body').style.backgroundSize= 'cover'
  document.querySelector('body').style.backgroundPosition = '0 20%'
}

function sadBG () {
  document.querySelector('body').style.color = '#fff'
  document.querySelector('body').style.backgroundImage = "URL('/Users/mark/Downloads/class12-materials/background-picker/img/sad.jpg')"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.backgroundPosition = '0 20%'

}

function panicBG () {
  document.querySelector('body').style.color = '#fff'
  document.querySelector('body').style.backgroundImage = "URL('/Users/mark/Downloads/class12-materials/background-picker/img/panic.jpg')"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.backgroundPosition = '0 25%'

}

function peaceBG (){
  document.querySelector('body').style.color = '#fff'
  document.querySelector('body').style.backgroundImage = "URL('./img/peace.jpg')"
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = 'cover'
  // document.querySelector('body').style.bac

}