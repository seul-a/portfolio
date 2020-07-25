// PAINTER
function initPainter() {
    const canvas = document.querySelector('#canvas');
    canvas.width = 700;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");

    // CTX DEFAULT
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 700, 400);

    ctx.strokeStyle = '#333333';
    ctx.fillStyle = '#333333';
    ctx.lineWidth = 2.5;

    let painting = false;
    let filling = false;

    // START PAINTING
    function startPainting() {
        painting = true;
    }

    // STOP PAINTING
    function stopPainting() {
        painting = false;
    };


    // PAINTING
    if (canvas) {
        // MOUSE DOWN 페인팅 시작
        canvas.addEventListener('mousedown', function(event) {
            startPainting();
        });

        // MOUSE MOVE 페인팅 진행
        canvas.addEventListener('mousemove', function(event) {
            const X = event.offsetX;
            const Y = event.offsetY;

            if (!painting) {
                ctx.beginPath();
                ctx.moveTo(X, Y);
            } else {
                ctx.stroke();
                ctx.lineTo(X, Y);

                // ctx.closePath();
            }
        });

        // MOUSE UP 페인팅 종료
        canvas.addEventListener('mouseup', function(event) {
            stopPainting();
        });

        // MOUSE LEAVE 페인팅 종료
        canvas.addEventListener('mouseleave', function(event) {
            stopPainting();
        });

        // FILL 클릭이벤트
        canvas.addEventListener('click', function() {
            if (filling) {
                ctx.fillRect(0, 0, 700, 400)
            };
        });

        // 우클릭 무시
        canvas.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
    };
    // !! PAINTING

    // COLORS
    const colors = document.querySelectorAll('.colors span');

    Array.from(colors).forEach(color => color.addEventListener('click', function(event) {
        const color = event.target.style.backgroundColor;

        // CHANGE CTX COLOR
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    }));
    // !! COLORS

    // BRUSH RANGE
    const range = document.querySelector('#control__range');

    if (range) {
        range.addEventListener('input', function(event) {
            const brushRange = event.target.value;
            ctx.lineWidth = brushRange;
        })
    };
    // !! BRUSH RANGE

    // FILL
    const fillMode = document.querySelector('#control__fill');

    if (fillMode) {
        fillMode.addEventListener('click', function() {
            if (filling === true) {
                filling = false;
                fillMode.innerText = '채우기'
            } else {
                filling = true;
                fillMode.innerText = '그리기'

                ctx.fillStyle = ctx.strokeStyle;
            };
        })
    };
    // !! FILL

    // DOWNLOAD
    const saveBtn = document.querySelector('#control__save');

    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'PAINTER그림';
            link.href = canvas.toDataURL();
            link.click();
        });
    };
    // !! DOWNLOAD
};
// !! PAINTER

window.onload = () => {
    // PAINTER
    initPainter();
}