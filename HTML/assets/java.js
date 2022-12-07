const createProductButton = document.querySelector('#create-product')
const dialog = document.querySelector('.create-product_dialog')
const cancelDialogButton = document.querySelector('#cancel')

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
//saveButton.addEventListener('click', getInputValues);

//FUNÇÃO QUE CAPTURA VALORES.
function getInputValues() {
    const inputName = inputs[0].value;
    const inputPrice = inputs[1].value;
    const inputImage = inputs[2].value;
    const inputImageDescription = inputs[3].value;
    const productDescription = document.querySelector('#description').value;

    return {
        inputName,
        inputImageDescription,
        inputPrice,
        inputImage,
        productDescription,
    }
}

//FUNÇÃO PARA CRIAR ELEMENTOS.
//PRIMEIRA MANEIRA DE CRIAR ELEMENTO.
//onst productCard = document.createElement('article')
//productCard.classList.add('product-card')
//const h2 = document.createElement('h2')
//productCard.appendChild(h2)
//h2.textContent = 'Jogo de Ferramentas'
//PRODUCT LIST É O PAI
//const productList = document.querySelector('.product-list')
//productList.appendChild(productCard)
//console.log(productList)

//SEGUNDA E MELHOR MANEIRA DE CRIAR ELEMENTO.
function createProductCard(nome, productDescription, price, imgSrc, imgDescription) {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card')
    const productList = document.querySelector('.product-list')
    //INNERHTML SUBSCREVE TUDO, PARA CONCATENAR INFORMAÇŌES USAR .innerHTML +=
    productCard.innerHTML =
        `<img alt="${imgDescription}"
src="${imgSrc}" class="product-card__product-image"></img>
<hr>
</hr>
<h1 class="product-card__product-price">${price}</h1>
<h2 class="product-card__product-name">${nome}</h2>
<p class="product-card__product-description">${productDescription}</p>`

    productList.appendChild(productCard)

}

//FUNÇÃO DE CONTROLE, CRIA ELEMENTOS E CAPUTURA OS VALORES.
//FUNÇÃO handle LIDA COM AS "COISAS"
function handleClickSave() {
    const productValues = getInputValues()
    createProductCard(
        productValues.inputName,
        productValues.productDescription,
        productValues.inputPrice,
        productValues.inputImage,
        productValues.inputImageDescription,
    )

    const form = document.querySelector('form');
    form.reset();
}

saveButton.addEventListener('click', handleClickSave);

//CONSUMINDO UM API FAKE.

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        //const item = json[0]
        //console.log(json)
        json.forEach(item => {
            createProductCard(
                item.title,
                item.description,
                item.price,
                item.image,
                item.title,
            )

        });
    })

    .catch(error => console.log(error))