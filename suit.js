getPilihanKomputer = () => {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.66) return 'semut';
    return 'orang';
}

getHasil = (comp, p) => {
    if (p == comp) return 'SERI';
    if (p == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (p == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if (p == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}


function putar () {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['semut', 'orang', 'gajah'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai >1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i=0;
    }, 100);
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();
        setTimeout(function() {
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
    
            const info = document.querySelector('.info')
            info.innerHTML = hasil;
        }, 1000);

    })
});




// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer +'.png');

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// });
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer +'.png');

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// });
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer +'.png');

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil;
// });