const createProductButton = document.querySelector('#create-product')
const dialog = document.querySelector('.create-product_dialog')
const cancelDialogButton =  document.querySelector('#cancel')

// dialog.open = true funciona
// dialog.open = false funciona

// dialog.setAttribute('open', true) funciona
// dialog.setAttribute('open', false) nao funciona
// dialog.removeAttribute('open') funciona

// dialog.showModal() // funciona;
// dialog.close() // funciona

createProductButton.addEventListener('click', openModal);

function openModal() {
  dialog.showModal();
}


//DICA_PARA CADA FUNCIONALIDADE CRIAR UMA NOVA FUNÇÃO.
cancelDialogButton.addEventListener('click', () => {
  dialog.close();
})

const inputs = document.querySelectorAll('input');
const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', getInputValues);

//FUNÇÃO QUE CAPTURA VALORES.
function getInputValues(){
    const inputName = inputs[0].value;
    const inputPrice = inputs[1].value;
    const inputImage = inputs[2].value;
    const inputImageDescription = inputs[3].value;
    const productDescription = document.querySelector('#description').value;
    console.log({
        inputName, 
        inputPrice, 
        inputImage, 
        inputImageDescription, 
        productDescription,
    })
}

//FUNÇÃO PARA CRIAR ELEMENTOS.
const productCard = document.createElement('article')
productCard.classList.add('product-card')
console.log(productCard)