// Your code goes here

// function clickEventHandler(event){
//     console.log(event.type + '!!!!!!!!!!!!!!!');
//     console.log(event.target);
//     console.log(event.currentTarget);
// }

// homeLink.addEventListener('click', clickEventHandler);

// document.querySelector('nav').addEventListener('click', clickEventHandler);
// document.querySelector('a').addEventListener('click', clickEventHandler);
// document.querySelector('a').addEventListener('click', event => {
//     //we are going to sabotage bubbling
//     event.stopPropagation();
//     console.log('hahahha, sabotaging propagation!!')
// });

// //attach a 'click' event listener to the header

// document.querySelector('header').addEventListener('click', clickEventHandler, {capture: true});



// --------------------------------------------------------------

// mouse over
document.querySelector('.intro img').addEventListener('mouseover', event => {
    event.target.style.border = "5px dotted purple";
    setTimeout( () => {
        event.target.style.border = "";
    }, 500);
}, false);


// keydown
const input = document.querySelector('.intro #num_text');
// console.log(input);

input.addEventListener('keydown', e => {
    e.target.style.backgroundColor = "red";

    if (input.value === ''){
        e.target.style.backgroundColor = "white";
    }
});


// wheel

document.querySelector('body').addEventListener('wheel', event => {
    document.querySelector('.intro #num_text').remove();
});



//dbclick
const abc = document.querySelector('#homeLink');

abc.addEventListener('dblclick', newFunc);
function newFunc () {
    document.body.style.background = 'red';
};


//click 
document.getElementById('contactLink').addEventListener('click', clicky); 

function clicky (event){
    event.target.style.border = "5px solid green";
}

//load
document.getElementById('onLoad').addEventListener('load', loader); 

function loader (){
    alert("Image is loaded");
}

// copy
document.getElementById('copyMe').addEventListener('copy', () => {
    alert('You copied  this text');
});

// cut
document.getElementById('copyMe').addEventListener('cut', () => {
    alert('You copied  this text');
});

// paste
document.getElementById('num_text').addEventListener('paste', () => {
    alert('You Pasted text!');
});
