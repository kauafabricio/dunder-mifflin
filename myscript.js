//DARK MODE CODES
// variáveis para identificar botão de darkmode e o corpo do html
const toggle = document.getElementById('toggle');
const body = document.body;
// objeto criado para armazenar todos os elementos que serão afetados pelo darkmode
const elementos = {
    one: document.getElementById('text-one'),
    two: document.getElementById('text-two'),
    three: document.getElementById('text-three'),
    four: document.getElementById('text-four'),
    five: document.getElementById('text-five'),
    button: document.getElementById('toggle')
};
//se o botão dark mode for clicado, então...
toggle.addEventListener("click", () => {
    //atribua ao body, a lista dark contendo os valores das cores para serem substituídas no body
    body.classList.toggle('dark');
    //variável para identificar se o dark estiver no body então..
    const darkMode = body.classList.contains('dark');
    const imagem = document.getElementById('img-button');
    //elemento tal, darkMode? se sim, então mude o elemento para o valor, dark não está no body? então..
    elementos.one.style.color = darkMode ? '#d1d1d1' : '#000000';
    elementos.two.style.color = darkMode ? '#d1d1d1' : '#000000';
    elementos.three.style.color = darkMode ? '#d1d1d1' : '#161616';
    elementos.four.style.color = darkMode ? '#d1d1d1' : '#000000';
    elementos.five.style.color = darkMode ? '#0921aa' : '#04125e';
    elementos.button.style.backgroundColor = darkMode ? '#838383' : '#000000';

    imagem.src = darkMode ? 'images/dark-theme-dark.png' : 'images/dark-theme-white.png';
});