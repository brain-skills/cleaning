$(document).ready(function () {
	// Функция для отображения дочерних ссылок на основе выбранной родительской ссылки
	function updateChildLinks(parentHash) {
		$(".child-group").hide(); // Скрываем все дочерние ссылки
		$(`.child-group[data-parent="${parentHash}"]`).show(); // Отображаем только дочерние ссылки для выбранного родителя
	}
	// Функция для отображения активных вкладок (родительских и дочерних) на основе текущего хэша в URL
	function showTabFromHash() {
		const hash = window.location.hash || "#1"; // Получаем текущий хэш
		const hashParts = hash.split('?');
		const parentHash = hashParts[0];
		const childSuffix = hashParts[1] ? hashParts[1] : '1';
		const childHash = `${parentHash}?${childSuffix}`;
		$("#parent-select").val(parentHash); // Обновляем выпадающий список
		$(".nav-tabs .nav-link").removeClass("active"); // Убираем класс active у всех ссылок
		$(`.nav-tabs .nav-link[href="${parentHash}"]`).addClass("active"); // Добавляем класс active к родительской ссылке
		updateChildLinks(parentHash); // Обновляем дочерние ссылки
		$(".child-group .nav-link").removeClass("active"); // Убираем класс active у всех дочерних ссылок
		$(`.child-group[data-parent="${parentHash}"] .nav-link[href="${childHash}"]`).addClass("active"); // Добавляем класс active к дочерней ссылке
		$(".block").hide(); // Скрываем все блоки
		$(".parent-block").hide(); // Скрываем все родительские блоки
		$(`.parent-block.block${parentHash.replace('#', '')}`).show(); // Показываем нужный родительский блок
		$(".child-block").hide(); // Скрываем все дочерние блоки
		$(`.child-block.${parentHash.replace('#', '')}-${childSuffix}`).show(); // Показываем дочерний блок
	}
	// Обработчик изменения выбора в выпадающем списке родительских ссылок
	$("#parent-select").on("change", function () {
		const selectedParent = $(this).val(); // Получаем выбранного родителя
		window.location.hash = selectedParent; // Устанавливаем новый хэш
	});
	// Первоначальная инициализация вкладок
	showTabFromHash();
	// Событие для отслеживания изменений хэша
	$(window).on("hashchange", showTabFromHash);
	// Обработчик кликов по всем ссылкам с классом nav-link
	$(document).on("click", ".nav-link", function (event) {
		event.preventDefault(); // Предотвращаем стандартное поведение
		const target = $(this).attr("href"); // Получаем значение href
		window.location.hash = target; // Устанавливаем новый хэш
	});
});

// Сохраняем скролл при уходе со страницы
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollY', window.scrollY);
});

// Восстанавливаем скролл при загрузке страницы
window.addEventListener('load', () => {
    const scrollY = localStorage.getItem('scrollY');
    if (scrollY !== null) {
        window.scrollTo(0, parseInt(scrollY, 10));
    }
});

// // Цены
const priceList = document.querySelector('#priceList');
const priceInfoW = '<p class="pt-2 m-0 fs-6">*Стоимость услуг может отличаться от заявленных в прайсе.<br>Точную стоимость уточняйте у оператора!</p>';

const priceHandlers = {
    '#сsPrice': '1.png',
    '#cgPrice': '1.png',
    '#caPrice': '1.png',
    '#fPrice': '2.png',
    '#wPrice': '3.png'
};

Object.entries(priceHandlers).forEach(([id, img]) => {
    document.querySelector(id)?.addEventListener('click', () => {
        priceList.innerHTML = `<img src="assets/img/price/${img}" class="img-fit" loading="lazy" alt=""><br>${priceInfoW}`;
    });
});

// // Модальные окна
for (let i = 1; i <= 4; i++) {
    window[`openMyModal${i}`] = () => new bootstrap.Modal(document.getElementById(`buttonGroup${i}`)).show();
}