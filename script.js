    /* const btn1 = document.getElementById('yas');
const ticket = document.getElementById('ticket1');

btn1.addEventListener('click', () => {
    ticket.style.opacity = 1;
});
*/



const btn1 = document.querySelector('#yas');
const master = document.querySelector('#masterContainer')
const btnMaster = document.querySelector('#buttonContainer')
const ticket = document.querySelector('#ticket1');

btn1.addEventListener('click', () => {
  master.classList.toggle('hidden');
  btnMaster.classList.toggle('hidden');

});