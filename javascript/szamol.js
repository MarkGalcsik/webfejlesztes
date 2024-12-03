document.querySelectorAll('#urlap2 input').forEach(input => {
    input.addEventListener('change', szamol);
});



function szamol() {
    let alak = 0;
    let kor = 0;

    if (document.getElementById('alak-1').checked) {
        alak = 2000;
    }

    if (document.getElementById('alak-10').checked) {
        alak = 18000;
    }

    if (document.getElementById('alak-20').checked) {
        alak = 34000;
    }

    if (document.getElementById('alak-6').checked) {
        alak = 78000;
    }

    if (document.getElementById('alak-eves').checked) {
        alak = 140000;
    }

    if (document.getElementById('kor-1').checked) {
        kor = 2000;
    }

    if (document.getElementById('kor-10').checked) {
        kor = 18000;
    }

    if (document.getElementById('kor-20').checked) {
        kor = 34000;
    }

    if (document.getElementById('kor-6').checked) {
        kor = 78000;
    }

    if (document.getElementById('kor-eves').checked) {
        kor = 140000;
    }


    let total = alak + kor;

    document.getElementById('total').value = `Összesen: ${total} Ft`;

}
