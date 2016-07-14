var writeBtn = document.querySelector('.map-contacts a.btn');
var modalWindow = document.querySelector('.modal-content');
var cancelBtn = modalWindow.querySelector('.cancel');

writeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (!modalWindow.classList.contains('modal-content-show')) {
    modalWindow.classList.add('modal-content-show');
  }
});

cancelBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (modalWindow.classList.contains('modal-content-show')) {
    modalWindow.classList.remove('modal-content-show');
  }
});


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.0131,37.8448],
            zoom: 16,
            
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([56.0126, 37.8479], {
            hintContent: 'Мы находимся здесь',
            balloonContent: 'NERDS'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-poiner.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -190]
        });

    myMap.geoObjects.add(myPlacemark);
});