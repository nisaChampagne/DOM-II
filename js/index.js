// Your code goes here
// []`mouseover` *

const navs =  document.querySelectorAll('a.nav-link');
console.log('navs', navs);

navs.forEach((element) => 
element.addEventListener('mouseover', event =>{
    event.target.style.color = 'purple';

    setTimeout(function(){
        event.target.style.color = 'blue';
    }, 1000);
}))



// []`click` *

const funbus = document.querySelector('.logo-heading');
console.log('funbus', funbus);

funbus.addEventListener('click', event => {
    event.target.style.color = 'aqua';

    setTimeout(function(){
        event.target.style.color = '';
    }, 800)
})





// []`wheel` *
// []`drag / drop` *
// []`load` *
// []`focus` *
// []`resize` *
// []`select` *
// []`dblclick`;
