const promoMovie = document.querySelector('#promoMovie');
const cleanService = document.querySelector('#cleanservice');
const tabs = {
    bcomerc: document.querySelector('#comerc-tab'),
    clean: document.querySelector('#clean-tab'),
    furchem: document.querySelector('#furchem-tab'),
    windw: document.querySelector('#windw-tab')
};

const blocks = {
    b: ['#b-1'],
    bgen: ['#bgen1', '#bgen2', '#bgen3', '#bgen4'],
    bday: ['#bday1', '#bday2', '#bday3', '#bday4'],
    bext: ['#bext1', '#bext2', '#bext3', '#bext4'],
    clean: [ '#c-1', '#c-2' ],
    cs: [ '#cs1', '#cs2', '#cs3', '#cs4' ],
    cg: [ '#cg1', '#cg2', '#cg3', '#cg4' ],
    ca: [ '#ca1', '#ca2', '#ca3', '#ca4' ],
    f: [ '#f-1', '#f-2', '#f-3', '#f-4', '#f-5' ],
    w: [ '#w-1', '#w-2', '#w-3', '#w-4', '#w-5' ],
    types: {
        support: '#support',
        general: '#general',
        afterem: '#afterem'
    }
};

const showElems = (selectors) => selectors.forEach(id => document.querySelector(id)?.classList.add('show', 'active'));
const hideElems = (selectors) => selectors.forEach(id => document.querySelector(id)?.classList.remove('show', 'active'));

const setSelected = (index) => {
    [...cleanService.options].forEach((opt, i) => {
        if (i === index) opt.setAttribute('selected', 'selected');
        else opt.removeAttribute('selected');
    });
    cleanService.selectedIndex = index;
};

const cleanOff = () => hideElems([...blocks.cs, ...blocks.cg, ...blocks.ca]);
const hideAll = () => hideElems([
    ...blocks.clean, ...blocks.cs, ...blocks.cg, ...blocks.ca,
    ...blocks.f, ...blocks.w,
    ...Object.values(blocks.types)
]);

const activateTab = (type) => {
    Object.values(tabs).forEach(tab => tab.classList.remove('active'));
    tabs[type]?.classList.add('active');
};

const updateState = (hash) => history.pushState(null, null, hash);

const handleServiceChange = (index) => {
    hideAll();
    setSelected(index);

    switch(index) {
        case 0:
            activateTab('bcomerc');
            showElems([...blocks.b, ...blocks.bgen]);
            promoMovie.href = 'assets/4.mp4';
            updateState('#comerc-gen');
            break;
        case 1:
            activateTab('clean');
            showElems([...blocks.clean, ...blocks.cs]);
            promoMovie.href = 'assets/1.mp4';
            showElems([blocks.types.support]);
            updateState('#clean-s');
            break;
        case 2:
            activateTab('furchem');
            showElems(blocks.f);
            promoMovie.href = 'assets/2.mp4';
            updateState('#dry-s');
            break;
        case 3:
            activateTab('windw');
            showElems(blocks.w);
            promoMovie.href = 'assets/3.mp4';
            updateState('#wash-s');
            break;
    }
};

cleanService.addEventListener('change', (e) => {
    handleServiceChange(cleanService.selectedIndex);
    e.preventDefault();
});

// Привязка кликов к табам и блокам
const tabHandlers = {
    '#comerc-tab': () => handleServiceChange(0),
    '#bgen1': () => {
        handleServiceChange(0);
        showElems(blocks.bgen);
        hideElems([...blocks.bday, ...blocks.bext]);
        updateState('#comerc-gen');
    },
    '#bday1': () => {
        handleServiceChange(0);
        showElems(blocks.bday);
        hideElems([...blocks.bgen, ...blocks.bext]);
        updateState('#comerc-day');
    },
    '#bext1': () => {
        handleServiceChange(0);
        showElems(blocks.bext);
        hideElems([...blocks.bgen, ...blocks.bday]);
        updateState('#comerc-ext');
    },
    '#clean-tab': () => handleServiceChange(1),
    '#cs1': () => {
        handleServiceChange(0);
        showElems(blocks.cs);
        hideElems([...blocks.cg, ...blocks.ca]);
        showElems([blocks.types.support]);
        hideElems([blocks.types.general, blocks.types.afterem]);
        updateState('#clean-s');
    },
    '#cg1': () => {
        handleServiceChange(0);
        showElems(blocks.cg);
        hideElems([...blocks.cs, ...blocks.ca]);
        showElems([blocks.types.general]);
        hideElems([blocks.types.support, blocks.types.afterem]);
        updateState('#clean-g');
    },
    '#ca1': () => {
        handleServiceChange(0);
        showElems(blocks.ca);
        hideElems([...blocks.cs, ...blocks.cg]);
        showElems([blocks.types.afterem]);
        hideElems([blocks.types.support, blocks.types.general]);
        updateState('#clean-r');
    },
    '#furchem-tab': () => handleServiceChange(2),
    '#windw-tab': () => handleServiceChange(3)
};

Object.entries(tabHandlers).forEach(([selector, handler]) => {
    const el = document.querySelector(selector);
    el?.addEventListener('click', e => { handler(); e.preventDefault(); });
});

// Хэш-инициализация
const initFromHash = () => {
    const hash = location.hash;
    if (hash === '#comerc-gen') tabHandlers['#bgen1']();
    else if (hash === '#comerc-day') tabHandlers['#bday1']();
    else if (hash === '#comerc-ext') tabHandlers['#bext1']();
    else if (hash === '#clean-g') tabHandlers['#cg1']();
    else if (hash === '#clean-r') tabHandlers['#ca1']();
    else if (hash === '#clean-s') tabHandlers['#cs1']();
    else if (hash === '#dry-s') handleServiceChange(3);
    else if (hash === '#wash-s') handleServiceChange(4);
    else handleServiceChange(0); // по умолчанию коммерческий
};

window.addEventListener('load', () => {
    initFromHash();
    const scroll = localStorage.getItem('state_scroll');
    if (scroll) window.scrollTo(0, scroll);
    window.addEventListener('scroll', () => localStorage.setItem('state_scroll', window.pageYOffset));
});

// Цены
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

// Модальные окна
for (let i = 1; i <= 4; i++) {
    window[`openMyModal${i}`] = () => new bootstrap.Modal(document.getElementById(`buttonGroup${i}`)).show();
}