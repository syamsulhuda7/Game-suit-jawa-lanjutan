var ulang = true;
while (ulang) {
// menamgkap pilihan player
var p = prompt('pilih: gajah, semut, orang')

// mengangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();
if ( comp < 0.34 ) {
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.66 ) {
    comp = 'semut';
} else {
    comp = 'manusia'; 
}

// menentukan rules
var hasil = '';
if ( p == comp ) {
    hasil = 'SERI';
} else if ( p == 'gajah' ) {
    hasil = (comp == 'manusia') ? 'MENANG' : 'KALAH';
} else if ( p == 'manusia' ) {
    if (comp == 'semut') {
        hasil = 'MENANG';
    } else { 
        hasil = 'KALAH'
    }
} else if ( p == 'semut' ) {
    if (comp == 'gajah') {
        hasil = 'MENANG'
    } else {
        hasil = 'KALAH'
    }
} else {
    hasil = 'TIDAK ADA'
}


// tampilkan hasilnya
alert ('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '.\nMaka hasilnya kamu ' + hasil);

ulang = confirm('mau lagi???');
}

alert('terimakasih sudah bermain bersamaku 😊')