// Your code goes here


////orderly/////
const navs =  document.querySelectorAll('a.nav-link');
console.log('navs', navs);

const navbar = document.querySelector('.main-navigation');

const funbus = document.querySelector('.logo-heading');
console.log('funbus', funbus);

const para = document.querySelectorAll('p');
console.log('para', para);

const imgs = document.querySelectorAll('img');
console.log('imgs', imgs);

const secondary = document.querySelectorAll('h2');
console.log('secondary', secondary);

const btns = document.querySelectorAll('div.btn');
console.log('btns', btns);


///images

imgs[0].addEventListener('mouseover', event => {/////1
    event.target.style.borderRadius = '50%';

    setTimeout(function(){
        event.target.style.borderRadius = '';
    }, 800);
})

imgs[1].addEventListener('click', event => {////2
    event.target.style.borderRadius = '50%';

    setTimeout(function(){
        event.target.style.borderRadius = '';
    }, 800);
})


imgs[2].addEventListener('click', event => {////2
    event.target.style.borderRadius = '50%';

    setTimeout(function(){
        event.target.style.borderRadius = '';
    }, 800);
})


imgs[3].addEventListener('click', event => {////2
    event.target.style.borderRadius = '50%';

    setTimeout(function(){
        event.target.style.borderRadius = '';
    }, 800);
})

//////////////parapgraphs////////////

///mouseout
para.forEach((element) =>
element.addEventListener('mouseout', event =>{///3
    event.target.style.fontSize = '1.5rem';

    setTimeout(function(){
        event.target.style.fontSize = '';
    }, 400);
}));



////////////////h2///////////


//contextmenu
secondary.forEach((element) => element.addEventListener('contextmenu', event => {///4
    event.preventDefault();
}));

secondary[1].addEventListener('mousedown', event => event.target.style.color = 'lavender');


secondary[2].addEventListener('mousedown', event => event.target.style.color = 'aqua');
secondary[3].addEventListener('mousedown', event => event.target.style.color = 'pink');
///propagation stop in h2
secondary[0].addEventListener('click', event => event.target.style.color = 'lavender');

secondary[0].addEventListener('click', event => event.stopPropagation());




/////////////////h1/////////////////

// []`click` *

funbus.addEventListener('click', event => {
    event.target.style.color = 'purple'; 

    setTimeout(function(){
        event.target.style.color = '';
    }, 800)
})


/////////////////nav//////

// []`mouseover` *
navs.forEach((element) => 
element.addEventListener('mouseover', event =>{
    event.target.style.color = 'purple';

    setTimeout(function(){
        event.target.style.color = 'blue';
    }, 1000);
}))

navs.forEach((element) => element.addEventListener('click', event =>{
    event.preventDefault()}));


////////////buttons//////
//mouseenter
btns.forEach((element)=> element.addEventListener('mouseenter', event =>{////10
   let colorchoice = "rgb(" + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ")";
    event.target.style.background = 'cyan';
    event.target.style.color= colorchoice;

    setTimeout(function(){
        event.target.style.background ='';
        event.target.style.color ='';
    }, 800);
}))
    

/////////document///////

////copy
document.addEventListener('copy', event => alert('Google exists for a reason'));///5


//keydown 
document.addEventListener("keydown", event => {////6
    alert("Stop it.")
})

///dblclick
document.addEventListener('dblclick', (event) => alert('Rude'));///7



///////////window///////

///resize
window.addEventListener('resize', event => alert('Whoa'));////8


//load
window.addEventListener('load', () => {
    navbar.style.background = 'linear-gradient(lavender, cyan)'; ///9
});
