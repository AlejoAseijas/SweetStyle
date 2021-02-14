$(document).ready(function () {
    let importeFinal = 0;

    const cart = JSON.parse(localStorage.getItem('selectedProducts'));
    const amountN = cart.length;
    if (cart) {
        cart.forEach(function (product, i) {
            const info =
                `<tr>
                <th scope="row">${i+1}</th>
                    <td>${product.name}</td>
                    <td id='priceUnit'>${product.price}</td>
                    <td> 
                        <div class="input-group input-group-sm mb-3">
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='amount${i+1}'>
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

    $('#btnPay').click(function (e) {
        e.preventDefault();
    });

    $('#btnCalc').click(function (e) {
        e.preventDefault();
        cart.forEach(function (pro, k) {
            importeFinal = importeFinal + pro.price;
            const canti = $("#amount{k}");
            console.log(canti);
        });

    });

});