(function () {
    const burgerOpen = document.querySelector('.burger-open-menu');
    const burgerMenu = document.querySelector('.burger-nav');
    const burgerClosed = document.querySelector('.close-line');
    burgerOpen.addEventListener('click', () => {
        burgerMenu.classList.add('burger-nav-open');
    });
    burgerClosed.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-nav-open');
    });
}());

(function () {
    const burgerMenu = document.querySelector('.burger-nav');
    const burgerClosed = document.querySelector('.burger-menu');
    burgerClosed.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-nav-open');
    });
}());

(function () {
    const buttonOpen = document.querySelector('.button_login');
    const popUp = document.querySelector('.popup-fon');
    buttonOpen.addEventListener('click', () => {
        popUp.classList.add('popup-fon-open');
    });
    popUp.addEventListener('click', (event) => {
        if(event.target.classList.contains('popup-fon')) {
            popUp.classList.toggle('popup-fon-open')
        }
    });
}());

(function () {
    const account = document.getElementById('account');
    const popUpMob = document.querySelector('.pop-up-container');
    const popUpClosed = document.querySelector(".popup-fon")
    account.addEventListener('click', () => {
        popUpMob.classList.add('pop-up-container-opened');
        popUpClosed.classList.add('popup-fon-open-mob');
    });
    popUpClosed.addEventListener('click', (event) => {
        if(event.target.classList.contains('popup-fon')) {
            popUpMob.classList.toggle('pop-up-container-opened');
            popUpClosed.classList.toggle('popup-fon-open-mob')
        }
    });    
}());


document.querySelector('.pop-up-sign').onclick = signUp;
function signUp() {
   const mail = document.querySelector('.input-mail').value;
   const Password = document.querySelector('.input-password').value;
   alert('you email:   ' + mail + '\n' +'you password:   ' + Password);
};



let move = 0;
const countryMov = document.querySelector('.container_country');

document.querySelector('.click-left').addEventListener('click', function () {
    move = move + 860;
    if (move > 2580) {
        move = 0;
    }
    countryMov.style.left = move + 'px';
});

document.querySelector('.click-right').addEventListener('click', function () {
    move = move - 860;
    if (move < -2580) {
        move = 0;
    }
    countryMov.style.left = move + 'px';
});


document.querySelector('.registr2').onclick = myClick;
function myClick() {
    const log = 'Create account'
    document.querySelector('.LoginAccount').innerHTML = log;
    const sig = 'Sign Up'
    document.querySelector('.pop-up-sign').innerHTML = sig;
    const already = 'Already have an account?'
    document.querySelector('.registr1').innerHTML = already;
    const fsb = document.querySelector('.signFasebook');
        fsb.classList.add('signFasebook-out');
    const ggl = document.querySelector('.signGoogle');
        ggl.classList.add('signGoogle-out');
    const or = document.querySelector('.or');
        or.classList.add('or-out');
    const forgotPass = document.querySelector('.forgot-password');
        forgotPass.classList.add('forgot-password-out');
    const logIn = 'Log In'
    document.querySelector('.registr2').innerHTML = logIn;  
};


console.log(
    '1) Слайдер изображений в секции destinations +30 \n - на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) +20 \n - Анимации плавного перемещения для слайдера +10 \n 2) Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n - логин попап соответствует верстке его закрытие происходит при клике вне попапа +25 \n - логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег) +25 \n 3) Дополнительный функционал +25 \n -Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) +25'
);

