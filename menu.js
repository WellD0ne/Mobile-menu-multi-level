
// Генерация меню UL из объекта
function createMenuUl(menuObj, counter = 0, headerSection = 'Каталог') {
    let menuSection = document.createElement('section');
    menuSection.insertAdjacentHTML('afterbegin', '<div class="menuHeader">'+headerSection+'</div>');
    if (counter > 0) {
        menuSection.classList.add('nav-expand-content')
        menuSection.insertAdjacentHTML('afterbegin', '<a class="nav-back-link" href="#">Вернуться назад</a>');
    };
    let menuUl = document.createElement('ul');
    menuUl.classList.add('nav-items');
    
    menuObj.forEach(item => {
        if (item.children) {
            let newLi = document.createElement('li');
            newLi.classList.add('nav-item', 'nav-expand');
            newLi.insertAdjacentHTML('afterbegin', '<a class="nav-link nav-expand-link" href="#">' + item.title + '</a>');
            newLi.append(createMenuUl(item.children, ++counter, item.title));
            menuUl.append(newLi);
        } else {
            let newLi = document.createElement('li');
            newLi.classList.add('nav-item');
            newLi.insertAdjacentHTML('afterbegin', '<a class="nav-link" href="' + item.url + '">' + item.title + '</a>');
            menuUl.append(newLi);
        }
    });

    menuSection.append(menuUl);
    return menuSection;
}

// Вставка меню в DOM
const menuObj = getMenu();
document.querySelector('.mobileMenu').append(createMenuUl(menuObj));

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
const backLink = '<a class="nav-back-link" href="#">Вернуться назад</a>';

// Обработка иерархии меню
navExpand.forEach(item => {
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
});


const openMenuBtn = document.querySelector('.openMenu');
const body = document.querySelector('body');
const closeMenuBtn = document.querySelector('.closeMenu');
const mobileMenuWrapper = document.querySelector('.mobileMenuWrapper');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Закрыть меню при клике мимо меню
document.addEventListener("click", event => {
    if (event.target.matches("body.wrapper")) {
      toggleMenu();
    }
  }, false);

// Переключение состояния меню
function toggleMenu(){
    mobileMenuWrapper.classList.toggle('opened');
    body.classList.toggle('wrapper');
}

// Получение объекта меню
function getMenu(){
    // TODO: реализовать получение JSON с бэка

    return [
        {
            "title": "Марки бетона",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.html"
        },
        {
            "title": "Раствор",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C2.html",
            "children": [{
                    "title": "Заголовок пункта меню 2",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html"
                },
                {
                    "title": "Заголовок пункта меню 3",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html",
                    "children": [{
                            "title": "Заголовок пункта меню 4",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        },
                        {
                            "title": "Заголовок пункта меню 6",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Керамзитобетон",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C2.html",
            "children": [{
                    "title": "Заголовок пункта меню 2",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html"
                },
                {
                    "title": "Заголовок пункта меню 3",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html",
                    "children": [{
                            "title": "Заголовок пункта меню 4",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        },
                        {
                            "title": "Заголовок пункта меню 6",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html",
                            "children": [{
                                "title": "Заголовок пункта меню 7",
                                "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C5.html"
                            }]
                        }]
                }
            ]
        },
        {
            "title": "ЦПС",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C5.html"
        },
        {
            "title": "Марки бетона",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.html"
        },
        {
            "title": "Раствор",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C2.html",
            "children": [{
                    "title": "Заголовок пункта меню 2",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html"
                },
                {
                    "title": "Заголовок пункта меню 3",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html",
                    "children": [{
                            "title": "Заголовок пункта меню 4",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        },
                        {
                            "title": "Заголовок пункта меню 6",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Керамзитобетон",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C2.html",
            "children": [{
                    "title": "Заголовок пункта меню 2",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html"
                },
                {
                    "title": "Заголовок пункта меню 3",
                    "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C3.html",
                    "children": [{
                            "title": "Заголовок пункта меню 4",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        },
                        {
                            "title": "Заголовок пункта меню 6",
                            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C4.html"
                        }
                    ]
                }
            ]
        },
        {
            "title": "ЦПС",
            "url": "/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C5.html"
        }
    ];
};