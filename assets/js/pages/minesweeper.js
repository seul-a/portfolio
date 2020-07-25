function minesweepr() {
    const submit = document.querySelector('#select__submit');

    submit.addEventListener('click', function() {
        const row = parseInt(document.querySelector('#select__row').value);
        const col = parseInt(document.querySelector('#select__col').value);
        const mine = parseInt(document.querySelector('#select__mine').value);

        // 지뢰위치
        let tabletd = Array(row * col)
            .fill()
            .map(function(elem, index) {
                return index;
            });

        let shuffle = [];

        while (tabletd.length > 80) {
            let checking = tabletd.splice(Math.floor(Math.random() * tabletd.length), 1)[0];
            shuffle.push(checking);
        };

        // 데이터
        let tableData = [];

        // 테이블
        const tbody = document.querySelector('tbody');
        for (let i = 0; i < col; i += 1) {
            const tr = document.createElement('tr');

            let arr = [];
            tableData.push(arr);
            for (let k = 0; k < row; k += 1) {
                const td = document.createElement('td');
                tr.appendChild(td);

                arr.push(1);
            }
            tbody.appendChild(tr);
        };


        // 지뢰심기
        for (let j = 0; j < shuffle.length; j += 1) {
            let vert = Math.floor(shuffle[j] / 10) + 1;
            let hori = shuffle[j] % 10 + 1;

            console.log(vert, hori);
            tbody.children[vert].children[hori].textContent = 'x';
            tableData[vert][hori] = 'x';
        };
        console.log(tableData);

    });

};

document.addEventListener('DOMContentLoaded', function() {
    // INIT
    minesweepr();
});