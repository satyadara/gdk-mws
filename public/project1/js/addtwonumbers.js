function kalkulator() {
    let angka = document.querySelectorAll('input');
    let i1 = angka[0].value; //angka pertama
    let i2 = angka[1].value; //angka kedua
    angka[2].value = parseInt(i1) + parseInt(i2);
    let pesan = document.getElementById('message');
    pesan.textContent = "Selesai";
    let label = document.querySelector('label')
    label.textContent = "<=== This is a label"
}

let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);
