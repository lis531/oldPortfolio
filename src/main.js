const btn1 = document.querySelector('#submitBtn');
const message = document.querySelector('#textInput');
const email = document.querySelector('#emailInput');

const SendData = () => {
  if(message.value == '' || email.value == '') {
    alert('Please fill in all fields');
    return;
  }
}

btn1.addEventListener('click', function() {
  SendData();});