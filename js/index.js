// Your code goes here

//mouseover-- 1---nav a

const navLinks = document.querySelector('a.nav-link');
console.log('navLinks', navLinks);


navLinks.addEventListener('mouseover', event =>{
    event.target.style.color = 'green';
    event.target.style.backgroundColor = 'yellow';

    setTimeout(function(){
        event.target.style.color = '';
    }, 500);
}, false);


////mouseout---2

const secondaryHeader = document.querySelector('h2');
console.log('secondaryHeader', secondaryHeader);

secondaryHeader.addEventListener('mouseover', event =>{
    event.target.style.color = 'purple';
    
    setTimeout(function(){
        event.target.style.color = '';
    }, 500);
}, false);

///click---3



///resize---4

///copy---5

///dragstart---6

//dragend---7

//dblclick---8

///mouse enter --9

//mouse leave--10