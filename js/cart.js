$(document).ready(function () {
    let importeFinal = 0;
    const cart = JSON.parse(localStorage.getItem('selectedProducts'));
    if (cart) {
        cart.forEach(function (product, i) {
            const info =
                `<tr>
                <th scope="row">${i+1}</th>
                    <td>${product.name}</td>
                    <td id='priceUnit'>${product.price}</td>
                    <td> 
                        <div class="input-group input-group-sm mb-3">
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                        </div>
                    </td>
                </tr>`;
            $('#tablaCuerpo').append(info);
        });
    }
    const finalPrices = `<td> ${importeFinal} </td>`;
    $('.finalPrice').append(finalPrices);


});