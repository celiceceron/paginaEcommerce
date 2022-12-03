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

cancelDialogButton.addEventListener('click', () => {
    dialog.close();
})