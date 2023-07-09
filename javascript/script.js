function openMenu() {
    let menu = document.getElementById('menuNav')
    let menuComp = document.getElementById('menuComplement')
    let button = document.getElementById('menuButton')
    let header = document.getElementById('header')

    menu.classList.toggle('active')

    menuComp.classList.toggle('active')
    
    if (menu.className == 'bg-dark active') {
        button.innerHTML = 'close'
        header.style.boxShadow = 'none'
    } else {
        button.innerHTML = 'menu'
        header.style.boxShadow = '0px 5px 5px rgba(0, 0, 0, 0.477)'
    }


}

function seekLink() {
    let menu = document.getElementById('menuNav')
    let menuComp = document.getElementById('menuComplement')
    let button = document.getElementById('menuButton')

    menu.className = 'bg-dark'
    menuComp.className = 'bg-dark'
    button.innerHTML = 'menu'
}

   

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';


function animeScroll() {

let button = document.getElementById('backTop')
const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
target.forEach(function(element){
if ((windowTop) > element.offsetTop) {
    element.classList.add(animationClass);
    button.style.display = 'block'
} else {
    element.classList.remove(animationClass);
}



})

}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){

    animeScroll();

})
    
}
