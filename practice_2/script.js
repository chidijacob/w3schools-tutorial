const bottom = document.querySelector('button');
const listUl = document.querySelector('ul');
const allLi = document.querySelectorAll('li');

bottom.addEventListener('click', logEvent);
function logEvent(e) {
    bottom.innerText = e.type;
    bottom.removeEventListener('click', logEvent);
    console.log(e.type);
}

const bckgrd = document.getElementById('background');
document.addEventListener('click', switchBackground);
listUl.addEventListener('click', greenBack);

function switchBackground(e) {
    const hasBeenClicked = bckgrd.contains(e.target);
    if (hasBeenClicked) {
        bckgrd.classList.add('background-color');
    }
    else {
        bckgrd.classList.remove('background-color');
    }
}

function greenBack(e) {
    e.stopPropagation();
    // for(const prop of allLi) {
    //     prop.classList.remove('green')
    // }
    // console.log(e);
    const targetLi = e.target;
    if (targetLi.nodeName === 'UL') {
        return;
    }
    const green = document.querySelector('.green');
    if (green) {
        green.classList.remove('green')
    }
    
    targetLi.classList.add('green')
}

const div2 = document.getElementById('div2');
// const myLink = div2.querySelector('a');

// myLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('not today!')
// })

// const myForm = document.getElementById('myForm');

// myForm.addEventListener('submit', addToList);

// function addToList(e) {
//     e.preventDefault();
//     const myInput = document.getElementById('myInput').value;
//     const newLi = document.createElement('li');
//     newLi.innerText = myInput;
//     // console.log(newLi);
//     listUl.appendChild(newLi);
//     myForm.reset();
// }

// document.addEventListener('keydown', function(e) {
//     console.log(e.keyCode);
// })

// document.addEventListener('keyup', function(e) {
//     console.log(e.keyCode);
// })

const div3 = document.getElementById('div3');
const para = div3.querySelector('p');
const textArea = div3.querySelector('textarea');
const paraText = 'user is typing...';
let timer;

textArea.addEventListener('keydown', addText);
textArea.addEventListener('keyup', removeText);

function addText(e) {
    para.innerText = paraText;
}

function removeText(e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        para.innerText = '';
    }, 1000)
    
}