// SLIDESHOW CODES
//carregue a página antes do script
document.addEventListener("DOMContentLoaded", function() {
    //variáveis de controle
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
//selecionando os botões de controle do slideshow
controls.forEach((control) => {
    //se o botão for clicado
    control.addEventListener("click", (e) => {
        //botão esquerdo
        const isLeft = e.target.classList.contains("arrow-left");
        //se for o botão esquerdo que for clicado, -1 na imagem atual
        if (isLeft) {
            currentItem -=1;
            //se não é o esquerdo, então é o direito, então adicione +1 na imagem atual, 
        } else {
            currentItem +=1;
        }
        //são 5 imagens (0-4), então imagem inicial é 0. então pela lógica
        //se o currentItem for maior que 4, volte para o 0, ou seja, volte para imagem inicial.
        if (currentItem > maxItems -1) {
            currentItem = 0;
        } //se o currentItem for menor que 0, vá para imagem 4 (lógica do carrossel).
        if (currentItem < 0){
            currentItem = maxItems - 1;
        }
        //comportamento das imagens
        items.forEach((item) => item.classList.remove("first-item"));
        items[currentItem].scrollIntoView({
            inline: "center", behavior: "smooth"
        });
        items[currentItem].classList.add("first-item");
        });
    });

// MODAL
//variáveis de identificação para modal e botões
const modal = document.getElementById("modal");
const buttonModal = document.querySelector(".sorteio-button");
const closeButton= document.getElementById("closeButton");
//se o botão para abrir o modão for clicado, então abra-o
buttonModal.onclick = function () {
    modal.showModal();
}
//se o botão de fechar o modal 'X' for clicado, feche-o
closeButton.onclick = function () {
    modal.close();
}
});

// DARK MODE LOJA
//dark mode da loja mesma lógica do dark mode do arquivo 'myscript.js', só muda que
// incrementei a função forEach para selecionar cada elementos de uma mesma classe
const toggle = document.getElementById('toggle');
const body = document.body;

const elementos = {
    one: document.querySelector('.text1'),
    two: document.querySelectorAll('.text2'),
    three: document.querySelectorAll('.produto'),
    four: document.querySelectorAll('.comprar'),
    button: document.getElementById('toggle')

};

toggle.addEventListener("click", () => {
    body.classList.toggle('dark');
    const darkMode = body.classList.contains('dark');
    const imagem = document.getElementById('img-button');

    elementos.one.style.color = darkMode? '#d4d4d4' : '#181515';
    //elemento two seleciona todos os elementos da classe text2, e a função forEach/
    // para cada elemento, identifique-os como elemento.
    elementos.two.forEach(function(elemento) {
        elemento.style.color = darkMode? '#ffffff' : '#000000';
    });
    //elemento three seleciona todos os produtos da loja
    elementos.three.forEach(function(elemento) {
        //variável imgs identifica todas as imagens dos produtos da loja 
        var imgs = elemento.querySelectorAll('img');
        imgs.forEach(function(imagens) {
            imagens.style.boxShadow = darkMode ? '5px 5px 100px #181515' : '5px 5px 300px 0 #d3d3d3';
        });
    });
    elementos.four.forEach(function(comprar) {
         comprar.style.borderColor = darkMode? '#d4d4d4' : '#000000';
         comprar.style.color = darkMode? '#ffffff' : '#000000';
    });
    elementos.button.style.backgroundColor = darkMode? '#838383' : '#000000';
    imagem.src = darkMode ? 'images/dark-theme-dark.png' : 'images/dark-theme-white.png';
});