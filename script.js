let hamButton = document.querySelector('.menu-btn')
let cancelButton = document.querySelector('.cancel')
let menu = document.querySelector('.menu')

hamButton.addEventListener('click',()=>{
  menu.classList.add('display')
})
cancelButton.addEventListener('click',()=>{
  menu.classList.remove('display')
})