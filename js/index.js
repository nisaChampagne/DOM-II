// Your code goes here

//mouseover-- 1

const navLinks = document.querySelectorAll('a.nav-link');
console.log('navLinks', navLinks);

navLinks.forEach((element) => element.addEventListener('mouseover', event =>{
    event.target.style.color = 'green';
    event.target.style.fontSize = '2rem';
    setTimeout(function(){
        event.target.style.color = '';
        event.target.style.fontSize = '';
    }, 500);
    event.preventDefault();
    
}, false));

navLinks.forEach((element) => element.addEventListener('click', event => {
    event.preventDefault();
}));


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
const buttons = document.querySelectorAll('.btn');
console.log('buttons', buttons);

buttons.forEach((element) => element.addEventListener('click', event =>{
    buttons.forEach((ele) => ele.innerHTML = `Click a bunch: ${event.detail}`);
    event.target.style.color = 'purple';
}));



///resize---4

window.addEventListener('resize', (event) => alert('Why are you in my swamp?!'));


///copy---5

document.addEventListener('copy', (event) => alert('God is watching you plagiarize'));

///dragstart---6
document.addEventListener('dragstart', (event) => alert('Why are you moving things now?'));

//dblclick---7
document.addEventListener('dblclick', (event) => alert('You know you do not have to click twice'));

///scroll --8

// window.addEventListener('scroll', event => alert('You have scrolled enough'));

const paragraphs = document.querySelectorAll('p');
document.addEventListener('scroll', function() {
    let colorchoice = "rgb(" + Math.round(Math.random() * 220) + "," + Math.round(Math.random() * 220) + "," + Math.round(Math.random() * 220) + ")";
    paragraphs.forEach((para) => para.style.color = colorchoice)
})


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

logo.addEventListener('mouseenter', event => {
    event.stopPropagation()
});


logo.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '';
    event.target.style.color = 'purple';
})


