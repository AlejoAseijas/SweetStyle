$(document).ready(function () {
    let importeFinal = 0;

    const cart = JSON.parse(localStorage.getItem('selectedProducts'));
    const amountN = cart.length - 1;
    const productsAmount = [];

    if (cart) {
        cart.forEach(function (product, i) {
            const info =
                `<tr>
                <th scope="row">${i+1}</th>
                    <td>${product.name}</td>
                    <td id='priceUnit'>${product.price}</td>
                    <td> 
                        <div class="input-group input-group-sm mb-3">
                            <input type="text" class='amountItem' class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='amount${i+1}' data-id=${product.id} data-price=${product.price}>
                        </div>
                    </td>
                </tr>`;
            $('#tablaCuerpo').append(info);
        });
    }

    $('#btnDelete').click(function (e) {
        e.preventDefault();
        localStorage.removeItem('selectedProducts');
        location.reload();
    });

    $('#btnCalc').click(function (e) {
        const cant = $('#tablaCuerpo :input').val();
        importeFinal = 0;
        $('#precioFinal').empty();
        e.preventDefault();
        cart.forEach(function (ele) {
            importeFinal = importeFinal + ele.price * cant;
        });
        $('#precioFinal').append(importeFinal);
    });

    $('#btnPay').click(function (e) {
        e.preventDefault();
        alert('Pago Aprobado');
        localStorage.removeItem('selectedProducts');
        location.reload();
    });

});