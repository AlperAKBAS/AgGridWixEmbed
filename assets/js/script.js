console.log('Main script connected!');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded succesfuly');
  window.onmessage = event => {
    console.log('Message received from', event.origin);
    console.log(event);
    console.log('Data', event.data);
  };
});
