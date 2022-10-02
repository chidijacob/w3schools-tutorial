// Get the modal
var modal = document.getElementById('theModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)  {
  if (event.target == modal) {
    let display = modal.style.display = "none";
    
  }
}
function validate() {
  let x = document.forms['myForm']['uname', 'psw'].value;
  if (x === '') {
    alert('enter your details')
    return false;
  }
}

function myFunction() {
  let x = document.getElementById('psw').value;
  let text;
  if (isNaN(x) || x < 1 || x > 100) {
    text = 'only number is required'
  } else {
    text = 'input is OK'}
}
window.addEventListener('click', cancel)

function cancel(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
//   cancel();
  
  // console.log(exit);
