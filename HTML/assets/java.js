const createProductButton = document.querySelector('#create-product')
const dialog = document.querySelector('.create-product-dialog')
const cancelDialogButton = document.querySelector('#cancel')

// dialog.open = true funciona
// dialog.open = false funciona

// dialog.setAttribute(`open`, true) funciona
// dialog.setAttribute(`open`, false) nao funciona
// dialog.removeAttribute(`open`) funciona

// dialog.showModal() // funciona;
// dialog.close() // funciona

createProductButton.addEventListener('click', openModal);

function openModal() {
    dialog.showModal();
}

cancelDialogButton.addEventListener('click', () => {
    dialog.close();
})

//// DICA: CRIAR NOVAS FUNCOES PARA RESPONSABILIDADES DIFERENTES.

const inputs = document.querySelectorAll('input');
const saveButton = document.querySelector('#save');
console.log('saveButton', saveButton );


//PASSEI O CODIGO PRA BAIXO
//saveButton.addEventListener('click', getInputValues);

//RESP. DA FUNCAO (PEGAR VALORES)
//function getInputValues() {
    //const inputName = inputs[0].value;
    //const inputPrice = inputs[1].value;
    //const inputImage = inputs[2].value;
    //const inputImageDescription = inputs[3].value;
    //const productDescription = document.querySelector('#description').value;
    //console.log(inputName, inputPrice, inputImage, inputImageDescription, productDescription);

    ///CRIANDO UM OBJETO COM AS INFORMACOES:

    //console.log({
        //inputName,
        //inputImageDescription,
        //inputPrice,
       // inputImage,
       // productDescription,
    //})

    //return {
      //  inputName,
       // inputImageDescription,
       // inputPrice,
      //  inputImage,
       // productDescription,
   // }
//};

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



//CRIANDO A FUNCAO (COPIEI OS COMANDOS DE CIMA)
//RESP. DA FUNCAO (CRIAR PRODUTO)
//function createProductCard() {
   //const productCard = document.createElement('article');
    //productCard.classList.add('product-card');
    //const productList = document.querySelector('.product-list');

    //productCard.innerHTML =
   


    //COLOCANDO O PRODUT CARD DENTRO DO PRODUCT LIST
   // productList.appendChild(productCard);
//}

//FUNCAO PARA SALVAR E CAPTURAR INFORMACOES:
//function handleClickSave() {
    //getInputValues primeira função que pega valores
    //const productValues = getInputValues()
    //console.log('productValues', productValues)

//}

//saveButton.addEventListener('click', handleClickSave);
