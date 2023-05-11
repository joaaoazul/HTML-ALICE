    /* const btn1 = document.getElementById('yas');
const ticket = document.getElementById('ticket1');

btn1.addEventListener('click', () => {
    ticket.style.opacity = 1;
});
*/

const btn1 = document.getElementById('yas');
const ticket = document.getElementById('ticket1');

btn1.addEventListener('click', () => {
  ticket.classList.toggle('hidden');
  ticket.classList.toggle('ticket');
});