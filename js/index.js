// Your code goes here

//mouseover-- 1---nav a

const navLinks = document.querySelectorAll('a.nav-link');
console.log('navLinks', navLinks);

navLinks.forEach((element) => element.addEventListener('mouseover', event =>{
    event.target.style.color = 'green';

    setTimeout(function(){
        event.target.style.color = '';
    }, 500);
    event.preventDefault();
    
}, false));




////mouseout---2

const secondaryHeader = document.querySelectorAll('h2');
console.log('secondaryHeader', secondaryHeader);

secondaryHeader.forEach((ele) => ele.addEventListener('mouseout', event =>{
    event.target.style.color = 'purple';
    
    setTimeout(function(){
        event.target.style.color = '';
    }, 1000);
}, false));

secondaryHeader.forEach((ele) => ele.addEventListener('mouseover', event =>{
    event.target.style.color = 'green';
    
    setTimeout(function(){
        event.target.style.color = '';
    }, 1000);
}, false));



///click---3
const buttons = document.querySelector('.btn');
console.log('buttons', buttons);

buttons.addEventListener('click', event =>{
    buttons.innerHTML = `Click a bunch: ${event.detail}`;
    event.target.style.color = 'purple';
});

///resize---4

window.addEventListener('resize', (event) => alert('Why are you in my swamp?!'));

const images = document.querySelectorAll('img');
console.log('images', images);

images.forEach((ele) => ele.addEventListener('resize', (event) => {
    event.target.style.border = '2px solid red';
}));

///copy---5

document.addEventListener('copy', (event) => alert('God is watching you plagiarize'));

///dragstart---6
document.addEventListener('dragstart', (event) => alert('Why are you moving things now?'));

//dblclick---8
document.addEventListener('dblclick', (event) => alert('You know you do not have to click twice'));


///mouse enter --9 and mouse leave--- 10

const logo = document.querySelector('h1.logo-heading');
console.log('logo', logo);

logo.addEventListener('mouseenter', event => {
    event.target.style.fontSize = '5rem';
    event.target.style.cursor = 'pointer';
    event.target.style.color = 'green';

    setTimeout(function(){
        event.target.style.color = '';
    }, 1000)
}, false);

logo.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '';
    event.target.style.color = 'purple';
})

