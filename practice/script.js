const div = document.querySelector('div');
div.style.color = 'green';
div.style.fontSize = '100px';

const changeId = document.getElementById('test');
changeId.id += 'nest';

const purpleDivs = document.querySelectorAll('.purple');
for (const prop of purpleDivs) {
    prop.classList.add('foo');
}

