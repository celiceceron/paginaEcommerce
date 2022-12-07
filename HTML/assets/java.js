const createProductButton = document.querySelector(`#create-product`);
const dialog = document.querySelector(`.create-product_dialog`);
const cancelDialogButton = document.querySelector(`#cancel`);

// dialog.open = true funciona
// dialog.open = false funciona

// dialog.setAttribute(`open`, true) funciona
// dialog.setAttribute(`open`, false) nao funciona
// dialog.removeAttribute(`open`) funciona

// dialog.showModal() // funciona;
// dialog.close() // funciona

createProductButton.addEventListener(`click`, openModal);

function openModal() {
    dialog.showModal();
}

cancelDialogButton.addEventListener(`click`, () => {
    dialog.close();
});

//// DICA: CRIAR NOVAS FUNCOES PARA RESPONSABILIDADES DIFERENTES.

const inputs = document.querySelectorAll('input');
const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', getInputValues);

function getInputValues() {
    const inputName = inputs[0].value;
    const inputPrice = inputs[1].value;
    const inputImage = inputs[2].value;
    const inputImageDescription = inputs[3].value;
    const productDescription = document.querySelector('#description').value;
    //console.log(inputName, inputPrice, inputImage, inputImageDescription, productDescription);

    ///CRIANDO UM OBJETO COM AS INFORMACOES:

    console.log({
        inputName,
        inputPrice,
        inputImage,
        inputImageDescription,
        productDescription,
    })
};

///PRIMEIRA MANEIRA DE CRIR UM NOVO PRODUCT CARD:
//const productCard = document.createElement(`article`);
//productCard.classList.add(`product-card`);

//const h2 = document.createElement(`h2`); // CRIANDO UM ELEMENTO H2
//productCard.appendChild(h2); // COLOCANDO O H2 DENTRO DA ARVORE (DOM) DO PRODUCT CARD
//h2.textContent = `Jogo de ferramentas kit 129 peças` //CRIANDO UM TEXTO PRO H2.

//CRIANDO UM PAI PARA O PRODUCT LIST:
//const productList = document.querySelector(`.product-list`);
//productList.appendChild(productCard);
//console.log(productCard)

///SEGUNDA MANEIRA DE CRIR UM NOVO PRODUCT CARD:
//const productCard = document.createElement('article');
//productCard.classList.add('product-card');
//const productList = document.querySelector('.product-list');
//INNERHTML SOBSCREVE TUDO QUE VEIO ANTES. SE USAR += NO FINAL ELE FAZ APARECER O QUE FOI CRIADO ANTES TB.

//productCard.innerHTML =
`<article class="product-card">
<img alt="Um conjunto de martelo, alicate, trena e chaves dentro de uma caixa preta"
  src="./assets/produto-kit-ferramentas.jpg" class="product-card__product-image"></img>
<hr>
</hr>
<h1 class="product-card__product-price">R$ 128,00</h1>
<h2 class="product-card__product-name">Jogo de Ferramentas Kit 129 Peças C/ Maleta + 40 Peças</h2>
<p class="product-card__product-description">Esse é um jogo de peças extremamente útil para diversas
  atividades, visto que o conjunto de peças é muito variado.</p>`


  //CRIANDO A FUNCAO (COPIEI OS COMANDOS DE CIMA)
function createProductCard() {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    const productList = document.querySelector('.product-list');

    productCard.innerHTML =
        `<article class="product-card">
<img alt="Um conjunto de martelo, alicate, trena e chaves dentro de uma caixa preta"
  src="./assets/produto-kit-ferramentas.jpg" class="product-card__product-image"></img>
<hr>
</hr>
<h1 class="product-card__product-price">R$ 128,00</h1>
<h2 class="product-card__product-name">Jogo de Ferramentas Kit 129 Peças C/ Maleta + 40 Peças</h2>
<p class="product-card__product-description">Esse é um jogo de peças extremamente útil para diversas
  atividades, visto que o conjunto de peças é muito variado.</p>`
}

//COLOCANDO O PRODUT CARD DENTRO DO PRODUCT LIST
productList.appendChild(productCard);


