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
function createProductCard(){
const productCard = document.createElement('article')
productCard.classList.add('product-card')
const productList = document.querySelector('.product-list')
//INNERHTML SUBSCREVE TUDO, PARA CONCATENAR INFORMAÇŌES USAR .innerHTML +=
productCard.innerHTML = 
`<img alt="Um conjunto de martelo, alicate, trena e chaves dentro de uma caixa preta"
src="./assets/produto-kit-ferramentas.jpg" class="product-card__product-image"></img>
<hr>
</hr>
<h1 class="product-card__product-price">R$ 128,00</h1>
<h2 class="product-card__product-name">Jogo de Ferramentas Kit 129 Peças C/ Maleta + 40 Peças</h2>
<p class="product-card__product-description">Esse é um jogo de peças extremamente útil para diversas
atividades, visto que o conjunto de peças é muito variado.</p>`


productList.appendChild(productCard)

}
