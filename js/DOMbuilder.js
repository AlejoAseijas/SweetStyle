class DOMBuilder{
    constructor(){

    }
    cardImg(imgSrc){
        const img = document.createElement('img');
        img.src=imgSrc;
        img.classList.add('card-img-top');
        return img; 
    }
    cardName(name){
        const h4 = document.createElement('h4');
        h4.textContent = name;
        h4.classList.add('card-title');
        return h4;
    }
    cardSize(size){
        const p = document.createElement('p');
        p.textContent = size;
        p.classList.add('card-text');
        return p;           
    }
    cardButton(nameButton, classButton, idButton){
        const button = document.createElement('button');
        button.textContent= nameButton;
        button.classList.add(classButton);
        button.type = 'submit';
        button.setAttribute('data-id', idButton);
        return button;
    }

}
