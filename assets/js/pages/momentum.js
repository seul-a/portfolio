// CLOCK
function initClock() {
    const clock = document.querySelector('#clock');

    // GET TIME
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // SET HTML 
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
// !! CLOCK


// NAME
function initName() {
    const form = document.querySelector('form');
    const inputName = form.querySelector('input');
    const USER_LS = 'currentName';
    const showName = document.querySelector('#showName');

    function askForName() {
        inputName.classList.add('active');
        showName.classList.remove('active');

        form.addEventListener('submit', function(event) {
            const cureentValue = inputName.value;
            
            event.preventDefault();
            showCurrentName(cureentValue);
            // 로컬 스토리지 저장
            localStorage.setItem(USER_LS, cureentValue);
        });
    };

    function showCurrentName(name) {
        showName.innerText = `안녕하세요, ${name}님!`
        showName.classList.add('active');
        inputName.classList.remove('active');
    };

    function loadName() {
        const currentName = localStorage.getItem(USER_LS);

        if(currentName === null) {
            askForName();
        }
        else {
            showCurrentName(currentName);
        }
    };
    // INIT
    loadName();
};
// !! NAME

// BACKGROUND

function  generateRandom() {
    const imgNumb = 5;
    const number = Math.floor(Math.random() * imgNumb);

    return number;
};

function changeBG() {
    const body = document.querySelector('body');
    const randomNumb = generateRandom();

    const image = new Image();
    image.src = `../assets/images/momentum/momentumBg_${randomNumb + 1}.jpg`;
    body.appendChild(image);
    image.classList.add('momentumBg');
    
};
// !! BACKGROUND


// WEATHER
function handleGeoSucces(position) {
    // 위치
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude, longitude};
    const apiKey = 'a664b58736c3902b5b5c676c9a6112ad';
    // 로컬스토리지 저장
    localStorage.setItem('coords', JSON.stringify(coordsObj));
    
    // 날씨가져오기
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            const apiWeather = document.querySelector('.apiWeather');
            const temperature = json.main.temp;
            const place = json.name;
            apiWeather.innerText = `${temperature}c, ${place}`
        });
};

function handleGeoError() {
    console.log('위치를 알 수 없습니다')
};

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
};

function initWeather() {
    const COORDS = 'coords';
    const loadCoords = localStorage.getItem('COORDS');

    if(loadCoords === null) {
        askForCoords();
    } else {
    };
};
// !! WEATHER


// INIT
document.addEventListener('DOMContentLoaded', function() {
    // CLOCK
    initClock();
    // 1초마다 업데이트
    setInterval(initClock, 1000);

    // NAME
    initName();

    // CHANGE BG
    changeBG();

    // WEATHER
    initWeather();
  });