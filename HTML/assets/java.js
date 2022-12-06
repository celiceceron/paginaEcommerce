const createProductButton = document.querySelector("#create-product");
const dialog = document.querySelector(".create-product_dialog");
const cancelDialogButton = document.querySelector("#cancel");

// dialog.open = true funciona
// dialog.open = false funciona

// dialog.setAttribute('open', true) funciona
// dialog.setAttribute('open', false) nao funciona
// dialog.removeAttribute('open') funciona

// dialog.showModal() // funciona;
// dialog.close() // funciona

createProductButton.addEventListener("click", openModal);

function openModal() {
  dialog.showModal();
}

cancelDialogButton.addEventListener("click", () => {
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
  });
}

///CRIANDO UM NOVO PRODUCT CARD:
const productCard = document.createElement('article');
productCard.classList.add('product-card');
const h2 = document.createElement('h2'); // CRIANDO UM ELEMENTO H2
productCard.appendChild(h2); // COLOCANDO O H2 DENTRO DA ARVORE (DOM) DO PRODUCT CARD
h2.textContent = 'Jogo de ferramentas kit 129 peças' //CRIANDO UM TEXTO PRO H2.
console.log(productCard)