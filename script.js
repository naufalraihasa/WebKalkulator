let buttons = document.querySelector('.tombol');
let btn = document.querySelectorAll('span');
let Hasil = document.getElementById('Nilai');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            Hasil.innerHTML = eval(Hasil.innerHTML);
        } else {
            if (this.innerHTML == "C") {
                Hasil.innerHTML = "";
            }
            else {
                Hasil.innerHTML += this.innerHTML;
            }
        }
    })
}