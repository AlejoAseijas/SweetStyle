class Cart{
    id = '';

    constructor(id){
        this.id=id;
    }
    addToCart(){
        console.log('Se añadio correctamente al carrito');
    }
    elinateToCart(){
        console.log('Se elimino correctamente del carrito');
    }
    pay(){
        console.log('Pago aprobado');
    }
}

class LocalStorageSaveRecover{

    constructor(){

    }
    save(){
        localStorage.setItem();
    }
    recover(){
        localStorage.getItem();
    }
}

function buildProductCard(remeras) {
    const div = document.createElement('div');
    const title = domBuilder.h2(remeras.name);
    const image = domBuilder.img(remeras.img);
    const description = domBuilder.p(remeras.description);
    const price = domBuilder.p(remeras.price);
    const button = domBuilder.button('Seleccionar', 'btnProduct', product.id);
  
    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);
  
    return div;
  }