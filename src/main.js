const btn1 = document.querySelector('#submitBtn');
const message = document.querySelector('#textInput');
const email = document.querySelector('#emailInput');

const SendData = () => {
  message.value = '';
}

btn1.addEventListener('click', function() {
  console.log('Hello World');
});