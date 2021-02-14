const consultData = [];

$(document).ready(function () {
    $('#btnSend').click(function (e) {
        e.preventDefault();
        consultData.push($('#inputName14').val());
        consultData.push($('#inputLastName4').val());
        consultData.push($('#inputEmail').val());
        consultData.push($('#inputPhoneNumber').val());
        consultData.push($('#inputState').val());
        consultData.push($('#consulta').val());
        $(".formulario").animate({
            width: 'toggle'
        }, 500).delay(600);
        $('.formulario').fadeIn(600);
    });
});