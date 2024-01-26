let fullScreenBox = document.querySelector('#fullScreenBox');
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
                fullScreenBox.classList.add('show');
                alertNotify.classList.add('show');
                setTimeout(() =>{
                    fullScreenBox.classList.remove('show');
                    alertNotify.classList.remove('show');
                },20000);
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
                fullScreenBox.classList.add('show');
                alertNotify.classList.add('show');
                setTimeout(() =>{
                    fullScreenBox.classList.remove('show');
                    alertNotify.classList.remove('show');
                },20000);
            }
        });
        return false;
    }); 
});

document.addEventListener( 'click', (e) => {
	if ( !alertNotify.onclick ) {
		fullScreenBox.classList.remove('show');
		alertNotify.classList.remove('show');
	}
});