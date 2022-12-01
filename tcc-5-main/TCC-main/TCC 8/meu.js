// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'black';

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const registroInput = document.querySelector('#registro');
const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (registroInput.value === '') {
// alert('Por favor, preencha os dados.');
msg.classList.add('error');
msg.innerHTML = 'Por favor, preencha os dados.';
setTimeout(() => msg.remove(), 3000);
} else {
// console.log('sucess');
const li = document.createElement('li');
li.appendChild(
document.createTextNode(
`${registroInput.value}  `
)
);
userList.appendChild(li);
// Limpa o formulário
registroInput.value = '';
emailInput.value = '';
horario.getElementsByTagName('option')[0].selected = 'selected';
nameInput.focus(); //Coloca o foco no elmento
}
}