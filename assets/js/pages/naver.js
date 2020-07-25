// fixed header / floating  {
window.addEventListener('scroll', function() {

    const header = document.querySelector('header');
    const floating = document.querySelector('.floating__wrapper');

    if (window.pageYOffset >= 5) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

    if (window.pageYOffset >= 100) {
        floating.classList.add('active');
    } else {
        floating.classList.remove('active');
    }

})

// Media Menu Show & Hide 

function mediaMenuShowNHide() {
    const haederMenuBtn = document.getElementsByClassName('header__menu__icon')[0];
    const headerMenu = document.getElementsByClassName('header__lnb')[0];

    haederMenuBtn.addEventListener('click', function() {

        let body = document.querySelector('body');

        if (!headerMenu.classList.contains('active')) {
            headerMenu.classList.add('active');
            haederMenuBtn.classList.add('active');
            body.style.overflowY = 'hidden';
        } else {
            headerMenu.classList.remove('active');
            haederMenuBtn.classList.remove('active');
            body.style.overflowY = '';
        }
    })
};


// Show & Hide Mobile Menu
function showHideMobileMenu() {
    const mobileMenuBtn = document.getElementById('header__mobile__menu-btn');
    const mobileMenuShow = document.getElementById('header__bg');
    const mobileMenuDim = document.getElementById('header__mobile__menu-dim');

    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenuShow.classList.contains('active')) {
            mobileMenuShow.classList.remove('active');
            mobileMenuDim.classList.remove('active');
        } else {
            mobileMenuShow.classList.add('active');
            mobileMenuDim.classList.add('active');
        }
    })

    mobileMenuDim.addEventListener('click', function() {
        mobileMenuShow.classList.remove('active');
        mobileMenuDim.classList.remove('active');
    })
};

// Change Recommend Tab

function changeRecommendTab() {
    const recommendTabMenu = document.getElementsByClassName('idx__recommend__tab-menu');
    const recommendTabInner = document.getElementsByClassName('idx__recommend__inner');
    const menuCnt = document.getElementsByClassName('idx__recommend__tab-menu').length;

    for (let i = 0; i < menuCnt; i += 1) {

        recommendTabMenu[i].addEventListener('click', function() {
            for (let k = 0; k < menuCnt; k += 1) {
                if (i === k) {
                    //  clicked
                    recommendTabMenu[k].classList.add('active');
                    recommendTabInner[k].classList.add('active');
                } else {
                    // other
                    recommendTabMenu[k].classList.remove('active');
                    recommendTabInner[k].classList.remove('active');
                }
            }
        });
    }
};
// ! Change Recommend Tab


// Change StandBox Mode
function changeStnadBoxMode() {
    const standboxGrid = document.getElementById('idx__standbox__grid-btn');
    const standboxList = document.getElementById('idx__standbox__list-btn');
    const standboxGridbox = document.getElementsByClassName('idx__standbox__grid')[0];
    const standboxListbox = document.getElementsByClassName('idx__standbox__list')[0];

    standboxGrid.addEventListener('click', function() {
        standboxGrid.classList.add('active');
        standboxGridbox.classList.add('active');
        standboxList.classList.remove('active');
        standboxListbox.classList.remove('active');
    });

    standboxList.addEventListener('click', function() {
        standboxGrid.classList.remove('active');
        standboxGridbox.classList.remove('active');
        standboxList.classList.add('active');
        standboxListbox.classList.add('active');
    });

};

// ! // Change StandBox Mode

// Change StandBox List Tab
function changeStandBoxListTab() {
    const listBoxTabMenu = document.getElementsByClassName('idx__standbox__list__tab-menu');
    const listBoxContents = document.getElementsByClassName('idx__standbox__list__inner');

    for (let i = 0; i < listBoxTabMenu.length; i += 1) {
        listBoxTabMenu[i].addEventListener('click', function() {
            for (let k = 0; k < listBoxTabMenu.length; k += 1) {
                if (i === k) {
                    listBoxTabMenu[k].classList.add('active');
                    listBoxContents[k].classList.add('active');
                } else {
                    listBoxTabMenu[k].classList.remove('active');
                    listBoxContents[k].classList.remove('active');
                }
            };
        })
    }
};
// ! // Change StandBox List Tab



