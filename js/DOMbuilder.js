/**
 * Esta clase esambla y crea cada unos de los elementos de la card. Los datos de estas se obtienen del archivo data.js.
 * @returns {object}
 */

class DOMBuilder{
    constructor(){
    }
    /**
     * 
     * @param {string} imgSrc Es la direccion de las imagenes.
     * @example "img/summer2021/1.jpg".
     */
    cardImg(imgSrc){
        const img = document.createElement('img');
        img.src=imgSrc;
        img.classList.add('card-img-top');
        return img; 
    }
    /**
     * 
     * @param {string} name Es el nombre del Producto. 
     */
    cardName(name){
        const h4 = document.createElement('h4');
        h4.textContent = name;
        h4.classList.add('card-title');
        return h4;
    }
    /**
     * 
     * @param {undefined} size Talle de los productos.
     */
    cardSize(size){
        const p = document.createElement('p');
        p.textContent = size;
        p.classList.add('card-text');
        return p;           
    }
    /**
     * Este metodo crea los botos asignandoles nombre, clases y el id correspondiente de cada producto. Asi cuando se realiza un click sabemos que producto es.
     * @param {string} nameButton 
     * @param {string} classButton 
     * @param {string} idButton
     * @example  "domBuilder.cardButton('Comprar', 'btnProduct', product.id);".
     */

    cardButton(nameButton, classButton, idButton){
        const button = document.createElement('button');
        button.textContent= nameButton;
        button.classList.add(classButton);
        button.type = 'submit';
        button.setAttribute('data-id', idButton);
        return button;
    }

}
