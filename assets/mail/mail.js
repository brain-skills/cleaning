let alertNotify = document.querySelector('#alertNotify');

$(document).ready(function () {
    $('#feedbackForm').submit(function () {
        var formID = $(this).attr('id'); // ID
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'assets/mail/feedback.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки в текущей форме
                alertNotify.classList.add('show');
                setTimeout(() =>{
                    alertNotify.classList.remove('show');
                },6000);
            }
        });
        return false;
    }); 
});

$(document).ready(function () {
    $('#orderForm').submit(function () {
        var formID = $(this).attr('id'); // ID
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'assets/mail/order.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки в текущей форме
                alertNotify.classList.add('show');
                setTimeout(() =>{
                    alertNotify.classList.remove('show');
                },6000);
            }
        });
        return false;
    }); 
});