// 헤더 :: 검색 아이콘 액션
function activeHeader() {
    const headerSearchBtn = document.querySelector('#header__search-btn');
    const headerSearch = document.querySelector('header input[type="search"]');

    headerSearchBtn.addEventListener('click', function() {
        if (!headerSearch.classList.contains('active')) {
            headerSearch.classList.add('active');

            // 버튼 클릭하면 검색 인풋 포커스
            headerSearch.focus();
            headerSearchBtn.classList.add('active');
        } else {
            headerSearch.classList.remove('active');
            headerSearchBtn.classList.remove('active');
        }
    });
};

// 페이지
const pages = [{
        id: 'wgame',
        title: '끝말잇기',
        keywords: ['GAME', 'JS', 'PROMPT', 'JAVASCRIPT', '게임', '자바스크립트', '프롬프트'],
    },
    {
        id: 'naver',
        title: 'NAVER',
        keywords: ['WEB', 'HTML', 'CSS', '웹', '반응형', '퍼블리싱', '네이버'],
    },
]

// 페이지 검색
function searchPage(q) {
    for (let i = 0; i < pages.length; i += 1) {
        const page = pages[i];
        const pageElem = document.getElementById(`${page.id}`);
        const pagekeywords = page.keywords

        let hasKeyword = false;

        for (let k = 0; k < pagekeywords.length; k += 1) {
            if (pagekeywords[k].toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1) {
                hasKeyword = true;
                break;
            }
        };

        // 
        if (page.title.toLocaleLowerCase().indexOf(q.toLocaleLowerCase()) > -1 || hasKeyword) {
            pageElem.classList.remove("hide");
        } else {
            pageElem.classList.add("hide");
        }
    };
}

// 검색어로 검색
function registerSearchEvent() {
    const selectElement = document.getElementById('header__search');

    selectElement.addEventListener('input', (event) => {
        const q = event.target.value;

        searchPage(q);
    });
};


// 키워드로 검색
function keywordSearchEvent() {

    const keywordSpan = document.querySelectorAll('.pages__title span');


    for (let i = 0; i < keywordSpan.length; i += 1) {
        const spanInnerText = keywordSpan[i].innerText;
        // SPAN 키워드 클릭
        keywordSpan[i].addEventListener('click', function() {
            const selectElement = document.getElementById('header__search');

            // 검색어 = SPAN 키워드
            selectElement.value = spanInnerText;
            searchPage(spanInnerText);
        });
    };
};

// 끝말잇기
function wordGame() {
    const startWordGame = document.querySelector('#word__game');

    startWordGame.addEventListener('click', function() {
        // 제시어
        let word = '스라미';

        while (true) {
            // 한글자 입력
            let answer = prompt(`제시어 : ${word}`);
            if (answer.length <= 1) {
                alert('한 글자 이상 입력하세요! :(');
                break;
            }
            // 한글 외 문자열 입력
            const korean = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
            if (korean.test(answer)) {
                alert('한글만 입력해주세요! :(');
                break;
            }
            // 정답
            if (word[word.length - 1] === answer[0]) {
                word = answer;
            } else {
                // 틀린 경우
                alert('틀렸습니다! :(');
                break;
            }
        };
    });
};

// INIT
document.addEventListener('DOMContentLoaded', function() {
    // 헤더 :: 검색 아이콘 액션
    activeHeader();

    // 검색어로 검색
    registerSearchEvent();

    // 키워드로 검색
    keywordSearchEvent();

    // 끝말잇기
    wordGame();
})