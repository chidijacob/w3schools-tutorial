// const div = document.querySelector('div');
// div.style.color = 'green';
// div.style.fontSize = '100px';

// const changeId = document.getElementById('test');
// changeId.id += 'nest';

// const purpleDivs = document.querySelectorAll('.purple');
// for (const prop of purpleDivs) {
//     prop.classList.add('foo');
// }

// setInterval(() => {
//     for(const prop of purpleDivs) {
//         prop.classList.contains('foo')
//     }
// }, 3000)

const creationDiv = document.getElementById('created');
const newElement = document.createElement('h1');
newElement.innerHTML = 'i was created by science'
creationDiv.appendChild(newElement);