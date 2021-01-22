
function builCard(product){
    ////Creacion de los elementos////
    const card = document.createElement('div');
    card.classList.add('card');
    const img = domBuilder.cardImg(product.img);
    const h4 = domBuilder.cardName(product.name);
    const p = domBuilder.cardSize(product.size);
    const button = domBuilder.cardButton('Comprar', 'btnProduct', product.id);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    ////Empaquetados de los elementos en sus reséctivos contenedores////
    cardBody.appendChild(h4);
    cardBody.appendChild(p);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    
    return card; ////Retornamos la card ya ensanblada////
}

function onSelectClick(event) {
    const idProduct = event.target.dataset.id;

    selectedProduct = products.find(function(product){
        if(product.id == idProduct){
            return product;
        }
    });
    productsSelected.push(selectedProduct);
    localStorage.setItem('selectedProducts', JSON.stringify(productsSelected));
    builCart();
}

function builCart(){
    const lastProduct = productsSelected[productsSelected.length - 1];
    const card = builCard(lastProduct);
    selectedProducts.appendChild(card);
}

 const domBuilder = new DOMBuilder(); ////Iniciamos la clase DOMbuilder////
 let productsSelected = [];

window.addEventListener('load', function(){ ////Esperamos a que la pagina se cargue para poder acceder al DOM////
    const publicaciones = document.getElementById('publicaciones');
    const selectedProducts = document.getElementById('selectedProducts');
    const itemProduct = document.getElementById('itemProduct').innerHTML;

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
            selectedProducts.appendChild(card);
        });
    }

    //// En este momento el DOM ya esta cargado ////
    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(function(btnProduct){
        btnProduct.addEventListener('click', onSelectClick);
    });
});









