/**
 * Funcion que crea las cards de los productos a travez del DOM. Utiliza la clase DOMBuilder para llevarlo a cabo. Luego de crearlos los muestra.
 * @param {object} product Elementos de la card.
 * @returns {object} Card ya creada.
 */

function builCard(product){
    const card = document.createElement('div');
    card.classList.add('card');
    const img = domBuilder.cardImg(product.img);
    const h4 = domBuilder.cardName(product.name);
    const p = domBuilder.cardSize(product.size);
    const button = domBuilder.cardButton('Comprar', 'btnProduct', product.id);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(h4);
    cardBody.appendChild(p);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    return card; 
}

/**
 * Esta funcion se encarga que cada vez que se haga click sobre el logo del carrito nos mande a una pagina que contenga los productos selecionados.
 * @returns {void}
 */

function cartClick(){
    window.location = "./pages/cart.html"; 
}

/**
 *  Esta funcion se encarga de que cuando se hace click en el boton de un producto obtine su id y verifica si concuerda con la del archivo data.js. A su vez almacena el producto en el localStorge y lo agrega al array productsSelected. 
 * @returns {object} Producto seleccionado.
 */

function onSelectClick(event) {
    const idProduct = event.target.dataset.id;

    selectedProduct = Summer2021.find(function(product){
        if(product.id == idProduct){
            return product;
        }
    });
    productsSelected.push(selectedProduct);
    localStorage.setItem('selectedProducts', JSON.stringify(productsSelected));
    builCart();
}
/**
 * Esta funcion obtine la ultima card que se agreo al array productsSelected y genera su card y lo muestra.
 */
function builCart(){
    const lastProduct = productsSelected[productsSelected.length - 1];
    const card = builCard(lastProduct);
    selectedProducts.appendChild(card);
}

 const domBuilder = new DOMBuilder();  //Iniciamos la clase DOMbuilder

 /**
  * @type {Array} Este array contiene los productos selecionados por el cliente.
  */
 let productsSelected = [];

 
 //Esperamos a que cargue el DOM para poder acceder a este y cargar las cards.


window.addEventListener('load', function(){ //Esperamos a que la pagina se cargue para poder acceder al DOM.
    const publicaciones = document.getElementById('publicaciones');
    const selectedProducts = document.getElementById('selectedProducts');
    const storageProducts = document.getElementById('storageProducts');  
    const itemProduct = document.getElementById('itemProduct').innerHTML;
    const cartItemBtn = document.getElementById('cartLogo');
    

    //Se utiliza este switch para poder saber en pagina de producto estamos 

    switch(itemProduct){ //Se utiliza para saber en que pagina Html estamos leyendo un H3 del dom y segun este carga las cards correspondientes.
        case 'Remeras':
            Remeras.forEach(function(product){ ////Recorremos el JSON products. ////
                if(product.available){ 
                    const card = builCard(product); ////  En cada vuelta enviamos un producto a la funcion builCard() ////
                    publicaciones.appendChild(card); //// Mostramos la card del producto. 
                }
            });
        break;

        case 'Buzos':
            Buzos.forEach(function(product){ 
                if(product.available){ 
                    const card = builCard(product);
                    publicaciones.appendChild(card); 
                }
            });
        break;

        case 'Vestidos':
            Vestidos.forEach(function(product){ 
                if(product.available){ 
                    const card = builCard(product);
                    publicaciones.appendChild(card); 
                }
            });
        break;

        case 'Shorts':
            Shorts.forEach(function(product){ 
                if(product.available){ 
                    const card = builCard(product);
                    publicaciones.appendChild(card); 
                }
            });
        break;

        case 'Pantalones':
            Pantalones.forEach(function(product){ 
                if(product.available){ 
                    const card = builCard(product);
                    publicaciones.appendChild(card); 
                }
            });
        break;

        case 'Summer 2021':
            Summer2021.forEach(function(product){ 
                if(product.available){ 
                    const card = builCard(product); 
                    publicaciones.appendChild(card); 
                }
            });
        break;

        
    }
   
    const cart = JSON.parse(localStorage.getItem('selectedProducts'));  //// Creamos una constante que almacena en el localStorage los productos selecionados.

    if(cart){
        cart.forEach(function(product){ 
            const card = builCard(product);
            storageProducts.appendChild(card);
        });
    }

    //// En este momento el DOM ya esta cargado ////

 

        cartItemBtn.addEventListener('click', cartClick);

    
    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(function(btnProduct){
        btnProduct.addEventListener('click', onSelectClick); //Al producirse un click en el boton de un producto  se llama a la funcion OnSelectClick().
    });
});

//    cartItemBtn.addEventListener('click', cartItemsSelected);







