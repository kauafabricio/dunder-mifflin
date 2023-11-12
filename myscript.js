// Eu irei mudar essa validação de formulário do newsletter, isso aqui só foi um teste.
function emailbox(){
    const inputEmail = document.getElementById('id-in-email');
    const inputValue = inputEmail.value;

    if (inputValue.includes('@')) {
        inputEmail.style.color = 'green';
        window.alert("E-mail enviado com sucesso!")
    }
    else {
        inputEmail.style.color = 'red';
        window.alert("E-mail incorreto, digite novamente!")
    }
};
//DARK MODE CODES
const toggle = document.getElementById('toggle');
const body = document.body;
const elementos = {
    one: document.getElementById('text-one'),
    two: document.getElementById('text-two'),
    three: document.getElementById('text-three'),
    four: document.getElementById('text-four'),
    five: document.getElementById('text-five'),
    button: document.getElementById('toggle')
};

toggle.addEventListener("click", () => {
    body.classList.toggle('dark');
    const darkMode = body.classList.contains('dark');
    const imagem = document.getElementById('img-button');
    
    elementos.one.style.color = darkMode ? '#d1d1d1' : '#000000';
    elementos.two.style.color = darkMode ? '#d1d1d1' : '#000000';
    elementos.three.style.color = darkMode ? '#d1d1d1' : '#161616';
    elementos.four.style.color = darkMode ? '#d1d1d1' : '#000000';
    elementos.five.style.color = darkMode ? '#0921aa' : '#04125e';
    elementos.button.style.backgroundColor = darkMode ? '#838383' : '#000000';

    imagem.src = darkMode ? 'images/dark-theme-dark.png' : 'images/dark-theme-white.png';
});