// Idx Da CountDown
function inxDaCountDown(countTo, id) {
    countTo = new Date(countTo).getTime();
    let now = new Date();
    let timeDifference = (countTo - now);
    // let countToDate = new Date();

    let secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    let idEl = document.getElementById(id);
    if (days >= 0 && days < 10) {
        idEl.getElementsByClassName('days')[0].innerHTML = `0` + days;
    } else {
        idEl.getElementsByClassName('days')[0].innerHTML = days;
    };
    if (hours >= 0 && hours < 10) {
        idEl.getElementsByClassName('hours')[0].innerHTML = `0` + hours;
    } else {
        idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    };
    if (mins >= 0 && mins < 10) {
        idEl.getElementsByClassName('minutes')[0].innerHTML = `0` + mins;
    } else {
        idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    };
    if (secs >= 0 && secs < 10) {
        idEl.getElementsByClassName('seconds')[0].innerHTML = `0` + secs;
    } else {
        idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
    };

    if (timeDifference < 0) {
        document.querySelector('#endtitle').innerHTML = '앗! 스라미가 시간을 다시 설정하지 않았나봅니다...ㅠㅠ';
        document.getElementById(id);
        idEl.getElementsByClassName('days')[0].innerHTML = '';
        idEl.getElementsByClassName('hours')[0].innerHTML = ''
        hours = '';
        idEl.getElementsByClassName('minutes')[0].innerHTML = '';
        idEl.getElementsByClassName('seconds')[0].innerHTML = '';
        document.querySelector('.timeRefDays').style.display = 'none';
        document.querySelector('.timeRefHours').style.display = 'none';
        document.querySelector('.timeRefMinutes').style.display = 'none';
        document.querySelector('.timeRefSeconds').style.display = 'none';
        return;
    }

    clearTimeout(inxDaCountDown.interval);
    inxDaCountDown.interval = setTimeout(function() {
        inxDaCountDown(countTo, id);
    }, 1000);
}

// ! // Idx Da CountDown



// Make Dark Mode
function MakeDarkMode() {
    let body = document.querySelector('body');
    const onDarkMode = document.querySelector('#darkModeBtn');

    onDarkMode.addEventListener('click', function() {
        setDarkMode(!body.classList.contains('onDarkMode'));

        // innerHTML
        if (body.classList.contains('onDarkMode')) {
            onDarkMode.innerHTML = 'LIGHT MODE';
        } else {
            onDarkMode.innerHTML = 'DARK MODE';
        }
    })
};

function setDarkMode(isDarkMode) {
    let body = document.querySelector('body');

    if (isDarkMode) {
        body.classList.add('onDarkMode');
        localStorage.setItem('IS_DARK_MODE', true);
    } else {
        body.classList.remove('onDarkMode');
        localStorage.setItem('IS_DARK_MODE', false);
    }
}
// !Make Dark Mode

// Aside Login & Logout

function LoginInAndOut() {
    const LogInBtn = document.getElementsByClassName('aside__login-btn')[0];
    const LogOutBtn = document.getElementsByClassName('aside__logout-btn')[0];

    const LogInDefaultUI = document.getElementsByClassName('aside__login')[0];
    const LogInMemberUI = document.getElementsByClassName('aside__login__member')[0];


    LogInBtn.addEventListener('click', function() {
        LogInDefaultUI.style.opacity = '0';
        LogInDefaultUI.style.zIndex = '-1';
        LogInMemberUI.style.opacity = '1';
        LogInMemberUI.style.zIndex = '99';
    });


    LogOutBtn.addEventListener('click', function() {
        LogInDefaultUI.style.opacity = '1';
        LogInDefaultUI.style.zIndex = '99';
        LogInMemberUI.style.opacity = '0';
        LogInMemberUI.style.zIndex = '-1';
    });

}

// ! Aside Login & Logout

// Swiper
function initSwiper() {
    // Aside Line
    var swiper = new Swiper('.aside__line', {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        duraiton: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next.aside__lineBtn',
            prevEl: '.swiper-button-prev.aside__lineBtn',
        },
    });

    // Aside Da
    var swiper = new Swiper('.aside__da', {
        effect: 'fade',
        duration: 1200,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
    });

    // Aside Pdt
    var swiper = new Swiper('.aside__pdt', {
        duraiton: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next.pdt__Btn',
            prevEl: '.swiper-button-prev.pdt__Btn',
        },
        pagination: {
            el: '.swiper-pagination.pdt__Pagination',
            type: 'fraction',
        },

    });


    // Aside Board
    var swiper = new Swiper('.aside__board', {
        duraiton: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next.board__Btn',
            prevEl: '.swiper-button-prev.board__Btn',
        },
        pagination: {
            el: '.swiper-pagination.aside__board__Pagination',
            type: 'fraction',
        },

    });

    // Idx line
    var swiper = new Swiper('.idx__line', {
        direction: 'vertical',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        duraiton: 1500,
        loop: true,
    });

}
// ! Swiper



// 

document.addEventListener('DOMContentLoaded', function() {
    initSwiper();
    inxDaCountDown('Aug 22, 2020 00: 00: 00', 'idx__da-countdown__inner');

    LoginInAndOut();

    changeStnadBoxMode();

    changeStandBoxListTab();
    changeRecommendTab();

    // MakeDarkMode();

    // let isDarkMode = localStorage.getItem('isDarkMode');
    // setDarkMode(isDarkMode);

    mediaMenuShowNHide();
});