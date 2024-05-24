//Анимация чисел
function animateValue(element, start, end, duration) {
    var obj = document.querySelector(element);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.textContent = current + (element === '.left' ? ' лет' : (element === '.center' ? ' филиалов' : ' кг'));
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue('.left', 0, 13, 2000); // Анимация для значения "13"
animateValue('.center', 0, 19, 2000); // Анимация для значения "19"
animateValue('.right', 4500, 5000, 2000); // Анимация для значения "5000"


//Ответы на вопросы
function toggleDetails(element) {
    const closeBtn = element.querySelector('.close-btn');
    closeBtn.classList.toggle('rotated');
    const detailsBox = element.querySelector('.details-box');
    
    if (element.classList.contains('show-details')) {
        element.classList.remove('show-details');
    } else {
        closeAllDetails();
        element.classList.add('show-details');
    }
}

function closeAllDetails() {
    const grayBoxes = document.querySelectorAll('.gray-box');

    grayBoxes.forEach(box => {
        box.classList.remove('show-details');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".review-form");
    const submitButton = form.querySelector(".sub-button");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const fullNameInput = form.querySelector("input[type='text']");
        const commentInput = form.querySelector("textarea");

        const fullName = fullNameInput.value;
        const comment = commentInput.value;

        // Здесь можно добавить логику для отправки данных на сервер или обработки комментария

        // После отправки формы можно очистить поля ввода
        fullNameInput.value = "";
        commentInput.value = "";

        alert("Отзыв отправлен! Спасибо за ваш комментарий.");
    });
});

function init() {
    let map = new ymaps.Map('map', {
        center: [56.348342568376395,44.09111949999989],
        zoom: 16
    })

}

ymaps.ready(init);

