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
        return $(`<img src=${imgSrc} class="card-img-top" alt="...">`);
    }
    /**
     * 
     * @param {string} name Es el nombre del Producto. 
     */
    cardName(name){
        return $(`<h4 class="card-title"> ${name}</h4>`);
    }
    /**
     * 
     * @param {undefined} size Talle de los productos.
     */
    cardSize(size){    
        return $(`<p class="card-text"> ${size} </p>`);
    }
    /**
     * Este metodo crea los botos asignandoles nombre, clases y el id correspondiente de cada producto. Asi cuando se realiza un click sabemos que producto es.
     * @param {string} nameButton 
     * @param {string} classButton 
     * @param {string} idButton
     * @example  "domBuilder.cardButton('Comprar', 'btnProduct', product.id);".
     */

    cardButton(nameButton, classButton, idButton){
      const button = $(`<button type="submit" class="${classButton}"> ${nameButton}" </button>`);
      $('button').attr("data-id", "${idButton}");
      return button;
    }

}


