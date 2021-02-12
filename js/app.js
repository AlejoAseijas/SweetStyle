/**
 * Funcion que crea las cards de los productos a travez del DOM. Utiliza la clase DOMBuilder para llevarlo a cabo. Luego de crearlos los muestra.
 * @param {object} product Elementos de la card.
 * @returns {object} Card ya creada.
 */

function builCard(product) {

    const card = `
        <div class="card">
            <img src="${product.img}" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title"> ${product.name} </h4>
                <p class="card-text"> ${product.size} </p>
                <p class="card-text"> ${product.price} </p>
                <button class="btn btn-primary" id='btnProduct' data-id = "${product.id}"> Comprar </button>
            </div>
        </div>
    `;
    return card;
}

/**
 *  Esta funcion se encarga de que cuando se hace click en el boton de un producto obtine su id y verifica si concuerda con la del archivo data.js. A su vez almacena el producto en el localStorge y lo agrega al array productsSelected. 
 * @returns {object} Producto seleccionado.
 */

function onSelectClick(event) {
    const idProduct = event.target.dataset.id;
    let selectedProduct = productsOfSelectedSection.find(function (product) {
        if (product.id == idProduct) {
            return product;
        }
    });
    productsSelectedList.push(selectedProduct);
    localStorage.setItem('selectedProducts', JSON.stringify(productsSelectedList));
    builCart();
}
/**
 * Esta funcion obtine la ultima card que se agreo al array productsSelected y genera su card y lo muestra.
 */
function builCart() {
    console.log('ok');
    const lastProduct = productsSelectedList[productsSelectedList.length - 1];
    const card = builCard(lastProduct);
    $('#selectedProducts').append(card);
}

/**
 * @type {Array} Este array contiene los productos selecionados por el cliente.
 */

const productsOfSelectedSection = [];
let productsSelectedList = [];

//Esperamos a que cargue el DOM para poder acceder a este y cargar las cards.



$(document).ready(function () { //Esperamos a que la pagina se cargue para poder acceder al DOM.
    const publicaciones = $('#publicaciones');
    const selectedProducts = $('#selectedProducts');
    const storageProducts = $('#storageProducts');
    const itemProduct = $('#itemProduct').html();


    $.ajax({
        url: "../js/data.json",
        dataType: "JSON",
        success: function (contenidoJSON) {
            $.each(contenidoJSON, function (i) {
                switch (itemProduct) {
                    case 'Summer 2021':
                        if (contenidoJSON[i].available == true && contenidoJSON[i].categoria == 'summer2021') {
                            productsOfSelectedSection.push(contenidoJSON[i]);
                            const card = builCard(contenidoJSON[i]);
                            $('#publicaciones').append(card);
                        }
                        break;
                    case 'Pantalones':
                        if (contenidoJSON[i].available == true && contenidoJSON[i].categoria == 'pantalones') {
                            const card = builCard(contenidoJSON[i]);
                            productsOfSelectedSection.push(contenidoJSON[i]);
                            $('#publicaciones').append(card);
                        }
                        break;
                    case 'Remeras':
                        if (contenidoJSON[i].available == true && contenidoJSON[i].categoria == 'remeras') {
                            const card = builCard(contenidoJSON[i]);
                            productsOfSelectedSection.push(contenidoJSON[i]);
                            $('#publicaciones').append(card);
                        }
                        break;
                    case 'Buzos':
                        if (contenidoJSON[i].available == true && contenidoJSON[i].categoria == 'buzos') {
                            const card = builCard(contenidoJSON[i]);
                            productsOfSelectedSection.push(contenidoJSON[i]);
                            $('#publicaciones').append(card);
                        }
                        break;
                        break;
                    case 'Vestidos':
                        if (contenidoJSON[i].available == true && contenidoJSON[i].categoria == 'vestidos') {
                            const card = builCard(contenidoJSON[i]);
                            productsOfSelectedSection.push(contenidoJSON[i]);
                            $('#publicaciones').append(card);
                        }
                        break;
                    case 'Shorts':
                        if (contenidoJSON[i].available == true && contenidoJSON[i].categoria == 'shorts') {
                            const card = builCard(contenidoJSON[i]);
                            productsOfSelectedSection.push(contenidoJSON[i]);
                            $('#publicaciones').append(card);
                        }
                        break;

                }
            });
        }
    });



    const cart = JSON.parse(localStorage.getItem('selectedProducts')); //// Creamos una constante que almacena en el localStorage los productos selecionados.

    if (cart) {
        cart.forEach(function (product) {
            const card = builCard(product);
            $('#storageProducts').append(card);
        });
    }

    //// En este momento el DOM ya esta cargado ////

    $('#cartItemnsToPay').click(function () {
        window.location = "./pages/cart.html";
    });

    const btnProduct1 = document.getElementById('btnProduct');
    const publicaciones1 = document.getElementById('publicaciones');

    publicaciones1.addEventListener('click', function (e) {
        if (e.target.nodeName == 'BUTTON') {
            onSelectClick(e);
        }
    });
});