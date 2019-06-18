// Your code goes here

//mouseover-- 1---nav a

const navLinks = document.querySelectorAll('a.nav-link');
console.log('navLinks', navLinks);


navLinks.forEach((element) => element.addEventListener('mouseover', event =>{
    event.target.style.color = 'green';

    setTimeout(function(){
        event.target.style.color = '';
    }, 500);
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

///copy---5

document.addEventListener('copy', (event) => alert('God is watching you plagiarize'));

///dragstart---6

//dragend---7

//dblclick---8

///mouse enter --9

//mouse leave--10